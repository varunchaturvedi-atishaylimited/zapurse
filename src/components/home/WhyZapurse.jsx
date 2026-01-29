import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Users } from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        title: "Trusted & Secure",
        description: "Latest security protocols ensuring 100% safe transactions for you and your customers."
    },
    {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: "Lightning Fast",
        description: "Industry-leading success rates with instant processing for recharges."
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "Nationwide Network",
        description: "Join a growing family of 50,000+ happy retailers and distributors across India."
    },
    {
        icon: <CheckCircle2 className="w-8 h-8 text-white" />,
        title: "Best Commissions",
        description: "Maximize your earnings with the most competitive commission structures in the market."
    }
];

export default function WhyZapurse() {
    return (
        <section className="pt-32 mb-10 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2>Why Choose Zapurse?</h2>
                    <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                        We combine cutting-edge technology with a human-centric approach to deliver the best fintech experience in rural and urban India.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="relative overflow-hidden rounded-[2rem] p-10 bg-white/30 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-500"
                        >
                            {/* Subtle Blurred Circle */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                            {/* Icon Container */}
                            <div className="w-20 h-20 bg-primary/10 text-white rounded-3xl flex items-center justify-center mb-6 mx-auto relative z-10 shadow-md border border-white/10">
                                {feature.icon}
                            </div>

                            {/* Title & Description */}
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                                {feature.title}
                            </h4>
                            <p className="text-center text-gray-700 dark:text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
