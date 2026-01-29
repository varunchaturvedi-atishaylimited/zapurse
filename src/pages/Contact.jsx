import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';
import { Particles } from '../components/ui/particles';

export default function Contact() {
    return (
        <div className="pt-32 min-h-screen pb-20 bg-transparent overflow-hidden">
            <Particles
                className="absolute inset-0 z-0"
                quantity={120}
                ease={80}
                color="#cbd5e1"
                refresh
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h1 className="font-black mb-6">
                        Get in Touch
                    </h1>
                    <p className="leading-relaxed">
                        Have questions about our services or want to become a partner? We’re here to help you navigate the future of fintech.
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
                            <h4 className="flex items-center gap-3 font-black">
                                <span className="w-2 h-8 bg-secondary rounded-full" />
                                Contact Information
                            </h4>

                            <div className="grid gap-8">
                                {[{
                                    icon: <MapPin size={24} />,
                                    bg: "bg-blue-500/10 dark:bg-blue-500/20",
                                    title: "Head Office",
                                    content: "Atishay Limited, Plot No: 36, Maharana Pratap Nagar, Zone-I, Bhopal, Madhya Pradesh – 462011",
                                },
                                {
                                    icon: <Phone size={24} />,
                                    bg: "bg-green-500/10 dark:bg-green-500/20",
                                    title: "Phone",
                                    content: "+91 98765 43210 (Mon – Sat, 10am – 6pm)",
                                },
                                {
                                    icon: <Mail size={24} />,
                                    bg: "bg-purple-500/10 dark:bg-purple-500/20",
                                    title: "Email",
                                    content: "support@zapurse.in / partners@zapurse.in",
                                },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-6 p-6 rounded-3xl border bg-white/30 dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className={`p-4 rounded-2xl ${item.bg} flex items-center justify-center`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h5 className="font-bold mb-2">{item.title}</h5>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* WhatsApp Box */}
                        <div className="p-10 rounded-[2.5rem] bg-white/30 dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 dark:bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-xl flex items-center justify-center border border-white/20 dark:border-white/10">
                                        <MessageSquare size={24} />
                                    </div>
                                    <h4 className="font-black">
                                        Need Immediate Support?
                                    </h4>
                                </div>
                                <p className="mb-8 leading-relaxed">
                                    Our support team is available on WhatsApp for quick, real-time assistance.
                                </p>
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-200 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-xl"
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
                        className="p-10 md:p-14 rounded-[2.5rem] bg-white/30 dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 dark:bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="relative z-10">
                            <h4 className="font-black mb-10">
                                Send us a Message
                            </h4>

                            <form className="space-y-8">
                                {[["First Name", "John"], ["Last Name", "Doe"]].map(([label, placeholder]) => (
                                    <div key={label} className="space-y-3">
                                        <label className="font-black uppercase tracking-widest">{label}</label>
                                        <input
                                            type="text"
                                            placeholder={placeholder}
                                            className="w-full px-6 py-4 rounded-2xl border bg-white/20 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-4 outline-none transition-all"
                                        />
                                    </div>
                                ))}

                                <div className="space-y-3">
                                    <label className="font-black uppercase tracking-widest">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-6 py-4 rounded-2xl border bg-white/20 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-4 outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="font-black uppercase tracking-widest">Message</label>
                                    <textarea
                                        className="w-full px-6 py-4 rounded-2xl border bg-white/20 dark:bg-gray-800 min-h-[140px] resize-none placeholder-gray-500 dark:placeholder-gray-400 focus:ring-4 outline-none transition-all"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="text-black w-full py-5 bg-white dark:bg-gray-200 rounded-[1.5rem] font-black hover:scale-[1.02] active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3"
                                >
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
