import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LegalLayout = ({ title, children, lastUpdated }) => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
            gsap.from(contentRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="pt-32 min-h-screen pb-20 transition-colors duration-300">
            {/* Animated Background Element */}
            <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
            <div className="fixed bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
            <div className="fixed top-1/2 left-1/4 -z-10 w-[300px] h-[300px] bg-[#182B0C]/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
                <div ref={titleRef} className="mb-16 border-l-8 border-secondary pl-8 py-2">
                    <h1 className="text-4xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#080F4A] to-[#182B0C] dark:from-white dark:to-gray-400 tracking-tighter">
                        {title}
                    </h1>
                    {lastUpdated && (
                        <div className="flex items-center gap-2 text-[#182B0C] font-semibold dark:text-gray-400">
                            <span className="w-12 h-[2px] bg-gradient-to-r from-[#182B0C] to-transparent"></span>
                            Last Updated: {lastUpdated}
                        </div>
                    )}
                </div>

                <div
                    ref={contentRef}
                    className="prose prose-lg prose-blue max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert 
                    bg-white/40 dark:bg-gray-900/30 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 border border-white/40 shadow-[0_32px_64px_-16px_rgba(8,15,74,0.1)]"
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LegalLayout;
