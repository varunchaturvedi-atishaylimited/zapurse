// import { motion } from 'framer-motion';

// export default function PageBackground() {
//     return (
//         <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-gradient-to-br from-[#f8faff] via-[#f0f4ff] to-[#f5f0ff] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500">
//             {/* Top Right Green-Blue Mixed Blob */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.15 }}
//                 transition={{ duration: 2 }}
//                 className="absolute -top-1/4 -right-1/4 w-full h-full bg-[#182B0C] rounded-full blur-[200px] mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Bottom Left Strong Green Blob */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.2 }}
//                 transition={{ duration: 2, delay: 0.5 }}
//                 className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-[#182B0C] rounded-full blur-[200px] mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Accent Center Green Glow */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.1 }}
//                 transition={{ duration: 2, delay: 1 }}
//                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-400 dark:bg-green-900 rounded-full blur-[250px] opacity-20"
//             />
//         </div>
//     );
// }


// import { motion } from 'framer-motion';

// export default function PageBackground() {
//     return (
//         <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden 
//             bg-gradient-to-br 
//             from-[#eaf0f3] 
//             via-[#eef3f0] 
//             to-[#f4f6ec] 
//             dark:from-[#0f1e24] 
//             dark:via-[#13261b] 
//             dark:to-[#0d1812] 
//             transition-colors duration-500"
//         >
//             {/* Top Right Blue-Green Mixed Blob */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.15 }}
//                 transition={{ duration: 2 }}
//                 className="absolute -top-1/4 -right-1/4 w-full h-full 
//                 bg-[#254458] 
//                 rounded-full blur-[200px] 
//                 mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Bottom Left Strong Green Blob */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.2 }}
//                 transition={{ duration: 2, delay: 0.5 }}
//                 className="absolute -bottom-1/4 -left-1/4 w-full h-full 
//                 bg-[#738233] 
//                 rounded-full blur-[200px] 
//                 mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Accent Center Glow */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.1 }}
//                 transition={{ duration: 2, delay: 1 }}
//                 className="absolute top-1/2 left-1/2 
//                 -translate-x-1/2 -translate-y-1/2 
//                 w-full h-full 
//                 bg-[#c0cc64] dark:bg-[#a1b22b] 
//                 rounded-full blur-[250px] opacity-20"
//             />
//         </div>
//     );
// }


// import { motion } from 'framer-motion';

// export default function PageBackground() {
//     return (
//         <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden 
//             bg-gradient-to-br 
//             from-[#e8f0f2] 
//             via-[#edf3ec] 
//             to-[#f4f7e9] 
//             dark:from-[#0e1d23] 
//             dark:via-[#132c26] 
//             dark:to-[#0b1713] 
//             transition-colors duration-500"
//         >
//             {/* Top Right Primary Blue Blob */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.15 }}
//                 transition={{ duration: 2 }}
//                 className="absolute -top-1/4 -right-1/4 w-full h-full 
//                 bg-[#254458] 
//                 rounded-full blur-[200px] 
//                 mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Bottom Left Light Green Blob */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.2 }}
//                 transition={{ duration: 2, delay: 0.5 }}
//                 className="absolute -bottom-1/4 -left-1/4 w-full h-full 
//                 bg-[#c0cc64] 
//                 rounded-full blur-[200px] 
//                 mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Center Accent Glow (very subtle) */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.08 }}
//                 transition={{ duration: 2, delay: 1 }}
//                 className="absolute top-1/2 left-1/2 
//                 -translate-x-1/2 -translate-y-1/2 
//                 w-full h-full 
//                 bg-[#217095] dark:bg-[#a1b22b] 
//                 rounded-full blur-[250px] opacity-20"
//             />
//         </div>
//     );
// }


// import { motion } from 'framer-motion';

// export default function PageBackground() {
//     return (
//         <div
//             className="fixed inset-0 -z-10 pointer-events-none overflow-hidden
//             bg-gradient-to-br
//             from-[#e3edf0]     /* blue-tinted */
//             via-[#e8f0ed]      /* blue → green transition */
//             to-[#f1f5e8]       /* light green */
//             dark:from-[#0d1c22]
//             dark:via-[#112821]
//             dark:to-[#162015]
//             transition-colors duration-500"
//         >
//             {/* Top Right — Dominant Primary Blue (60%) */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.22 }}
//                 transition={{ duration: 2 }}
//                 className="absolute -top-1/4 -right-1/4 w-full h-full
//                 bg-[#254458]
//                 rounded-full blur-[200px]
//                 mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Bottom Left — Secondary Light Green (40%) */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.14 }}
//                 transition={{ duration: 2, delay: 0.5 }}
//                 className="absolute -bottom-1/4 -left-1/4 w-full h-full
//                 bg-[#c0cc64]
//                 rounded-full blur-[200px]
//                 mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Center — Blue-biased Blend (kept subtle) */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.07 }}
//                 transition={{ duration: 2, delay: 1 }}
//                 className="absolute top-1/2 left-1/2
//                 -translate-x-1/2 -translate-y-1/2
//                 w-full h-full
//                 bg-[#254458]
//                 rounded-full blur-[250px] opacity-20"
//             />
//         </div>
//     );
// }


