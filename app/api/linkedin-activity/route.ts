// app/api/linkedin-activity-puppeteer/route.ts
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export const maxDuration = 60; // Set max duration for serverless function

export async function GET(request: Request) {
    let browser;

    try {
        const { searchParams } = new URL(request.url);
        const profileUrl = searchParams.get('url') || 'https://www.linkedin.com/in/ishan-aslot/recent-activity/all/';

        console.log('Launching browser...');

        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--disable-gpu',
                '--window-size=1920x1080',
            ],
        });

        const page = await browser.newPage();

        // Set realistic viewport and user agent
        await page.setViewport({ width: 1920, height: 1080 });
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        // Set extra headers
        await page.setExtraHTTPHeaders({
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        });

        console.log('Navigating to:', profileUrl);

        // Navigate to the page
        const response = await page.goto(profileUrl, {
            waitUntil: 'networkidle0',
            timeout: 30000,
        });

        if (!response) {
            throw new Error('Failed to load page');
        }

        // Check if redirected to login
        const currentUrl = page.url();
        if (currentUrl.includes('login') || currentUrl.includes('authwall')) {
            await browser.close();
            return NextResponse.json({
                error: 'Authentication required',
                message: 'LinkedIn requires login to view this content.',
                currentUrl: currentUrl,
                solution: 'You need to provide LinkedIn cookies or use LinkedIn API with OAuth.',
                activities: [],
            }, { status: 401 });
        }

        // Wait for content to load
        try {
            await page.waitForSelector('main, .scaffold-layout__main', { timeout: 10000 });
        } catch (e) {
            console.log('Main content selector not found, continuing anyway...');
        }

        // Additional wait for dynamic content
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Extract activities using multiple selectors
        const activities = await page.evaluate(() => {
            const posts: Array<{
                title: string;
                content: string;
                time: string;
                link?: string;
            }> = [];

            // Try multiple selectors
            const selectors = [
                'article',
                '.feed-shared-update-v2',
                '.occludable-update',
                '[data-urn*="activity"]',
                '.profile-creator-shared-feed-update__container',
            ];

            const elements: Element[] = [];
            selectors.forEach(selector => {
                const found = document.querySelectorAll(selector);
                found.forEach(el => elements.push(el));
            });

            elements.forEach((element) => {
                // Extract title
                const titleSelectors = [
                    '.feed-shared-actor__title',
                    '.update-components-actor__title',
                    '.feed-shared-actor__name',
                    'h2',
                    'h3',
                ];
                let title = '';
                for (const sel of titleSelectors) {
                    const el = element.querySelector(sel);
                    if (el?.textContent?.trim()) {
                        title = el.textContent.trim();
                        break;
                    }
                }

                // Extract content
                const contentSelectors = [
                    '.feed-shared-text__text-view',
                    '.break-words',
                    '.attributed-text-segment-list__content',
                    '.feed-shared-update-v2__description',
                    '.feed-shared-text',
                    'p',
                ];
                let content = '';
                for (const sel of contentSelectors) {
                    const el = element.querySelector(sel);
                    if (el?.textContent?.trim()) {
                        content = el.textContent.trim();
                        break;
                    }
                }

                // Extract time
                const timeElement = element.querySelector('time');
                const time = timeElement?.getAttribute('datetime') ||
                    timeElement?.textContent?.trim() ||
                    element.querySelector('.feed-shared-actor__sub-description')?.textContent?.trim() ||
                    '';

                // Extract link
                const linkElement = element.querySelector('a[href*="/feed/update/"], a[href*="/posts/"]');
                const link = linkElement?.getAttribute('href') || '';

                // Only add if we have meaningful content
                if (content && content.length > 20) {
                    posts.push({
                        title: title || 'LinkedIn Post',
                        content: content.substring(0, 1000), // Limit content length
                        time: time,
                        link: link ? (link.startsWith('http') ? link : `https://www.linkedin.com${link}`) : undefined,
                    });
                }
            });

            return posts;
        });

        await browser.close();

        // Remove duplicates based on content similarity
        const uniqueActivities = activities.filter((activity, index, self) =>
            index === self.findIndex((a) =>
                a.content.substring(0, 100) === activity.content.substring(0, 100)
            )
        );

        if (uniqueActivities.length === 0) {
            // Take a screenshot for debugging
            const screenshot = await page.screenshot({ encoding: 'base64', fullPage: false });

            return NextResponse.json({
                error: 'No activities found',
                message: 'Could not extract any activity posts. The page structure may have changed or requires login.',
                activitiesFound: activities.length,
                screenshot: `data:image/png;base64,${screenshot}`,
                activities: [],
            }, { status: 200 });
        }

        return NextResponse.json({
            success: true,
            count: uniqueActivities.length,
            activities: uniqueActivities,
            scrapedAt: new Date().toISOString(),
            method: 'puppeteer',
        });

    } catch (error) {
        console.error('Puppeteer error:', error);

        if (browser) {
            await browser.close();
        }

        return NextResponse.json({
            error: 'Failed to scrape LinkedIn',
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : undefined) : undefined,
        }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { url, cookies } = body;

        if (!url) {
            return NextResponse.json(
                { error: 'URL is required in request body' },
                { status: 400 }
            );
        }

        // If cookies are provided, use them
        if (cookies && Array.isArray(cookies)) {
            return await getWithCookies(url, cookies);
        }

        // Otherwise use GET method
        const baseUrl = new URL(request.url).origin;
        const getRequest = new Request(`${baseUrl}/api/linkedin-activity-puppeteer?url=${encodeURIComponent(url)}`);

        return await GET(getRequest);

    } catch (error) {
        return NextResponse.json({
            error: 'Failed to process request',
            message: error instanceof Error ? error.message : 'Unknown error',
        }, { status: 500 });
    }
}

// Function to scrape with cookies (for authenticated access)
async function getWithCookies(url: string, cookies: any[]) {
    let browser;

    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();

        // Set cookies
        await page.setCookie(...cookies);

        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        await new Promise(resolve => setTimeout(resolve, 3000));
        ``
        const activities = await page.evaluate(() => {
            const posts = Array.from(document.querySelectorAll('article, .feed-shared-update-v2'));
            return posts.map(post => ({
                title: post.querySelector('.feed-shared-actor__title')?.textContent?.trim() || '',
                content: post.querySelector('.break-words, .feed-shared-text')?.textContent?.trim() || '',
                time: post.querySelector('time')?.getAttribute('datetime') || '',
            })).filter(p => p.content);
        });

        await browser.close();

        return NextResponse.json({
            success: true,
            count: activities.length,
            activities,
            method: 'puppeteer-with-cookies',
        });

    } catch (error) {
        if (browser) await browser.close();
        throw error;
    }
}