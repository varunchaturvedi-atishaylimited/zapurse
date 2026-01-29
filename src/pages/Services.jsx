import { motion } from 'framer-motion';
import { Smartphone, Monitor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Particles } from '../components/ui/particles';

const services = [
    {
        id: 'recharge',
        title: 'Mobile Recharge',
        description: 'Instant mobile recharges for all major operators including Jio, Airtel, Vi, and BSNL.',
        features: ['99.9% uptime', 'Covers all operators', 'Instant confirmation'],
        icon: <Smartphone size={40} />,
        color: 'bg-[#217095]',
    },
    {
        id: 'dth',
        title: 'DTH Recharge',
        description: 'Seamless DTH recharges for Tata Play, Dish TV, Videocon d2h, Sun Direct, and Airtel Digital TV.',
        features: ['All providers supported', 'Instant activation', 'Best commissions'],
        icon: <Monitor size={40} />,
        color: 'bg-[#738233]',
    },
];

export default function Services() {
    return (
        <div className="pt-32 min-h-screen pb-20 bg-transparent transition-colors overflow-hidden">
            <Particles
                className="absolute inset-0 z-0"
                quantity={120}
                ease={80}
                color="#cbd5e1"
                refresh
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Services
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Specialized recharge solutions tailored for retail businesses.
                        Grow your revenue with our robust recharge platform.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/30 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col"
                        >
                            <div className={`h-2 ${service.color}`} />

                            <div className="p-8 flex-grow">
                                <div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md ${service.color}`}
                                >
                                    {service.icon}
                                </div>

                                {/* Global h3 styles apply here */}
                                <h4>{service.title}</h4>

                                {/* Global p styles apply here */}
                                <p className="mb-6">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            <div
                                                className={`w-1.5 h-1.5 rounded-full ${service.color}`}
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 border-t border-gray-50 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                <Link
                                    to="/contact"
                                    className="flex items-center justify-between font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors group"
                                >
                                    <span>Start Offering This</span>
                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

