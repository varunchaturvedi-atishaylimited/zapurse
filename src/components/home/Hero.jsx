import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 transition-colors">
            <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-sm font-semibold tracking-wide mb-2"
                    >
                        Trusted by 50,000+ Retailers
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                        Empowering <span className="text-primary">Digital Payments</span> Across India
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 md:max-w-xl leading-relaxed">
                        Join India's fastest-growing fintech network. Mobile Recharges and DTH Services — all in one powerful platform for your business.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
    {/* Play Store Button */}
    <a
        href="https://play.google.com/store/apps/details?id=com.zapurse.zapurse&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
    >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-14"
        />
    </a>

    {/* App Store Button */}
    <a
        href="https://apps.apple.com/in/app/zapurse-recharge/id6751755861"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
    >
        <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-14"
        />
    </a>
</div>

                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative hidden md:block"
                >

                    <div className="relative z-10 w-full 
                max-w-[160px] 
                sm:max-w-[220px] 
                md:max-w-[260px] 
                lg:max-w-[220px] 
                xl:max-w-[550px]
                mx-auto flex justify-center items-center">

                        <img
                            src="/hero-illustration.png"
                            alt="Zapurse Mobile Recharge and Fintech App"
                            className="w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl"
                        />
                    </div>



                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                {/* <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">.</span> */}
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
            </motion.div>
        </section>
    );
}
