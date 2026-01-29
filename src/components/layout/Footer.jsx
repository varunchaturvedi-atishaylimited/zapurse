import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden pt-10 pb-10 transition-colors duration-700">

            {/* Decorative background blob */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                            <span className="text-4xl font-black">Zapurse</span>
                        </Link>

                        <p className="leading-relaxed max-w-sm">
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
                                    className="p-3 rounded-2xl border shadow-sm transition-all duration-300
                  bg-black/5 border-black/10 hover:bg-black hover:text-white
                  dark:bg-white/10 dark:border-white/10 dark:hover:bg-white dark:hover:text-[#080F4A]"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-black text-2xl mb-8 border-l-4 border-current">
                            Our Services
                        </h3>

                        <ul className="space-y-4 list-none pl-0">
                            <li>
                                <Link to="/services#recharge" className="text-lg transition-colors hover:underline">
                                    Mobile Recharge
                                </Link>
                            </li>
                            <li>
                                <Link to="/services#dth" className="text-lg transition-colors hover:underline">
                                    DTH Recharge
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Discover */}
                    <div>
                        <h3 className="font-black text-2xl mb-8 border-l-4 border-current">
                            Discover
                        </h3>

                        <ul className="space-y-4 list-none pl-0">
                            {[
                                { name: "Contact Us", path: "/contact" },
                                { name: "Terms & Conditions", path: "/legal/terms" },
                                { name: "Privacy Policy", path: "/legal/privacy" },
                                { name: "Refund Policy", path: "/legal/refund" },
                                { name: "FAQ", path: "/legal/faq" }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-lg transition-colors hover:underline">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t pt-8 mt-8 text-sm text-center border-current">
                    &copy; {new Date().getFullYear()} Zapurse (Atishay Limited). All rights reserved.
                </div>

            </div>
        </footer>
    );
}