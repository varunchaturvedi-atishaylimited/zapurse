import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'recharge',
        title: 'Mobile Recharge',
        description: 'Instant mobile recharges for all major operators including Jio, Airtel, Vi, and BSNL.',
        icon: <Smartphone size={32} />,
        color: 'bg-[#080F4A]',
        accent: 'from-blue-500/10 to-transparent',
    },
    {
        id: 'dth',
        title: 'DTH Recharge',
        description: 'Seamless DTH recharges for Tata Play, Dish TV, Videocon d2h, Sun Direct, and Airtel Digital TV.',
        icon: <Banknote size={32} />,
        color: 'bg-[#182B0C]',
        accent: 'from-green-500/10 to-transparent',
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-32 bg-transparent transition-colors" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#080F4A] to-[#182B0C] dark:from-white dark:to-gray-400">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            A comprehensive suite of digital financial services designed to grow your business and serve your community.
                        </p>
                    </div>
                    <Link to="/services" className="px-6 py-3 rounded-xl bg-[#182B0C]/5 dark:bg-green-400/10 text-[#182B0C] dark:text-green-400 font-bold hover:bg-[#182B0C] hover:text-white dark:hover:bg-green-400 dark:hover:text-[#0d1a0d] transition-all flex items-center gap-2 group">
                        Explore All <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative overflow-hidden rounded-[2.5rem] p-10 border border-[#182B0C]/10 dark:border-green-900/30 shadow-sm hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 bg-white dark:bg-[#0d1a0d] backdrop-blur-sm"
                        >
                            {/* Decorative background gradient */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.accent} opacity-40 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-white mb-8 shadow-xl ${service.color} transform group-hover:rotate-6 transition-transform`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 text-[#080F4A] dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#080F4A] group-hover:to-[#182B0C] dark:group-hover:from-white dark:group-hover:to-green-400 transition-all duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-10 flex items-center text-[#182B0C] dark:text-green-400 font-black group-hover:translate-x-2 transition-transform cursor-pointer">
                                    <span className="uppercase tracking-widest text-xs">Recharge Now</span>
                                    <div className="ml-4 w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-[#182B0C] dark:group-hover:bg-green-400 group-hover:text-white dark:group-hover:text-[#0d1a0d] transition-all">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
