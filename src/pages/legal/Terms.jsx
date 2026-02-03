import LegalLayout from './LegalLayout';
import { Gavel, UserCheck, ShieldAlert, Scale, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Terms() {
    const sections = [
        {
            icon: <Gavel className="w-6 h-6" />,
            title: "Acceptance of Terms",
            desc: "By accessing or using the Zapurse platform, you agree to comply with and be bound by these Terms. If you do not agree to these terms, you may not use our services."
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            title: "Agent Registration",
            desc: "To become a Zapurse agent, you must provide accurate and complete information during the registration process. You are responsible for maintaining the confidentiality of your account credentials."
        },
        {
            icon: <ScrollText className="w-6 h-6" />,
            title: "Services Provision",
            desc: "Zapurse provides various financial services including AEPS, DMT, and Bill Payments. We reserve the right to modify, suspend, or discontinue any service at any time without notice."
        },
        {
            icon: <ShieldAlert className="w-6 h-6" />,
            title: "User Conduct",
            desc: "You agree not to use our services for any unlawful purpose or in any way that interrupts, damages, or impairs the service."
        },
        {
            icon: <Scale className="w-6 h-6" />,
            title: "Limitation of Liability",
            desc: "Zapurse shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the services."
        }
    ];

    return (
        <LegalLayout title="Terms & Conditions" lastUpdated="January 20, 2026">
            <div className="mb-12 space-y-4">
                <p className="text-xl font-medium text-[#080F4A] dark:text-green-100/80 leading-relaxed">
                    Welcome to Zapurse. These terms govern your use of our platform and
                    the services we provide to our valued partners and users.
                </p>
                <div className="h-1 w-20 bg-[#182B0C]/20 rounded-full" />
            </div>

            <div className="grid gap-6">
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 shadow-sm"
                    >
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#080F4A]/5 dark:bg-green-400/10 text-[#080F4A] dark:text-green-400 flex items-center justify-center group-hover:bg-[#080F4A] dark:group-hover:bg-green-400 group-hover:text-white dark:group-hover:text-[#0a0d0a] transition-colors duration-300">
                                {section.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#080F4A] dark:group-hover:text-green-300 transition-colors">
                                    {section.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {section.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>


            <div className="flex items-start gap-6 p-6 mt-6 rounded-3xl border bg-white/30 dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300">
                <h4 >
                    Important Notice
                </h4>
                <br />
                <p >
                    These terms are subject to change. Continued use of the platform after updates
                    constitutes acceptance of the new terms. Please review this page regularly for any
                    modifications.
                </p>
            </div>
        </LegalLayout>
    );
}