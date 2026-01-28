import { motion } from "framer-motion";
import { Target, Eye, Globe2, Trophy, ShieldCheck, MapPin } from "lucide-react";
import NumberTicker from "@/components/magicui/number-ticker";
import { Particles } from "../components/ui/particles";

export default function About() {
    return (
        <div className="pt-32 min-h-screen pb-5 bg-transparent transition-colors overflow-hidden">

            {/* Particles (same behavior as Contact page) */}
            <Particles
                className="absolute inset-0 z-0"
                quantity={120}
                ease={80}
                color="#cbd5e1"
                refresh
            />

            {/* Page Content */}
            <div className="relative z-10">

                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-[#182B0C] to-[#080F4A] text-white overflow-hidden rounded-[3rem] mx-4 md:mx-6 mb-16 shadow-2xl group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                                Empowering Every Indian with Digital Freedom
                            </h1>
                            <p className="text-2xl text-white/80 leading-relaxed font-medium">
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
                                { label: "Retail Partners", value: 50000, suffix: "+" },
                                { label: "Distributors", value: 500, suffix: "+" },
                                { label: "States Covered", value: 20, suffix: "+" },
                                { label: "Daily Transactions", value: 1, suffix: "M+" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="text-4xl md:text-6xl font-black text-[#080F4A] dark:text-green-400 mb-3 tracking-tighter flex justify-center items-center">
                                        <NumberTicker value={stat.value} />
                                        <span>{stat.suffix}</span>
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">

                            {/* Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-10"
                            >
                                {[
                                    {
                                        icon: <Target size={32} />,
                                        title: "Our Mission",
                                        text:
                                            "To create the largest and most trusted network of technology-enabled agents who provide every citizen with easy access to financial services.",
                                    },
                                    {
                                        icon: <Eye size={32} />,
                                        title: "Our Vision",
                                        text:
                                            "A digitally inclusive India where banking, payments, and government services are available at every doorstep.",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#182B0C] to-[#080F4A] text-white shadow-2xl relative overflow-hidden group"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                        <div className="flex items-center gap-6 mb-6 relative z-10">
                                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                                {item.icon}
                                            </div>
                                            <h2 className="text-3xl font-black">{item.title}</h2>
                                        </div>
                                        <p className="text-lg text-white/80 leading-relaxed relative z-10">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:pt-10"
                            >
                                <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#080F4A] dark:text-white tracking-tighter">
                                    About Atishay Limited
                                </h2>

                                <p className="text-lg text-gray-600 dark:text-green-100/60 mb-6">
                                    Zapurse is a flagship brand of Atishay Limited, a technology-driven company listed on the Bombay Stock Exchange (BSE).
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 mt-12">
                                    {[
                                        { label: "BSE Listed Company", icon: <Globe2 /> },
                                        { label: "ISO 27001 Certified", icon: <Trophy /> },
                                        { label: "CMMI Level 3", icon: <ShieldCheck /> },
                                        { label: "Pan-India Presence", icon: <MapPin /> },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-[#182B0C] to-[#080F4A] shadow-lg"
                                        >
                                            <div className="p-2 bg-white/50 rounded-lg">
                                                {item.icon}
                                            </div>
                                            <span className="font-bold text-white">
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
