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
        <section className="pt-32 mb-10 bg-transparent transition-colors relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#080F4A] to-[#182B0C] dark:from-white dark:to-green-400 tracking-tighter">
                        Why Choose Zapurse?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-green-100/60 leading-relaxed">
                        We combine cutting-edge technology with a human-centric approach to deliver the best fintech experience in rural and urban India.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group p-10 rounded-[2.5rem] bg-gradient-to-br from-[#182B0C] to-[#080F4A] shadow-lg hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                            <div className="w-20 h-20 bg-white/10 text-white rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 backdrop-blur-md border border-white/10 relative z-10">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white relative z-10">
                                {feature.title}
                            </h3>
                            <p className="text-white/70 leading-relaxed text-lg relative z-10">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
