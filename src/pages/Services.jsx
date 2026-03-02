import { motion } from 'framer-motion';
import { ServicesSection } from '../sections/ServicesSection';
import { AnimatedMarquee } from '../components/ui/AnimatedMarquee';
import { GlassCard } from '../components/ui/GlassCard';

const TECH_HIGHLIGHTS = [
    { name: "React / Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js / Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Three.js / WebGL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg" }
];

export function Services() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen flex flex-col"
        >
            <div className="text-center py-16 px-6 relative z-10">
                <h1 className="text-5xl font-bold tracking-tight mb-6">Our <span className="text-[var(--accent-color)]">Expertise</span></h1>
                <p className="text-lg text-[var(--text-color)]/60 max-w-2xl mx-auto">
                    We offer end-to-end development services tailored to modern startups. From initial concept and UI/UX to scalable cloud deployments.
                </p>
            </div>

            <AnimatedMarquee />

            {/* Reusing the Services Section grid */}
            <ServicesSection />

            <div className="container mx-auto px-6 pb-32 max-w-5xl">
                <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack Highlights</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {TECH_HIGHLIGHTS.map((tech, idx) => (
                        <GlassCard key={idx} className="p-4 text-center border border-white/5" hoverEffect={false}>
                            <div className="flex flex-col items-center justify-center gap-3">
                                <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain drop-shadow-md filter" />
                                <span className="font-medium text-[var(--text-color)]/80 text-sm md:text-base">{tech.name}</span>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
