import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';

export function AboutUs() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-32 px-6 container mx-auto min-h-screen"
        >
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold tracking-tight mb-8">About <span className="text-[var(--accent-color)]">Us</span></h1>

                <GlassCard hoverEffect={false} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                    <p className="text-[var(--text-color)]/70 text-lg leading-relaxed font-light mb-6">
                        Founded in the vibrant city of Bhubaneswar, we are a collective of passionate developers, designers, and innovators. We believe that technology should not just function; it should inspire and elevate the human experience.
                    </p>
                    <p className="text-[var(--text-color)]/70 text-lg leading-relaxed font-light">
                        Our mission is simple: To build scalable, beautiful, and futuristic digital products that empower startups, founders, and small businesses to thrive in the modern web era.
                    </p>
                </GlassCard>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <GlassCard className="h-full">
                        <h3 className="text-xl font-bold mb-3">Our Core Values</h3>
                        <ul className="space-y-4 text-[var(--text-color)]/70 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--accent-color)] font-bold mt-1">01.</span>
                                <span><strong>Excellence</strong> in every line of code and pixel we deliver.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--accent-color)] font-bold mt-1">02.</span>
                                <span><strong>Innovation</strong> through adopting cutting edge tools like AI, 3D, and modern React architectures.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--accent-color)] font-bold mt-1">03.</span>
                                <span><strong>Transparency</strong> with our clients, treating their startup goals as our own.</span>
                            </li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="h-full">
                        <h3 className="text-xl font-bold mb-3">The Team</h3>
                        <p className="text-[var(--text-color)]/70 font-light leading-relaxed mb-4">
                            We operate as a lean, highly skilled freelance agency. Our tight-knit structure allows us to move fast, pivot quickly, and deliver premium results without the corporate overhead.
                        </p>
                        <div className="h-32 rounded-xl bg-gradient-to-tr from-[var(--accent-color)]/20 to-purple-500/20 border border-white/5 flex items-center justify-center">
                            <span className="text-[var(--text-color)]/50 font-medium">Remote & Agile</span>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </motion.div>
    );
}
