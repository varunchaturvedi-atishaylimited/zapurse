import { motion } from 'framer-motion';

export default function PageBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-gradient-to-br from-[#f8faff] via-[#f0f4ff] to-[#f5f0ff] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500">
            {/* Primary Blue Blob - Top Right */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2 }}
                className="absolute -top-1/4 -right-1/4 w-full h-full bg-blue-400 dark:bg-blue-600 rounded-full blur-[160px] mix-blend-multiply dark:mix-blend-soft-light"
            />

            {/* Soft Purple Blob - Bottom Left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-purple-400 dark:bg-purple-600 rounded-full blur-[160px] mix-blend-multiply dark:mix-blend-soft-light"
            />

            {/* Accent Cyan Blob - Center Right */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.08 }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-300 dark:bg-cyan-900 rounded-full blur-[120px]"
            />
        </div>
    );
}
