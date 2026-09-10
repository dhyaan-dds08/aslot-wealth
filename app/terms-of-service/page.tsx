"use client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const TermsOfServicePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Terms of Service</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

                    <div className="space-y-8 text-foreground">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing and using the services provided by Aslot Wealth Advisor, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and Aslot Wealth Advisor.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Services Provided</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                Aslot Wealth Advisor provides the following financial services:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                                <li>Investment planning and portfolio management</li>
                                <li>Mutual fund distribution (AMFI ARN-126127)</li>
                                <li>Tax advisory services</li>
                                <li>Insurance solutions and planning</li>
                                <li>Wealth management and estate planning</li>
                                <li>Financial goal planning and analysis</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Eligibility</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You must be at least 18 years of age and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these eligibility requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">4. User Responsibilities</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">4.1 Accurate Information</h3>
                                    <p className="leading-relaxed">
                                        You agree to provide accurate, current, and complete information about yourself and your financial situation. You must promptly update this information if any changes occur.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">4.2 Account Security</h3>
                                    <p className="leading-relaxed">
                                        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">4.3 Compliance</h3>
                                    <p className="leading-relaxed">
                                        You agree to comply with all applicable laws, regulations, and these Terms of Service when using our services.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Investment Risks and Disclaimers</h2>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="leading-relaxed">
                                    All investments involve risk, including the potential loss of principal. Past performance is not indicative of future results. The value of investments may fluctuate, and you may receive back less than your original investment.
                                </p>
                                <p className="leading-relaxed">
                                    While we strive to provide sound financial advice, we cannot guarantee specific investment outcomes or returns. Investment decisions are ultimately your responsibility, and you should consider your financial situation, risk tolerance, and investment objectives before making any investment.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Fees and Payment</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                Our fee structure will be clearly communicated to you before you engage our services. Fees may include:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                                <li>Advisory fees based on assets under management</li>
                                <li>Commission from mutual fund distributors (as per AMFI regulations)</li>
                                <li>Project-based fees for specific financial planning services</li>
                                <li>Transaction fees as applicable</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-3">
                                All fees are subject to applicable taxes. You authorize us to deduct agreed-upon fees from your account or arrange payment through other agreed methods.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Intellectual Property</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                All content on our website, including text, graphics, logos, images, and software, is the property of Aslot Wealth Advisor or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To the maximum extent permitted by law, Aslot Wealth Advisor shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses resulting from your use of our services. Our total liability shall not exceed the fees paid by you for our services in the 12 months preceding the claim.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">9. Indemnification</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You agree to indemnify, defend, and hold harmless Aslot Wealth Advisor, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your violation of these Terms of Service or your use of our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">10. Termination</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Either party may terminate the advisory relationship at any time with written notice. Upon termination, you will be responsible for any outstanding fees for services rendered. We reserve the right to suspend or terminate your access to our services if you violate these Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">11. Confidentiality</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We maintain strict confidentiality of all client information in accordance with applicable laws and regulations. You also agree to maintain the confidentiality of any proprietary information, investment strategies, or recommendations shared with you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">12. Dispute Resolution</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Any disputes arising from these Terms of Service or our services shall first be attempted to be resolved through good-faith negotiations. If negotiations fail, disputes shall be resolved through arbitration in accordance with Indian arbitration laws. The arbitration shall be conducted in [City], India, and the language of arbitration shall be English.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">13. Governing Law</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts in [City], India.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">14. Changes to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to modify these Terms of Service at any time. We will notify you of any material changes by posting the updated terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">15. Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about these Terms of Service, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                                <p className="font-semibold text-foreground">Aslot Wealth Advisor</p>
                                <p className="text-muted-foreground">Email: info@aslotwealth.in</p>
                                <p className="text-muted-foreground">AMFI ARN: 126127</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfServicePage;