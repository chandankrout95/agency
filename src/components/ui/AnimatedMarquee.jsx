import { motion } from 'framer-motion';

const TECHNOLOGIES = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
];

export function AnimatedMarquee() {
    return (
        <div className="relative flex overflow-hidden w-full bg-white/5 dark:bg-black/20 py-8 my-10 border-y border-white/10 backdrop-blur-sm">
            {/* Gradients for fading effect on edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Content */}
            <motion.div
                className="flex gap-16 whitespace-nowrap px-4 items-center"
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
                        className="flex items-center gap-4 group"
                    >
                        {/* If it's a "dark" icon like Next.js or Github, we might need a background. Devicon has some logic, but let's use a subtle glass circle background for all to make them pop and look 3D. */}
                        <div className="w-16 h-16 rounded-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain drop-shadow-lg filter" />
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-[var(--text-color)]/50 group-hover:text-[var(--text-color)] transition-colors">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
