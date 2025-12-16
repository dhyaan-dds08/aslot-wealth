"use client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const DisclaimerPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Disclaimer</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

                    <div className="space-y-8 text-foreground">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">General Disclaimer</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The information provided by Aslot Wealth Advisor on this website and through our services is for general informational and educational purposes only. It should not be construed as financial, investment, legal, or tax advice tailored to your specific circumstances. Always consult with a qualified professional before making any financial decisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Investment Risk Disclaimer</h2>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="leading-relaxed font-semibold text-foreground">
                                    INVESTMENTS IN MUTUAL FUNDS AND OTHER SECURITIES ARE SUBJECT TO MARKET RISKS. READ ALL SCHEME-RELATED DOCUMENTS CAREFULLY.
                                </p>
                                <p className="leading-relaxed">
                                    All investments involve varying degrees of risk, and there is no guarantee of profit or protection against loss. The value of your investments may fluctuate due to market conditions, economic factors, interest rate changes, and other variables beyond our control.
                                </p>
                                <p className="leading-relaxed">
                                    Past performance is not indicative of future results. Historical returns, expected returns, or probability projections are provided for illustrative purposes only and may not reflect actual future performance.
                                </p>
                                <p className="leading-relaxed">
                                    You may receive back less than your original investment, and in some cases, you may lose your entire investment. Different types of investments involve varying levels of risk, and you should carefully assess your financial situation, investment objectives, and risk tolerance before investing.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">No Guarantee of Returns</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                While we strive to provide sound financial advice and investment recommendations, Aslot Wealth Advisor does not guarantee any specific investment results, returns, or outcomes. Market conditions are unpredictable, and investment performance can vary significantly from projections or expectations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Website Information</h2>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="leading-relaxed">
                                    The information on this website is provided "as is" without any representations or warranties, express or implied. We make every effort to ensure that the information is accurate, complete, and up-to-date, but we make no warranties about the accuracy, reliability, completeness, or timeliness of the content.
                                </p>
                                <p className="leading-relaxed">
                                    Market data, statistics, charts, and other information displayed on this website may be delayed or may not reflect real-time market conditions. We are not responsible for any errors, omissions, or delays in the information or for any actions taken based on this information.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Third-Party Information and Links</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website may contain links to third-party websites, resources, or references to third-party products and services. These are provided for your convenience only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites or services. Your use of third-party websites is at your own risk.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Professional Advice</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The information provided on this website should not replace consultation with qualified professionals. For personalized financial advice, tax planning, legal matters, or estate planning, you should consult with appropriate licensed professionals who can assess your individual circumstances.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Regulatory Compliance</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Aslot Wealth Advisor is registered as a Mutual Fund Distributor with AMFI (ARN-126127). We comply with all applicable regulations set forth by SEBI (Securities and Exchange Board of India), AMFI (Association of Mutual Funds in India), and other regulatory authorities. However, regulatory requirements may change, and we are not liable for any actions or changes made by regulatory bodies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Tax Implications</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Tax laws and regulations are complex and subject to change. Any tax-related information provided is for general guidance only and should not be considered tax advice. Tax implications of investments vary based on individual circumstances. We strongly recommend consulting with a qualified tax advisor or chartered accountant for advice specific to your situation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Client Responsibility</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                As a client, you are ultimately responsible for your investment decisions. While we provide recommendations and guidance, you must make your own informed decisions based on your financial goals, risk tolerance, and personal circumstances. You should thoroughly review all investment materials and ask questions before making any investment.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Conflicts of Interest</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                As a mutual fund distributor, we may receive commissions or fees from mutual fund companies and other financial institutions for products we recommend. These commissions do not result in additional costs to you. We are committed to acting in your best interest and will disclose any material conflicts of interest.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To the maximum extent permitted by law, Aslot Wealth Advisor, its directors, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from:
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-muted-foreground">
                                <li>Use or inability to use our website or services</li>
                                <li>Investment decisions made based on information provided</li>
                                <li>Market fluctuations, losses, or poor investment performance</li>
                                <li>Errors, omissions, or inaccuracies in the information provided</li>
                                <li>Unauthorized access to or alteration of your data</li>
                                <li>Technical failures, interruptions, or delays in service</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Market Volatility</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Financial markets can be volatile and unpredictable. Economic events, geopolitical developments, natural disasters, pandemics, regulatory changes, and other unforeseen circumstances can significantly impact investment performance. We cannot predict or control these events, and they may result in substantial losses to your investments.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Currency and Exchange Rate Risk</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If your investments include international securities or funds, they may be subject to currency fluctuations and exchange rate risk. Changes in exchange rates can affect the value of your investments and may result in gains or losses.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Insurance Products</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Insurance products mentioned or recommended are subject to the terms and conditions of the insurance policy. Coverage, benefits, and premiums are determined by the insurance company. We act as facilitators and are not responsible for claims, coverage disputes, or policy terms set by insurance providers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">No Solicitation</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The content on this website is not intended to be an offer, solicitation, or recommendation to buy or sell any securities, investment products, or services in any jurisdiction where such offer or solicitation would be unlawful or unauthorized.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Changes and Updates</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to modify, update, or discontinue any aspect of our website, services, or this disclaimer at any time without prior notice. It is your responsibility to review this disclaimer periodically for changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Severability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If any provision of this disclaimer is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this disclaimer or need clarification on any matter, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                                <p className="font-semibold text-foreground">Aslot Wealth Advisor</p>
                                <p className="text-muted-foreground">Email: info@aslotwealthadvisor.com</p>
                                <p className="text-muted-foreground">AMFI ARN: 126127</p>
                            </div>
                        </section>

                        <section className="mt-8 p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
                            <p className="text-destructive font-semibold leading-relaxed">
                                BY USING THIS WEBSITE AND OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO THIS DISCLAIMER. IF YOU DO NOT AGREE WITH ANY PART OF THIS DISCLAIMER, PLEASE DO NOT USE OUR WEBSITE OR SERVICES.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DisclaimerPage;