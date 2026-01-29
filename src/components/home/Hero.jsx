import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { InteractiveGridPattern } from '../ui/interactive-grid-pattern';

export default function Hero() {
    const heroRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Smooth entrance for content
            gsap.from(".hero-text-child", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out"
            });

            // Float animation for image
            gsap.to(imageRef.current, {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });

            // Parallax effect on mouse move
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5) * 40;
                const yPos = (clientY / window.innerHeight - 0.5) * 40;

                gsap.to(imageRef.current, {
                    x: xPos,
                    y: yPos,
                    duration: 1,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
                <InteractiveGridPattern />

                {/* Text Content */}
                <div ref={contentRef} className="text-center md:text-left space-y-6">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#080F4A]/5 dark:bg-green-400/10 text-[#080F4A] dark:text-green-400 text-sm font-bold tracking-wide border border-[#080F4A]/10 dark:border-green-400/20 mb-2">
                        Trusted by 50,000+ Retailers
                    </div>

                    <h1 className="hero-text-child text-5xl md:text-6xl lg:text-8xl leading-[0.95]">
                        Empowering <br />
                        <span>Digital Payments</span>
                    </h1>

                    <p className="hero-text-child text-xl md:max-w-xl">
                        Join India's fastest-growing fintech network. Mobile Recharges and DTH Services — all in one powerful platform for your business.
                    </p>

                    <div className="hero-text-child flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-8">
                        <a href="https://play.google.com/store/apps/details?id=com.zapurse.zapurse&hl=en" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-14" />
                        </a>

                        <a href="https://apps.apple.com/in/app/zapurse-recharge/id6751755861" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-14" />
                        </a>
                    </div>
                </div>

                {/* Visual Content */}
                <div className="relative hidden md:block">
                    <div ref={imageRef} className="relative z-10 w-full max-w-[300px] mx-auto perspective-1000">
                        <img
                            src="/hero-illustration.png"
                            alt="Zapurse Mobile Recharge and Fintech App"
                            className="w-full object-contain drop-shadow-[0_20px_50px_rgba(8,15,74,0.3)] rounded-[2.5rem] transform transition-transform duration-500 hover:rotate-2"
                        />
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/20 rounded-full blur-2xl animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#182B0C]/20 rounded-full blur-3xl animate-bounce-slow" />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-[#182B0C] to-transparent dark:from-green-400/50 animate-pulse"></div>
            </div>
        </section>
    );


}
