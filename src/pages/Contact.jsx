import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <div className="pt-24 min-h-screen pb-20 bg-transparent transition-colors">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Have questions about our services or want to become a partner? We're here to help.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div className='ml-10'>
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-lg">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Head Office</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Atishay Limited,<br />
                                            Plot No: 36, Maharana Pratap Nagar, Zone-I,<br />
                                            Bhopal, Madhya Pradesh - 462011
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-lg">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Phone</h4>
                                        <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Mon - Sat, 10am - 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-lg">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-400">support@zapurse.in</p>
                                        <p className="text-gray-600 dark:text-gray-400">partners@zapurse.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 ml-10">
                            <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Need Immediate Support?</h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Our support team is available on WhatsApp for quick queries.</p>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-primary dark:text-blue-400 hover:underline">
                                Chat on WhatsApp <ArrowRight size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+91 98765 00000" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all min-h-[120px]" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2">
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// Importing ArrowRight since it was used in jsx but not imported in top level
import { ArrowRight } from 'lucide-react';
