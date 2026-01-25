import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
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
            ]
        },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                mobileMenuOpen ? "bg-white dark:bg-gray-950 shadow-lg" : (isScrolled ? "glass-nav py-3" : "bg-transparent py-5")
            )}
        >
            {/* Main Container using grid for proper alignment */}
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-[auto_1fr_auto] items-center">

                {/* Logo - Left */}
                <Link to="/" className="text-2xl font-bold tracking-tighter text-black dark:text-white flex items-center gap-2">
                    <span className="text-primary text-3xl">Zapurse</span>
                </Link>

                {/* Desktop Nav Links - Center */}
                <div className="hidden md:flex items-center justify-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.isDropdown ? (
                                <div className="flex items-center gap-1 cursor-pointer py-2 text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                                    <span className="font-medium whitespace-nowrap">{link.name}</span>
                                    <ChevronDown size={14} />

                                    {/* Dropdown */}
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 text-left overflow-hidden">
                                        {link.items.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                className="block px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary border-b border-gray-50 dark:border-gray-800 last:border-none transition-colors whitespace-nowrap"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium whitespace-nowrap"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Theme Toggle + Mobile Menu - Right */}
                <div className="flex items-center gap-4 justify-end md:justify-end">
                    <ThemeToggle />
                    <button
                        className="p-2 text-black dark:text-white md:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white/98 dark:bg-gray-950/98 backdrop-blur-xl z-[100] flex flex-col p-6 md:hidden"
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
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.isDropdown ? (
                                        <div className="flex flex-col">
                                            <button
                                                onClick={() => setServicesOpen(!servicesOpen)}
                                                className="flex items-center justify-between w-full font-semibold text-black dark:text-white"
                                            >
                                                {link.name}
                                                <ChevronDown size={20} className={cn("transition-transform", servicesOpen && "rotate-180")} />
                                            </button>
                                            {servicesOpen && (
                                                <div className="flex flex-col pl-4 mt-4 space-y-3 border-l-2 border-gray-100 dark:border-gray-800 ml-1">
                                                    {link.items.map(item => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.path}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="text-lg text-gray-600 dark:text-gray-400"
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
                                            className="font-semibold block text-black dark:text-white"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Get in touch</p>
                            <div className="flex items-center gap-2 text-primary font-bold text-xl">
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
