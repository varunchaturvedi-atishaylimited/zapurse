import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Users } from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Trusted & Secure",
        description: "Latest security protocols ensuring 100% safe transactions for you and your customers."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Lightning Fast",
        description: "Industry-leading success rates with instant processing for recharges."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Nationwide Network",
        description: "Join a growing family of 50,000+ happy retailers and distributors across India."
    },
    {
        icon: <CheckCircle2 className="w-8 h-8" />,
        title: "Best Commissions",
        description: "Maximize your earnings with the most competitive commission structures in the market."
    }
];

export default function WhyZapurse() {
    return (
        <section className="py-32 bg-transparent transition-colors relative overflow-hidden">
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
                            className="group p-10 rounded-[2.5rem] bg-white dark:bg-[#0d1a0d] border border-[#182B0C]/10 dark:border-green-900/30 shadow-sm hover:shadow-2xl hover:shadow-[#182B0C]/10 transition-all duration-500 text-center"
                        >
                            <div className="w-20 h-20 bg-[#182B0C]/5 dark:bg-green-400/10 text-[#182B0C] dark:text-green-400 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#080F4A] dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#080F4A] group-hover:to-[#182B0C] dark:group-hover:from-white dark:group-hover:to-green-400 transition-all">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 dark:text-green-100/60 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
