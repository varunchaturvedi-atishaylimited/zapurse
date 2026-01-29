import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'recharge',
        title: 'Mobile Recharge',
        description: 'Instant mobile recharges for all major operators including Jio, Airtel, Vi, and BSNL.',
        icon: <Smartphone size={32} />
    },
    {
        id: 'dth',
        title: 'DTH Recharge',
        description: 'Seamless DTH recharges for Tata Play, Dish TV, Videocon d2h, Sun Direct, and Airtel Digital TV.',
        icon: <Banknote size={32} />
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-32" id="services">
            <div className="container mx-auto px-4 md:px-6">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2>Our Services</h2>
                    <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                        A comprehensive suite of digital financial services designed to grow your business and serve your community.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="relative overflow-hidden rounded-[2rem] p-10 bg-white/30 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-500"
                        >
                            {/* Background blur circle */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            {/* Card Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-white mb-6 shadow-md bg-primary/10 backdrop-blur-md border border-white/10 transform group-hover:rotate-6 transition-transform">
                                        {service.icon}
                                    </div>

                                    {/* Title & Description */}
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{service.description}</p>
                                </div>

                                {/* Call to Action */}
                                <Link
                                    to={`/${service.id}`}
                                    className="mt-8 inline-flex items-center font-semibold text-sm uppercase tracking-widest group"
                                >
                                    <span className="mr-3">Recharge Now</span>
                                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#182B0C] transition-all">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
