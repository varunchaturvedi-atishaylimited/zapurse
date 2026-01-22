import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, Banknote, CreditCard, Monitor, Wifi, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'aeps',
        title: 'AEPS',
        description: 'Aadhaar Enabled Payment System for cash withdrawal & balance enquiry.',
        icon: <Banknote size={32} />,
        color: 'bg-blue-600',
        colSpan: 'md:col-span-2',
    },
    {
        id: 'recharge',
        title: 'Recharge & DTH',
        description: 'Instant mobile and DTH recharges for all operators.',
        icon: <Smartphone size={32} />,
        color: 'bg-purple-600',
        colSpan: 'md:col-span-1',
    },
    {
        id: 'dmt',
        title: 'Money Transfer',
        description: 'Send money to any bank account in India instantly.',
        icon: <ArrowUpRight size={32} />,
        color: 'bg-green-600',
        colSpan: 'md:col-span-1',
    },
    {
        id: 'microatm',
        title: 'Micro ATM',
        description: 'Convert your shop into a mini ATM with our Micro ATM device.',
        icon: <CreditCard size={32} />,
        color: 'bg-orange-500',
        colSpan: 'md:col-span-2',
    },
    {
        id: 'billpayment',
        title: 'Bill Payments',
        description: 'Pay electricity, water, gas, and broadband bills easily.',
        icon: <Monitor size={32} />,
        color: 'bg-indigo-500',
        colSpan: 'md:col-span-1',
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Our Services</h2>
                        <p className="text-lg text-gray-600">
                            A comprehensive suite of digital financial services designed to grow your business and serve your community.
                        </p>
                    </div>
                    <Link to="/services" className="text-primary font-bold hover:underline flex items-center gap-1">
                        View All Services <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={`group relative overflow-hidden rounded-3xl p-8 ${service.colSpan} border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-white`}
                        >
                            <div className={`absolute top-0 right-0 p-32 blur-3xl opacity-10 rounded-full ${service.color} -mr-16 -mt-16 transition-opacity group-hover:opacity-20`}></div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg ${service.color}`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed max-w-md">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-8 flex items-center text-sm font-bold text-gray-400 group-hover:text-primary transition-colors">
                                    <span>Learn more</span>
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
