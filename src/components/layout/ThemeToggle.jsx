import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) return saved;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-sm group active:scale-95"
            aria-label="Toggle Theme"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                    {theme === 'dark' ? (
                        <motion.div
                            key="moon"
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Moon size={20} className="text-yellow-400 fill-yellow-400/20" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Sun size={20} className="text-orange-500 fill-orange-500/20" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </button>
    );
}
