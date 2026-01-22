import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white pt-20">
            <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 text-primary text-sm font-semibold tracking-wide mb-2"
                    >
                        Trusted by 50,000+ Retailers
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                        Empowering <span className="text-primary">Financial Inclusion</span> Across India
                    </h1>

                    <p className="text-xl text-gray-600 md:max-w-xl leading-relaxed">
                        Join India's fastest-growing fintech network. AEPS, Recharges, Money Transfer, and Digital Services — all in one powerful platform for your business.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <Link
                            to="/contact"
                            className="group relative px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 overflow-hidden"
                        >
                            <span className="relative z-10">Become a Partner</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        </Link>
                        <Link
                            to="/services"
                            className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                        >
                            Explore Services
                        </Link>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-2">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white opacity-50 z-0"></div>
                        {/* Abstract simplified UI representation */}
                        <div className="relative z-10 h-full w-full bg-white rounded-xl overflow-hidden flex flex-col">
                            <div className="h-16 border-b border-gray-100 flex items-center px-6 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-8 grid grid-cols-2 gap-4">
                                <div className="col-span-2 h-32 bg-blue-500/5 rounded-xl flex items-center justify-center border border-blue-100 mb-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-primary mb-1">₹ 2,45,000</div>
                                        <div className="text-sm text-gray-500">Total Transaction Volume</div>
                                    </div>
                                </div>
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-24 bg-gray-50 rounded-xl animate-pulse"></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Decorative blobs */}
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
            </motion.div>
        </section>
    );
}
