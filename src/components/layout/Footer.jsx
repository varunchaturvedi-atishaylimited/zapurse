import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-secondary dark:bg-gray-900 text-secondary-foreground dark:text-gray-100 pt-16 pb-8 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                            <span className="text-primary text-3xl">Z</span>apurse
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                            Building last-mile fintech services with trust & innovation. Empowering businesses across rural and urban India using simplified digital payments.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <a href="#" className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:text-primary transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:text-primary transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:text-primary transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:text-primary transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services#recharge" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Mobile Recharge</Link></li>
                            <li><Link to="/services#dth" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">DTH Recharge</Link></li>
                            <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Become a Retailer</Link></li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Discover Zapurse</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/legal/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/legal/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/legal/faq" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link to="/legal/refund" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Zapurse (Atishay Limited). All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link to="/legal/privacy" className="hover:text-primary">Privacy</Link>
                        <Link to="/legal/terms" className="hover:text-primary">Terms</Link>
                        <Link to="/sitemap" className="hover:text-primary">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
