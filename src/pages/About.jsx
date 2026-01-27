import { motion } from 'framer-motion';
import { Target, Eye, Globe2, Trophy, ShieldCheck, MapPin } from 'lucide-react';

export default function About() {
    return (
        <div className="pt-24 min-h-screen pb-20 bg-transparent transition-colors">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative py-24 bg-[#182B0C]/5 dark:bg-[#0d1a0d] overflow-hidden rounded-[3rem] mx-4 md:mx-6 mb-16 border border-[#182B0C]/10 dark:border-green-900/20">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#080F4A] to-[#182B0C] dark:from-white dark:to-green-400 tracking-tighter leading-none">
                            Empowering Every Indian with Digital Freedom
                        </h1>
                        <p className="text-2xl text-gray-700 dark:text-green-100/60 leading-relaxed font-medium">
                            Zapurse, the digital arm of Atishay Limited, is bridging the divide by bringing essential banking to the last mile.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-b border-[#182B0C]/10 dark:border-green-900/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
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
                                <div className="text-4xl md:text-6xl font-black text-[#080F4A] dark:text-green-400 mb-3 tracking-tighter">{stat.value}</div>
                                <div className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="p-10 rounded-[2.5rem] bg-white dark:bg-[#0d1a0d] border border-gray-100 dark:border-green-900/30 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="p-4 bg-[#080F4A] text-white rounded-2xl shadow-xl"><Target size={32} /></div>
                                    <h2 className="text-3xl font-black text-[#080F4A] dark:text-white">Our Mission</h2>
                                </div>
                                <p className="text-lg text-gray-700 dark:text-green-100/70 leading-relaxed">
                                    To create the largest and most trusted network of technology-enabled agents who provide every citizen with easy access to financial services, regardless of their location.
                                </p>
                            </div>

                            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#182B0C] to-[#080F4A] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                <div className="flex items-center gap-6 mb-6 relative z-10">
                                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20"><Eye size={32} /></div>
                                    <h2 className="text-3xl font-black">Our Vision</h2>
                                </div>
                                <p className="text-lg text-white/80 leading-relaxed relative z-10">
                                    A digitally inclusive India where banking, payments, and government services are available at every doorstep, driving economic growth and empowerment.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:pt-10"
                        >
                            <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#080F4A] dark:text-white tracking-tighter">About Atishay Limited</h2>
                            <div className="space-y-6">
                                <p className="text-lg text-gray-600 dark:text-green-100/60 leading-relaxed">
                                    Zapurse is a flagship brand of Atishay Limited, a technology-driven company listed on the Bombay Stock Exchange (BSE). With decades of experience in e-governance and retail network management, Atishay Limited brings credibility and security.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-green-100/60 leading-relaxed">
                                    We leverage our deep understanding of rural and semi-urban markets to design solutions that are simple, reliable, and profitable for our partners.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                                {[
                                    { label: "BSE Listed Company", icon: <Globe2 className="text-green-500" /> },
                                    { label: "ISO 27001 Certified", icon: <Trophy className="text-green-500" /> },
                                    { label: "CMMI Level 3", icon: <ShieldCheck className="text-green-500" /> },
                                    { label: "Pan-India Presence", icon: <MapPin className="text-green-500" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0d1a0d] border border-gray-100 dark:border-green-900/30 shadow-sm">
                                        <div className="p-2 bg-green-500/10 rounded-lg">{item.icon}</div>
                                        <span className="font-bold text-[#080F4A] dark:text-white">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
