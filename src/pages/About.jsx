import { motion } from 'framer-motion';
import { Target, Eye, Globe2, Trophy } from 'lucide-react';

export default function About() {
    return (
        <div className="pt-24 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-secondary overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">Empowering Every Indian with Digital Financial Freedom</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Zapurse, the digital arm of Atishay Limited, is on a mission to bridge the digital divide by bringing essential banking and financial services to the last mile.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-b border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Retail Partners", value: "50,000+" },
                            { label: "Distributors", value: "500+" },
                            { label: "States Covered", value: "20+" },
                            { label: "Daily Transactions", value: "1M+" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-3xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-gray-500 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-blue-600 text-white rounded-xl"><Target size={24} /></div>
                                    <h2 className="text-2xl font-bold">Our Mission</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    To create the largest and most trusted network of technology-enabled agents who provide every citizen with easy access to financial services, regardless of their location.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-purple-600 text-white rounded-xl"><Eye size={24} /></div>
                                    <h2 className="text-2xl font-bold">Our Vision</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    A digitally inclusive India where banking, payments, and government services are available at every doorstep, driving economic growth and empowerment.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">About Atishay Limited</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Zapurse is a flagship brand of Atishay Limited, a technology-driven company listed on the Bombay Stock Exchange (BSE). With decades of experience in e-governance and retail network management, Atishay Limited brings credibility, security, and operational excellence to the fintech space.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                We leverage our deep understanding of rural and semi-urban markets to design solutions that are simple, reliable, and profitable for our partners.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 text-gray-800 font-semibold">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div> BSE Listed Company
                                </div>
                                <div className="flex items-center gap-3 text-gray-800 font-semibold">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div> ISO 27001 Certified
                                </div>
                                <div className="flex items-center gap-3 text-gray-800 font-semibold">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div> CMMI Level 3
                                </div>
                                <div className="flex items-center gap-3 text-gray-800 font-semibold">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div> Pan-India Presence
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
