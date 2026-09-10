"use client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const PrivacyPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

                    <div className="space-y-8 text-foreground">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                At Aslot Wealth Advisor, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Information We Collect</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">2.1 Personal Information</h3>
                                    <p className="leading-relaxed">
                                        We may collect personal information that you voluntarily provide to us, including but not limited to:
                                    </p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>Name, email address, phone number, and postal address</li>
                                        <li>Financial information (income, assets, investment objectives)</li>
                                        <li>Date of birth and identification documents</li>
                                        <li>Bank account and payment information</li>
                                        <li>Tax identification numbers (PAN, Aadhaar)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">2.2 Automatically Collected Information</h3>
                                    <p className="leading-relaxed">
                                        When you visit our website, we may automatically collect certain information about your device, including:
                                    </p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>IP address and browser type</li>
                                        <li>Operating system and device information</li>
                                        <li>Pages visited and time spent on our website</li>
                                        <li>Referring website addresses</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">3. How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                We use the information we collect for the following purposes:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                                <li>To provide and maintain our financial advisory services</li>
                                <li>To process transactions and manage your investment portfolio</li>
                                <li>To communicate with you about your account and our services</li>
                                <li>To comply with legal and regulatory obligations</li>
                                <li>To improve our website and services</li>
                                <li>To send you marketing communications (with your consent)</li>
                                <li>To detect and prevent fraud or unauthorized activities</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Information Sharing and Disclosure</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                We do not sell or rent your personal information to third parties. We may share your information with:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                                <li>Service providers who assist us in operating our business</li>
                                <li>Financial institutions and mutual fund companies for transaction processing</li>
                                <li>Regulatory authorities as required by law (SEBI, AMFI, etc.)</li>
                                <li>Professional Aslot Wealth Advisor (lawyers, auditors) bound by confidentiality</li>
                                <li>With your explicit consent for specific purposes</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Data Retention</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Financial records are typically retained for a minimum of 7 years as per regulatory requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                You have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                                <li>Right to access and obtain a copy of your personal data</li>
                                <li>Right to request correction of inaccurate information</li>
                                <li>Right to request deletion of your information (subject to legal obligations)</li>
                                <li>Right to object to processing of your personal data</li>
                                <li>Right to withdraw consent for marketing communications</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Cookies and Tracking Technologies</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences. However, disabling cookies may limit certain features of our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">9. Third-Party Links</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">10. Changes to This Privacy Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new &quot;Last Updated&quot; date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">11. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicyPage;