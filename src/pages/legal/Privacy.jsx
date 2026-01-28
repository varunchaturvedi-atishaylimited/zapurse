import LegalLayout from './LegalLayout';
import { motion } from 'framer-motion';

export default function Privacy() {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="January 20, 2026">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
            >
                <section>
                    <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                        At Zapurse, we take your privacy seriously. This Privacy Policy explains
                        how we collect, use, disclosure, and safeguard your information.
                    </p>
                </section>

                <div className="grid gap-8">
                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6 text-[#080F4A] dark:text-white flex items-center gap-3">
                            <span className="w-2 h-8 bg-secondary dark:bg-white rounded-full" />
                            1. Information We Collect
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-[#182B0C] dark:text-green-400">Personal Information</h3>
                                <p className="mb-4">We may collect the following details when you register or use our services:</p>
                                <ul className="grid md:grid-cols-2 gap-2 list-none pl-0">
                                    {["Full Name", "Mobile Number", "Email Address", "Address (optional)", "KYC information (if required for certain services)", "Transaction details (recharge, DTH, bill payments)"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-[#182B0C] dark:text-green-400">Automatically Collected Information</h3>
                                <p className="mb-4">When you use the App, we may automatically collect:</p>
                                <ul className="grid md:grid-cols-2 gap-2 list-none pl-0">
                                    {["Device information (model, operating system, app version)", "IP address", "Approximate location (if enabled on your device)", "Usage data (features used, interactions, logs)"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-[#182B0C] dark:text-green-400">Third-Party Information</h3>
                                <p>For payment processing or telecom recharge services, we may receive information from:</p>
                                <ul className="mt-3 space-y-2 list-none pl-0">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Payment gateways</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Telecom / DTH operators</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Service providers and API partners</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6 text-[#080F4A] dark:text-white flex items-center gap-3">
                            <span className="w-2 h-8 bg-secondary dark:bg-white rounded-full" />
                            2. How We Use Your Information
                        </h2>
                        <p className="mb-4">We use the collected information to:</p>
                        <ul className="space-y-3 list-none pl-0">
                            {[
                                "Process mobile, DTH recharge, and bill payment transactions",
                                "Manage user accounts and provide customer support",
                                "Improve app performance and user experience",
                                "Send transactional alerts, notifications, and service updates",
                                "Detect, prevent, and address fraud or security issues",
                                "Comply with legal and regulatory requirements"
                            ].map((item, i) => (
                                <li key={i} className="flex bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 font-semibold italic text-[#080F4A] dark:text-green-400">We do not sell or rent your personal information to any third party.</p>
                    </section>

                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6 text-[#080F4A] dark:text-white flex items-center gap-3">
                            <span className="w-2 h-8 bg-secondary dark:bg-white rounded-full" />
                            3. Sharing of Information
                        </h2>
                        <p className="mb-4">We may share your information only with:</p>
                        <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                            {[
                                "Telecom / DTH operators for completing service requests",
                                "Payment gateways for secure payment processing",
                                "Service providers and API partners",
                                "Government or regulatory authorities (when legally required)",
                                "Technical vendors for app maintenance, analytics, and support"
                            ].map((item, i) => (
                                <li key={i} className="p-4 bg-primary/5 rounded-2xl border border-primary/10 text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm opacity-70">All third parties are contractually obligated to protect your information.</p>
                    </section>

                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">

                        <h2 className="text-2xl font-bold mb-4 text-[#080F4A] dark:text-white flex items-center gap-3"><span className="w-2 h-8 bg-secondary dark:bg-white rounded-full" /> 4. Data Security</h2>
                        <p className="mb-4">We use industry-standard security measures, including:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Encryption of sensitive data</li>
                            <li>Secure server infrastructure</li>
                            <li>Regular audits and monitoring</li>
                        </ul>
                        <p className="text-sm opacity-70 italic">However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
                    </section>

                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-[#080F4A] dark:text-white flex items-center gap-3"><span className="w-2 h-8 bg-secondary dark:bg-white rounded-full" /> 5. Cookies & Tracking Technologies</h2>
                        <p className="mb-4">We may use cookies and similar technologies to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Improve app performance</li>
                            <li>Remember user preferences</li>
                            <li>Analyze usage patterns</li>
                        </ul>
                        <p className="text-sm opacity-70">You may disable cookies through your device settings, but some features of the App may not function properly.</p>
                    </section>

                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-[#080F4A] dark:text-white flex items-center gap-3"><span className="w-2 h-8 bg-secondary dark:bg-white rounded-full" /> 6. Your Rights & Choices</h2>
                        <p className="mb-4">You may:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Update or edit your profile information</li>
                            <li>Request deletion of your account</li>
                            <li>Request details about the data we store</li>
                            <li>Opt out of non-essential notifications</li>
                        </ul>
                        <p className="mt-4">To exercise your rights, please contact us at:</p>
                        <p className="font-bold">Email: support@zapurse.com</p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h2 className="text-xl font-bold mb-4 text-[#080F4A] dark:text-white flex items-center gap-3"><span className="w-2 h-8 bg-secondary dark:bg-white rounded-full" /> 7. Children’s Privacy</h2>
                            <p className="text-sm opacity-80">Zapurse is not intended for use by children under the age of 18. We do not knowingly collect personal information from children.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h2 className="text-xl font-bold mb-4 text-[#080F4A] dark:text-white flex items-center gap-3"><span className="w-2 h-8 bg-secondary dark:bg-white rounded-full" /> 8. Links to Third-Party Sites</h2>
                            <p className="text-sm opacity-80">The App may contain links to external websites or services. Zapurse is not responsible for the privacy practices of those platforms.</p>
                        </div>
                    </div>

                    <section className="p-8 rounded-[2rem] bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 text-[#080F4A] dark:text-white flex items-center gap-3"><span className="w-2 h-8 bg-secondary dark:bg-white rounded-full" /> 9. Changes to This Privacy Policy</h2>
                        <p className="text-sm opacity-80">
                            We may update this Privacy Policy from time to time.
                            Any changes will be posted within the App.
                            Continued use of the App constitutes acceptance of the updated policy.
                        </p>
                    </section>
                </div>

                <div className="mt-12 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#080F4A] to-[#182B0C] text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <h2 className="text-3xl font-black mb-8 relative z-10">10. Contact Us</h2>
                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Zapurse Fintech Private Limited</h3>
                            <div className="opacity-80 space-y-1">
                                <p><strong>Email</strong>: support@zapurse.com</p>
                                <p><strong>Website</strong>: www.zapurse.in</p>
                            </div>
                        </div>
                        <div className="opacity-80">
                            <p><strong>Address</strong>: Head Office – Plot No. 36, Zone-I, Maharana Pratap Nagar, Bhopal – 462011 (Madhya Pradesh)</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </LegalLayout>
    );
}
