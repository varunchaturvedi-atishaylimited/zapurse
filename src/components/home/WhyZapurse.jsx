import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Users } from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck className="w-6 h-6 text-primary" />,
        title: "Trusted & Secure",
        description: "Latest security protocols ensuring 100% safe transactions for you and your customers."
    },
    {
        icon: <Zap className="w-6 h-6 text-primary" />,
        title: "Lightning Fast",
        description: "Industry-leading success rates with instant processing for AEPS and recharges."
    },
    {
        icon: <Users className="w-6 h-6 text-primary" />,
        title: "Nationwide Network",
        description: "Join a growing family of 50,000+ happy retailers and distributors across India."
    },
    {
        icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
        title: "Best Commissions",
        description: "Maximize your earnings with the most competitive commission structures in the market."
    }
];

export default function WhyZapurse() {
    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Why Choose Zapurse?</h2>
                    <p className="text-lg text-gray-600">
                        We combine cutting-edge technology with a human-centric approach to deliver the best fintech experience in rural and urban India.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