// import { motion } from 'framer-motion';

// export default function PageBackground() {
//     return (
//         <div
//             className="fixed inset-0 -z-10 pointer-events-none overflow-hidden
//             bg-gradient-to-br
//             from-[#eef3ef]       /* light green edge */
//             via-[#e4edf0]        /* transition */
//             to-[#dde8ec]         /* blue-biased center */
//             dark:from-[#162015]
//             dark:via-[#112821]
//             dark:to-[#0d1c22]
//             transition-colors duration-500"
//         >
//             {/* Top Right — Greenish Surround */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.16 }}
//                 transition={{ duration: 2 }}
//                 className="absolute -top-1/4 -right-1/4 w-full h-full
//                 bg-[#c0cc64]
//                 rounded-full blur-[200px]
//                 mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Bottom Left — Greenish Surround */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.16 }}
//                 transition={{ duration: 2, delay: 0.5 }}
//                 className="absolute -bottom-1/4 -left-1/4 w-full h-full
//                 bg-[#c0cc64]
//                 rounded-full blur-[200px]
//                 mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Center — Dominant Primary Blue */}
//             <motion.div
//                 initial={{ opacity: 0.11 }}
//                 animate={{ opacity: 0.22 }}
//                 transition={{ duration: 2, delay: 1 }}
//                 className="absolute top-1/2 left-1/2
//                 -translate-x-1/2 -translate-y-1/2
//                 w-full h-full
//                 bg-[#254458]
//                 rounded-full blur-[250px] opacity-20"
//             />
//         </div>
//     );
// }


// import { motion } from 'framer-motion';

// export default function PageBackground() {
//     return (
//         <div
//             className="fixed inset-0 -z-10 pointer-events-none overflow-hidden
//             bg-gradient-to-br
//             from-[#f1f5e8]      /* greenish entry */
//             via-[#e6efe9]       /* soft transition */
//             to-[#dde8ec]        /* blue convergence */
//             dark:from-[#162015]
//             dark:via-[#112821]
//             dark:to-[#0d1c22]
//             transition-colors duration-500"
//         >
//             {/* Outer Greenish Influence */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.18 }}
//                 transition={{ duration: 2 }}
//                 className="absolute -top-1/4 -right-1/4 w-full h-full
//                 bg-[#c0cc64]
//                 rounded-full blur-[200px]
//                 mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Supporting Green Layer */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.16 }}
//                 transition={{ duration: 2, delay: 0.5 }}
//                 className="absolute -bottom-1/4 -left-1/4 w-full h-full
//                 bg-[#c0cc64]
//                 rounded-full blur-[200px]
//                 mix-blend-multiply dark:mix-blend-lighten"
//             />

//             {/* Primary Blue Destination (Center Focus) */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.24 }}
//                 transition={{ duration: 2, delay: 1 }}
//                 className="absolute top-1/2 left-1/2
//                 -translate-x-1/2 -translate-y-1/2
//                 w-full h-full
//                 bg-[#254458]
//                 rounded-full blur-[250px] opacity-20"
//             />
//         </div>
//     );
// }

import { motion } from 'framer-motion';

export default function PageBackground() {
    return (
        <div
            className="fixed inset-0 -z-10 pointer-events-none overflow-hidden
            bg-gradient-to-br
            from-gray-200       /* soft gray */
            via-[#217095]       /* light blue */
            dark:from-[#0c1b21]
            dark:via-[#0f2228]
            dark:to-[#132015]
            transition-colors duration-500"
        >
            {/* Top Right Light Blue Blob */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.22 }}
                transition={{ duration: 2 }}
                className="absolute -top-1/4 -right-1/4 w-full h-full
                bg-[#217095]
                rounded-full blur-[200px]
                mix-blend-multiply dark:mix-blend-lighten"
            />

            {/* Bottom Left Lightest Green Blob */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.16 }}
                transition={{ duration: 2, delay: 0.4 }}
                className="absolute -bottom-1/4 -left-1/4 w-full h-full
                bg-[#c0cc64]
                rounded-full blur-[220px]
                mix-blend-multiply dark:mix-blend-lighten"
            />

            {/* Subtle Gray Accent */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.08 }}
                transition={{ duration: 2, delay: 0.8 }}
                className="absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-full h-full
                bg-gray-300
                rounded-full blur-[250px] opacity-20"
            />
        </div>
    );
}


