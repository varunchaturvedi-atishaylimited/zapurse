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
                {/* Intro */}
                <section>
                    <p className="leading-relaxed">
                        At Zapurse, we take your privacy seriously. This Privacy Policy explains
                        how we collect, use, disclose, and safeguard your information.
                    </p>
                </section>

                <div className="grid gap-8">
                    {/* SECTION CARD: Information We Collect */}
                    <section className="p-8 rounded-[2rem] bg-white/30 dark:bg-gray-900 shadow-lg relative overflow-hidden">
                        <h4 className="mb-6 flex items-center gap-3 font-black">
                            <span className="w-2 h-8 bg-secondary rounded-full" />
                            1. Information We Collect
                        </h4>

                        <div className="space-y-6">
                            <div>
                                <h5 className="mb-3 font-black">Personal Information</h5>
                                <p className="mb-4">We may collect the following details when you register or use our services:</p>
                                <ul className="grid md:grid-cols-2 gap-2 list-none pl-0">
                                    {[
                                        "Full Name",
                                        "Mobile Number",
                                        "Email Address",
                                        "Address (optional)",
                                        "KYC information (if required)",
                                        "Transaction details"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h5 className="mb-3 font-black">Automatically Collected Information</h5>
                                <p className="mb-4">When you use the App, we may automatically collect:</p>
                                <ul className="grid md:grid-cols-2 gap-2 list-none pl-0">
                                    {[
                                        "Device information",
                                        "IP address",
                                        "Approximate location",
                                        "Usage data"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* SECTION CARD: How We Use */}
                    <section className="p-8 rounded-[2rem] bg-white/30 dark:bg-gray-900 shadow-lg relative overflow-hidden">
                        <h4 className="mb-6 flex items-center gap-3 font-black">
                            <span className="w-2 h-8 bg-secondary rounded-full" />
                            2. How We Use Your Information
                        </h4>

                        <p className="mb-4">We use the collected information to:</p>

                        <ul className="space-y-3 list-none pl-0">
                            {[
                                "Process transactions",
                                "Manage accounts",
                                "Improve app performance",
                                "Send alerts",
                                "Prevent fraud",
                                "Comply with laws"
                            ].map((item, i) => (
                                <li key={i} className="p-4 rounded-2xl border bg-white/20 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 italic font-semibold">
                            We do not sell or rent your personal information.
                        </p>
                    </section>
                </div>

                {/* CONTACT */}
                <div className="mt-12 p-10 rounded-[2.5rem] bg-white/30 dark:bg-gray-900 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <h4 className="mb-8 font-black relative z-10">Contact Us</h4>

                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                        <div>
                            <h5 className="font-black">Zapurse Fintech Private Limited</h5>
                            <p>Email: support@zapurse.com</p>
                            <p>Website: www.zapurse.in</p>
                        </div>

                        <p>
                            Address: Plot No. 36, Zone-I, Maharana Pratap Nagar,
                            Bhopal – 462011 (MP)
                        </p>
                    </div>
                </div>
            </motion.div>
        </LegalLayout>
    );
}
