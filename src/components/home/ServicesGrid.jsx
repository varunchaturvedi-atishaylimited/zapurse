import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'recharge',
        title: 'Mobile Recharge',
        description: 'Instant mobile recharges for all major operators including Jio, Airtel, Vi, and BSNL.',
        icon: <Smartphone size={32} />,
        color: 'bg-blue-600',
        colSpan: 'md:col-span-1',
    },
    {
        id: 'dth',
        title: 'DTH Recharge',
        description: 'Seamless DTH recharges for Tata Play, Dish TV, Videocon d2h, Sun Direct, and Airtel Digital TV.',
        icon: <Banknote size={32} />, // Using Banknote as a placeholder for DTH related generic icon if specific dish not available, or Smartphone generic.
        color: 'bg-purple-600',
        colSpan: 'md:col-span-1',
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-24 bg-transparent transition-colors" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Our Services</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            A comprehensive suite of digital financial services designed to grow your business and serve your community.
                        </p>
                    </div>
                    <Link to="/services" className="text-primary font-bold hover:underline flex items-center gap-1">
                        View All Services <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={`group relative overflow-hidden rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700`}
                        >
                            <div className={`absolute top-0 right-0 p-32 blur-3xl opacity-10 rounded-full ${service.color} -mr-16 -mt-16 transition-opacity group-hover:opacity-20`}></div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg ${service.color}`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-8 flex items-center text-sm font-bold text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors">
                                    <span>Recharge Now</span>
                                    <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
