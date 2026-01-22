import { motion } from 'framer-motion';
import { Smartphone, Banknote, CreditCard, Monitor, Wifi, Shield, ArrowRight, Zap, Globe, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'aeps',
        title: 'Aadhaar Enabled Payment System (AEPS)',
        description: 'Empower your customers to withdraw cash, check balance, and access basic banking services using just their Aadhaar number and biometrics.',
        features: ['High success rates', 'Instant commission', 'Secure biometric authentication'],
        icon: <Banknote size={40} />,
        color: 'bg-blue-600',
    },
    {
        id: 'recharge',
        title: 'Mobile & DTH Recharge',
        description: 'One-stop solution for all prepaid mobile and DTH recharges. Support for all major operators including Jio, Airtel, Vi, DishTV, Tata Sky, and more.',
        features: ['99.9% uptime', 'Covers all operators', 'Instant confirmation'],
        icon: <Smartphone size={40} />,
        color: 'bg-purple-600',
    },
    {
        id: 'dmt',
        title: 'Domestic Money Transfer (DMT)',
        description: 'Send money to any bank account in India 24/7, 365 days a year. Safe, secure, and instant fund transfers for your customers.',
        features: ['IMPS & NEFT support', 'Low transaction charges', 'Real-time status updates'],
        icon: <Globe size={40} />,
        color: 'bg-green-600',
    },
    {
        id: 'microatm',
        title: 'Micro ATM (mATM)',
        description: 'Transform your shop into a mini bank branch. Accept debit card payments and allow cash withdrawals with our compact handheld device.',
        features: ['Accepts all debit cards', 'Portable device', 'Increase footfall'],
        icon: <CreditCard size={40} />,
        color: 'bg-orange-500',
    },
    {
        id: 'billpayment',
        title: 'Bill Payments (BBPS)',
        description: 'Pay electricity, water, gas, broadband, and landline bills. Earn commission on every bill payment you process.',
        features: ['Bharat BillPay supported', 'Auto-fetch bill details', 'Instant receipt'],
        icon: <Monitor size={40} />,
        color: 'bg-indigo-500',
    },
    {
        id: 'insurance',
        title: 'Insurance',
        description: 'Offer bite-sized insurance products to your customers. Motor, health, and device insurance made easy and affordable.',
        features: ['Paperless process', 'Instant policy issuance', 'Trusted partners'],
        icon: <Shield size={40} />,
        color: 'bg-red-500',
    },
    {
        id: 'fastag',
        title: 'FasTAG Recharge',
        description: 'Instant FasTAG recharges for all issuing banks. Help customers keep moving on highways without hassle.',
        features: ['All banks supported', 'Immediate balance update'],
        icon: <Zap size={40} />,
        color: 'bg-teal-600',
    },
    {
        id: 'pan',
        title: 'Pan Card Services',
        description: 'Assist customers in applying for new PAN cards or making corrections to existing ones.',
        features: ['Authorized center', 'Digital & physical mode'],
        icon: <FileText size={40} />,
        color: 'bg-yellow-600',
    },
];

export default function Services() {
    return (
        <div className="pt-24 min-h-screen bg-gray-50 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600"
                    >
                        Comprehensive financial solutions tailored for retail businesses. Grow your revenue with our diversified service portfolio.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            <div className={`h-2 ${service.color}`}></div>
                            <div className="p-8 flex-grow">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md ${service.color}`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                            <div className={`w-1.5 h-1.5 rounded-full ${service.color}`}></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 border-t border-gray-50 bg-gray-50/50">
                                <Link to="/contact" className="flex items-center justify-between font-semibold hover:text-primary transition-colors group">
                                    <span>Start Offering This</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
