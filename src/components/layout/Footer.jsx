import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-[#182B0C] to-[#080F4A] text-white pt-20 pb-10 transition-all duration-700 group">
            {/* Decorative background element exactly like snippet */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                            <span className="text-4xl font-black text-white">
                                Zapurse
                            </span>
                        </Link>
                        <p className="text-white/70 max-w-sm leading-relaxed text-lg">
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
                                    className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm hover:bg-white hover:text-[#080F4A] transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="site-footer">
                        <h3 className="font-black text-2xl mb-8 border-l-4 border-white pl-4">Our Services</h3>
                        <ul className="space-y-4 list-none pl-0">
                            <li><Link to="/services#recharge" className="text-lg text-white/70 hover:text-white transition-colors">Mobile Recharge</Link></li>
                            <li><Link to="/services#dth" className="text-lg text-white/70 hover:text-white transition-colors">DTH Recharge</Link></li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div className="site-footer">
                        <h3 className="font-black text-2xl mb-8 border-l-4 border-white pl-4">Discover</h3>
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
                                    <Link to={link.path} className="text-lg text-white/70 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} Zapurse (Atishay Limited). All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
