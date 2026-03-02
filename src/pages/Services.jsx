import { motion } from 'framer-motion';
import { ServicesSection } from '../sections/ServicesSection';
import { AnimatedMarquee } from '../components/ui/AnimatedMarquee';
import { GlassCard } from '../components/ui/GlassCard';

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
                    {['React / Next.js', 'Node.js / Express', 'React Native', 'MongoDB', 'PostgreSQL', 'Three.js / WebGL', 'Tailwind CSS', 'Framer Motion'].map((tech, idx) => (
                        <GlassCard key={idx} className="p-4 text-center border border-white/5" hoverEffect={false}>
                            <span className="font-medium text-[var(--text-color)]/80">{tech}</span>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
