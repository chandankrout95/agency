import { motion } from 'framer-motion';

const TECHNOLOGIES = [
    "React", "Next.js", "Node.js", "Express", "MongoDB",
    "Redis", "React Native", "Flutter", "Three.js", "GitHub",
    "Tailwind CSS", "TypeScript", "Python", "TensorFlow", "Figma"
];

export function AnimatedMarquee() {
    return (
        <div className="relative flex overflow-hidden w-full bg-white/5 dark:bg-black/20 py-8 my-10 border-y border-white/10 backdrop-blur-sm">
            {/* Gradients for fading effect on edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10"></div>

            {/* Marquee Content */}
            <motion.div
                className="flex space-x-12 whitespace-nowrap px-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 30,
                    repeat: Infinity,
                }}
            >
                {/* We duplicate the array multiple times to ensure smooth infinite loop */}
                {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
                    <div
                        key={idx}
                        className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/40 to-white/10 dark:from-white/20 dark:to-white/5 hover:from-[var(--accent-color)] hover:to-white transition-all duration-300 transform-gpu cursor-default uppercase"
                        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
                    >
                        {tech}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
