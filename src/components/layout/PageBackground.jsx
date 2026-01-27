import { motion } from 'framer-motion';

export default function PageBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-gradient-to-br from-[#f8faff] via-[#f0f4ff] to-[#f5f0ff] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500">
            {/* Top Right Green-Blue Mixed Blob */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2 }}
                className="absolute -top-1/4 -right-1/4 w-full h-full bg-[#182B0C] rounded-full blur-[200px] mix-blend-multiply dark:mix-blend-lighten"
            />

            {/* Bottom Left Strong Green Blob */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-[#182B0C] rounded-full blur-[200px] mix-blend-multiply dark:mix-blend-lighten"
            />

            {/* Accent Center Green Glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-400 dark:bg-green-900 rounded-full blur-[250px] opacity-20"
            />
        </div>
    );
}
