import { motion } from 'framer-motion';
import { ParticleBackground } from '../components/3d/ParticleBackground';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <ParticleBackground />

            {/* Background glow overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[var(--accent-color)]/20 dark:bg-[var(--accent-color)]/10 blur-[120px] rounded-full z-0 pointer-events-none" />

            <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-white/10 dark:border-white/20 bg-white/5 backdrop-blur-md text-sm font-medium mb-8 text-[var(--accent-color)]"
                    >
                        Digital Excellence from Bhubaneswar to the World
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-black/70 dark:from-white dark:to-white/70 leading-[1.1]">
                        We Build Scalable <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color)] to-purple-500">
                            Digital Products
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-[var(--text-color)]/70 max-w-2xl mx-auto mb-10 font-light">
                        Full Stack • Mobile Apps • AI/ML • UI/UX
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/services">
                            <Button size="lg" className="w-full sm:w-auto text-lg shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                View Services
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg group">
                                Contact Us
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Floating abstract decorative icons could go here */}
        </section>
    );
}
