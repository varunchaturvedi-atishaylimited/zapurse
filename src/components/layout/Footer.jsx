import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#f0f4f0] dark:bg-[#0d1a0d] text-[#080F4A] dark:text-[#e0f0e0] pt-20 pb-10 transition-colors border-t border-[#182B0C]/5 dark:border-green-900/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#080F4A] to-[#182B0C] dark:from-white dark:to-green-400">
                                Zapurse
                            </span>
                        </Link>
                        <p className="text-gray-600 dark:text-green-100/60 max-w-sm leading-relaxed text-lg">
                            Building last-mile fintech services with trust & innovation. Empowering businesses across India using simplified digital payments.
                        </p>
                        <div className="flex items-center gap-5 pt-4">
                            {[
                                { icon: <Facebook size={20} />, url: "https://www.facebook.com/Zapurse/" },
                                { icon: <Instagram size={20} />, url: "https://www.instagram.com/zapurse_recharge/" },
                                { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/showcase/zapurse" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-green-900/30 rounded-2xl shadow-sm hover:bg-[#182B0C] dark:hover:bg-green-400 hover:text-white dark:hover:text-[#0d1a0d] transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="site-footer">
                        <h3 className="font-black text-2xl mb-8 border-l-4 border-secondary pl-4">Our Services</h3>
                        <ul className="space-y-4 list-none pl-0">
                            <li><Link to="/services#recharge" className="text-lg text-gray-600 dark:text-green-100/60 hover:text-[#182B0C] dark:hover:text-green-400 transition-colors">Mobile Recharge</Link></li>
                            <li><Link to="/services#dth" className="text-lg text-gray-600 dark:text-green-100/60 hover:text-[#182B0C] dark:hover:text-green-400 transition-colors">DTH Recharge</Link></li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div className="site-footer">
                        <h3 className="font-black text-2xl mb-8 border-l-4 border-secondary pl-4">Discover</h3>
                        <ul className="space-y-4 list-none pl-0">
                            {[
                                { name: "About Us", path: "/about" },
                                { name: "Contact Us", path: "/contact" },
                                { name: "Terms & Conditions", path: "/legal/terms" },
                                { name: "Privacy Policy", path: "/legal/privacy" },
                                { name: "Refund Policy", path: "/legal/refund" },
                                { name: "FAQ", path: "/legal/faq" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-lg text-gray-600 dark:text-green-100/60 hover:text-[#182B0C] dark:hover:text-green-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Zapurse (Atishay Limited). All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
