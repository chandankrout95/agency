import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import {
    MonitorSmartphone,
    Cpu,
    Palette,
    Smartphone
} from 'lucide-react';

const SERVICES = [
    {
        title: "Full Stack Web Development",
        description: "Scalable, high-performance web applications built from scratch with modern frameworks like React, Node, and Postgres.",
        icon: <MonitorSmartphone className="w-10 h-10 mb-4 text-[var(--accent-color)]" />,
        delay: 0.1
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform mobile applications that run smoothly on iOS and Android, built with React Native and Flutter.",
        icon: <Smartphone className="w-10 h-10 mb-4 text-[var(--accent-color)]" />,
        delay: 0.2
    },
    {
        title: "AI & ML Solutions",
        description: "Intelligent systems and models tailored to solve complex business logic, enhance automation, and drive insight.",
        icon: <Cpu className="w-10 h-10 mb-4 text-[var(--accent-color)]" />,
        delay: 0.3
    },
    {
        title: "UI/UX Design",
        description: "Stunning, human-centric design focusing on user retention, accessibility, and modern aesthetics like glassmorphism.",
        icon: <Palette className="w-10 h-10 mb-4 text-[var(--accent-color)]" />,
        delay: 0.4
    }
];

export function ServicesSection() {
    return (
        <section className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--text-color)]/60"
                    >
                        We transform ideas into robust, deployed realities utilizing cutting-edge tech.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                        >
                            <GlassCard className="h-full flex flex-col border border-white/5 dark:border-white/10 hover:border-[var(--accent-color)]/50 transition-colors">
                                {service.icon}
                                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-[var(--text-color)]/70 flex-grow font-light leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-8">
                                    <span className="text-sm font-medium text-[var(--accent-color)] flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                                        Learn More <span>→</span>
                                    </span>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
