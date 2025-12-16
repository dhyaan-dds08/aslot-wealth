"use client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const RegulatoryInformation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Regulatory Information</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: January 2025</p>

                    <div className="space-y-8 text-foreground">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Regulatory Overview</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Aslot Wealth Advisor operates in strict compliance with the regulatory framework established by the Securities and Exchange Board of India (SEBI) and the Association of Mutual Funds in India (AMFI). We are committed to maintaining the highest standards of transparency, integrity, and ethical conduct in all our business operations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">AMFI Registration</h2>
                            <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg mb-4">
                                <p className="font-semibold text-foreground text-lg mb-2">AMFI Registration Number (ARN)</p>
                                <p className="text-2xl font-bold text-primary">ARN-126127</p>
                                <p className="text-sm text-muted-foreground mt-2">Valid and Active as of January 2025</p>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                We are registered with AMFI (Association of Mutual Funds in India) as a Mutual Fund Distributor. This registration authorizes us to distribute mutual fund products to investors across India. Our ARN registration is subject to renewal and compliance with AMFI&apos;s code of conduct and regulations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Regulatory Bodies and Compliance</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">Securities and Exchange Board of India (SEBI)</h3>
                                    <p className="leading-relaxed">
                                        SEBI is the primary regulatory authority overseeing the securities market in India. We comply with all SEBI regulations, circulars, and guidelines applicable to mutual fund distributors and financial Aslot Wealth Advisor&quot;. This includes adherence to fair practice codes, disclosure requirements, and investor protection norms.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">Association of Mutual Funds in India (AMFI)</h3>
                                    <p className="leading-relaxed">
                                        AMFI establishes standards and promotes best practices in the mutual fund industry. As an AMFI-registered distributor, we follow AMFI&apos;s code of conduct, which includes guidelines on ethics, transparency, disclosure, and professional conduct. We also comply with AMFI&apos;s requirements for ongoing training and certification.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">Insurance Regulatory and Development Authority of India (IRDAI)</h3>
                                    <p className="leading-relaxed">
                                        For insurance-related services, we operate in accordance with IRDAI regulations and work with IRDAI-licensed insurance companies and agents to provide insurance solutions to our clients.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Code of Conduct</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                As a registered mutual fund distributor, we adhere to a strict code of conduct that includes:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                                <li>Acting in the best interests of our clients at all times</li>
                                <li>Providing clear, accurate, and complete information about investment products</li>
                                <li>Disclosing all material information, including fees, commissions, and potential conflicts of interest</li>
                                <li>Maintaining client confidentiality and data security</li>
                                <li>Avoiding misrepresentation or misleading statements about investment products</li>
                                <li>Ensuring suitability of investment recommendations based on client profiles</li>
                                <li>Providing proper documentation and transaction confirmations</li>
                                <li>Handling client grievances promptly and fairly</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Certification and Training</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                All our financial Aslot Wealth Advisor&quot; and mutual fund distributors have successfully completed the mandatory NISM (National Institute of Securities Markets) certification exams, including:
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-muted-foreground">
                                <li>NISM Series V-A: Mutual Fund Distributors Certification</li>
                                <li>Continuing Professional Education (CPE) requirements as mandated by AMFI</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-3">
                                We are committed to ongoing professional development and stay updated on regulatory changes, market developments, and industry best practices through regular training programs.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Disclosure Requirements</h2>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="leading-relaxed">
                                    In compliance with regulatory requirements, we provide the following disclosures to our clients:
                                </p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>Our AMFI ARN number on all communications and documentation</li>
                                    <li>Commission structure and fees charged for our services</li>
                                    <li>Risk disclosures for all investment products</li>
                                    <li>Scheme information documents and key information memorandums</li>
                                    <li>Transaction confirmations and account statements</li>
                                    <li>Performance reports and portfolio updates</li>
                                    <li>Any material changes in our registration status or business operations</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Investor Protection Measures</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                We implement comprehensive investor protection measures, including:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                                <li>Know Your Customer (KYC) compliance for all clients</li>
                                <li>Suitability assessment before recommending investment products</li>
                                <li>Clear documentation of client instructions and transactions</li>
                                <li>Secure handling and storage of client information</li>
                                <li>Regular review of client portfolios and risk profiles</li>
                                <li>Transparent fee structure with no hidden charges</li>
                                <li>Established grievance redressal mechanism</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Anti-Money Laundering (AML) Compliance</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We strictly adhere to the Prevention of Money Laundering Act (PMLA) and implement comprehensive AML/CFT (Anti-Money Laundering/Combating the Financing of Terrorism) measures. This includes:
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-3 space-y-2 text-muted-foreground">
                                <li>Mandatory KYC verification for all clients</li>
                                <li>Customer due diligence procedures</li>
                                <li>Transaction monitoring and reporting of suspicious activities</li>
                                <li>Maintenance of proper records as per regulatory requirements</li>
                                <li>Regular staff training on AML/CFT compliance</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Grievance Redressal</h2>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="leading-relaxed">
                                    We have established a formal grievance redressal mechanism to address client concerns and complaints promptly. If you have any grievance or complaint, please follow this process:
                                </p>
                                <div className="ml-4 space-y-2">
                                    <p><strong className="text-foreground">Step 1:</strong> Contact us directly at info@aslotwealthadvisor.com with details of your grievance</p>
                                    <p><strong className="text-foreground">Step 2:</strong> We will acknowledge your complaint within 2 business days</p>
                                    <p><strong className="text-foreground">Step 3:</strong> We aim to resolve complaints within 15 business days</p>
                                    <p><strong className="text-foreground">Step 4:</strong> If you are not satisfied with our resolution, you may escalate to:</p>
                                </div>
                                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                                    <p className="font-semibold text-foreground">AMFI Investor Service Cell</p>
                                    <p>Email: complaints@amfiindia.com</p>
                                    <p>Phone: 022-62178800</p>
                                    <p className="mt-2">Website: <a href="https://www.amfiindia.com" className="text-primary hover:underline">www.amfiindia.com</a></p>
                                </div>
                                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                                    <p className="font-semibold text-foreground">SEBI Complaints Redress System (SCORES)</p>
                                    <p>Website: <a href="https://scores.sebi.gov.in" className="text-primary hover:underline">scores.sebi.gov.in</a></p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Data Protection and Privacy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We comply with all applicable data protection laws and regulations in India. Client information is stored securely, and access is restricted to authorized personnel only. We do not share client information with third parties except as required by law or with explicit client consent. For more details, please refer to our Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Risk Warnings and Disclaimers</h2>
                            <div className="p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
                                <p className="text-destructive font-semibold leading-relaxed mb-3">
                                    STATUTORY INFORMATION
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</li>
                                    <li>• Past performance is not indicative of future returns.</li>
                                    <li>• The investor should understand that the statements regarding future prospects may or may not be realized.</li>
                                    <li>• Investors should consult their financial advisers if in doubt about whether the product is suitable for them.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Regulatory Updates</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We continuously monitor regulatory changes and update our practices accordingly. Any material changes in regulations that affect our services or your investments will be communicated to you promptly. We encourage clients to stay informed about regulatory developments and contact us with any questions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Verification of Registration</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You can verify our AMFI registration status and credentials by visiting the AMFI website at <a href="https://www.amfiindia.com" className="text-primary hover:underline">www.amfiindia.com</a> and searching for our ARN number (ARN-126127). We encourage all clients to verify the credentials of financial Aslot Wealth Advisor&quot; before engaging their services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                For any regulatory queries or to verify our credentials, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                                <p className="font-semibold text-foreground">Aslot Wealth Advisor</p>
                                <p className="text-muted-foreground">AMFI ARN: 126127</p>
                                <p className="text-muted-foreground">Email: info@aslotwealthadvisor.com</p>
                                <p className="text-muted-foreground mt-2">For grievances: complaints@aslotwealthadvisor.com</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RegulatoryInformation;