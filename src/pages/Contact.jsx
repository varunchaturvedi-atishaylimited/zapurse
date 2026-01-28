import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';
import { Particles } from '../components/ui/particles';

export default function Contact() {
    return (
        <div className="pt-32 min-h-screen pb-20 bg-transparent transition-colors overflow-hidden">
            <Particles className="absolute inset-0 z-0"
                quantity={120}
                ease={80}
                color="#cbd5e1"
                refresh />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#080F4A] to-[#182B0C] dark:from-white dark:to-green-400 tracking-tighter">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-green-100/60 leading-relaxed">
                        Have questions about our services or want to become a partner? We're here to help you navigate the future of fintech.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <h3 className="text-3xl font-black text-[#080F4A] dark:text-white flex items-center gap-3">
                                <span className="w-2 h-8 bg-secondary dark:bg-white rounded-full" />
                                Contact Information
                            </h3>
                            <div className="grid gap-8">
                                {[
                                    {
                                        icon: <MapPin size={24} />,
                                        bg: "bg-blue-500/10",
                                        text: "blue-500",
                                        title: "Head Office",
                                        content: "Atishay Limited, Plot No: 36, Maharana Pratap Nagar, Zone-I, Bhopal, Madhya Pradesh - 462011"
                                    },
                                    {
                                        icon: <Phone size={24} />,
                                        bg: "bg-green-500/10",
                                        text: "green-500",
                                        title: "Phone",
                                        content: "+91 98765 43210 (Mon - Sat, 10am - 6pm)"
                                    },
                                    {
                                        icon: <Mail size={24} />,
                                        bg: "bg-purple-500/10",
                                        text: "purple-500",
                                        title: "Email",
                                        content: "support@zapurse.in / partners@zapurse.in"
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 group">
                                        <div className={`p-4 ${item.bg} text-[#182B0C] dark:text-green-400 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-[#080F4A] dark:text-white mb-2">{item.title}</h4>
                                            <p className="text-gray-600 dark:text-green-100/60 text-lg leading-relaxed">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* WhatsApp Box Fixed Contrast */}
                        <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#182B0C] to-[#080F4A] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                                        <MessageSquare size={24} />
                                    </div>
                                    <h4 className="text-2xl font-black tracking-tight">Need Immediate Support?</h4>
                                </div>
                                <p className="text-white/80 text-lg mb-8 leading-relaxed">Our support team is available on WhatsApp for quick, real-time assistance.</p>
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#182B0C] rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-xl"
                                >
                                    Chat on WhatsApp <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#182B0C] to-[#080F4A] text-white shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-10">Send us a Message</h3>
                            <form className="space-y-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-white/100 uppercase tracking-widest">First Name</label>
                                        <input type="text" className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white focus:border-white/30 focus:ring-4 focus:ring-white/5 outline-none transition-all placeholder:text-white/20" placeholder="John" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-white/100 uppercase tracking-widest">Last Name</label>
                                        <input type="text" className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white focus:border-white/30 focus:ring-4 focus:ring-white/5 outline-none transition-all placeholder:text-white/20" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-black text-white/100 uppercase tracking-widest">Email Address</label>
                                    <input type="email" className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white focus:border-white/30 focus:ring-4 focus:ring-white/5 outline-none transition-all placeholder:text-white/20" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-black text-white/100 uppercase tracking-widest">Phone Number</label>
                                    <input type="tel" className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white focus:border-white/30 focus:ring-4 focus:ring-white/5 outline-none transition-all placeholder:text-white/20" placeholder="+91 98765 00000" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-black text-white/100 uppercase tracking-widest">Message</label>
                                    <textarea className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white focus:border-white/30 focus:ring-4 focus:ring-white/5 outline-none transition-all min-h-[140px] resize-none placeholder:text-white/20" placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="submit" className="w-full py-5 bg-white text-[#080F4A] rounded-[1.5rem] font-black text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3 group relative z-10">
                                    <span>Send Message</span>
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
