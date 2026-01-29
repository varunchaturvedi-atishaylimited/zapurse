import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../../../public/brand-logo/logo.png';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
        return () => (document.body.style.overflow = 'unset');
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Services',
            path: '/services',
            isDropdown: true,
            items: [
                { name: 'Mobile Recharge', path: '/services#recharge' },
                { name: 'DTH Recharge', path: '/services#dth' },
            ],
        },
        {
            name: 'Zapurse Policies',
            path: '#',
            isDropdown: true,
            items: [
                { name: 'Privacy Policy', path: '/legal/privacy' },
                { name: 'Terms & Conditions', path: '/legal/terms' },
                { name: 'Refund & Cancellation', path: '/legal/refund' },
            ],
        },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                mobileMenuOpen
                    ? "bg-background shadow-lg"
                    : isScrolled
                        ? "bg-background/80 backdrop-blur-md py-3 border-b border-border"
                        : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between md:grid md:grid-cols-[auto_1fr_auto]">
                {/* Logo - Left */}
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-black dark:text-white">
                    <img src={logo} alt="Zapurse logo" className="h-12 w-auto" />
                </Link>

                {/* Desktop Nav Links - Center */}
                <div className="hidden md:flex items-center justify-center space-x-8">
                    {navLinks.map(link => (
                        <div key={link.name} className="relative group">
                            {link.isDropdown ? (
                                <div className="flex items-center gap-1 cursor-pointer py-2 font-medium text-black dark:text-white hover:text-primary transition-colors">
                                    <span className="whitespace-nowrap">{link.name}</span>
                                    <ChevronDown size={14} />

                                    {/* Dropdown */}
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                                        {link.items.map(item => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-green-900/30 hover:text-primary transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="font-medium text-black dark:text-white hover:text-primary transition-colors whitespace-nowrap"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right: Theme Toggle + Mobile Menu */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="p-2 text-black dark:text-white md:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl z-[100] flex flex-col p-6 md:hidden"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-2xl font-bold text-black dark:text-white">Menu</span>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-6 text-xl">
                            {navLinks.map(link => (
                                <div key={link.name}>
                                    {link.isDropdown ? (
                                        <div className="flex flex-col">
                                            <button
                                                onClick={() =>
                                                    setOpenDropdown(openDropdown === link.name ? null : link.name)
                                                }
                                                className="flex items-center justify-between w-full font-semibold text-black dark:text-white"
                                            >
                                                {link.name}
                                                <ChevronDown
                                                    size={20}
                                                    className={cn("transition-transform", openDropdown === link.name && "rotate-180")}
                                                />
                                            </button>
                                            {openDropdown === link.name && (
                                                <div className="flex flex-col pl-4 mt-4 space-y-3 border-l-2 border-current ml-1">
                                                    {link.items.map(item => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.path}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="text-lg font-medium hover:underline transition-colors"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="font-semibold text-black dark:text-white hover:underline transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Get in touch</p>
                            <div className="flex items-center gap-2 font-bold text-primary text-xl">
                                <Phone size={20} />
                                <span>+91 98765 43210</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}