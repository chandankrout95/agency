import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Cpu, Palette, Smartphone, ArrowLeft, CheckCircle } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

const SERVICES_DATA = {
    "web-development": {
        title: "Full Stack Web Development",
        description: "Scalable, high-performance web applications built from scratch with modern frameworks like React, Node, and Postgres.",
        icon: MonitorSmartphone,
        content: "We deliver full-stack web applications tailored to your specific business requirements. Our engineering team specializes in creating robust, scalable, and secure platforms utilizing cutting-edge technologies.",
        features: ["Custom React/Next.js Frontends", "Scalable Node.js/Express Backends", "Database Design & Optimization", "API Development & Integration", "Cloud Deployment & DevOps"]
    },
    "mobile-development": {
        title: "Mobile App Development",
        description: "Cross-platform mobile applications that run smoothly on iOS and Android, built with React Native and Flutter.",
        icon: Smartphone,
        content: "Bring your vision to the fingertips of millions. We craft native-feeling, high-performance mobile applications that provide seamless user experiences across all devices and platforms.",
        features: ["React Native & Flutter Solutions", "iOS and Android Optimization", "Native Device Feature Integration", "Offline-first Architectures", "App Store Deployment"]
    },
    "ai-ml": {
        title: "AI & ML Solutions",
        description: "Intelligent systems and models tailored to solve complex business logic, enhance automation, and drive insight.",
        icon: Cpu,
        content: "Leverage the power of Artificial Intelligence to transform your business. From predictive analytics to large language models, we integrate smart capabilities that give you a competitive edge.",
        features: ["Custom Machine Learning Models", "Generative AI Integration", "Predictive Analytics", "Natural Language Processing", "Computer Vision Solutions"]
    },
    "ui-ux": {
        title: "UI/UX Design",
        description: "Stunning, human-centric design focusing on user retention, accessibility, and modern aesthetics like glassmorphism.",
        icon: Palette,
        content: "Design is more than just aesthetics; it's about solving problems and creating intuitive experiences. We design interfaces that are not only visually stunning but also highly functional and user-friendly.",
        features: ["User Research & Persona Development", "Wireframing & Prototyping", "Design System Creation", "Interaction Design", "Usability Testing"]
    }
};

export function ServiceDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = SERVICES_DATA[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="pt-32 pb-24 min-h-screen flex items-center justify-center flex-col gap-6">
                <h1 className="text-4xl font-bold">Service Not Found</h1>
                <p className="text-[var(--text-color)]/60">The service you are looking for does not exist or has been removed.</p>
                <button 
                    onClick={() => navigate('/services')} 
                    className="px-6 py-3 bg-[var(--accent-color)] text-white rounded-full font-medium hover:bg-[var(--accent-color)]/90 transition-colors flex items-center gap-2"
                >
                    <ArrowLeft size={18} /> Back to Services
                </button>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24 min-h-screen flex flex-col items-center"
        >
            <div className="container mx-auto px-6 max-w-5xl">
                <button 
                    onClick={() => navigate(-1)} 
                    className="mb-12 text-[var(--text-color)]/60 hover:text-[var(--accent-color)] transition-colors flex items-center gap-2 font-medium"
                >
                    <ArrowLeft size={18} /> Back
                </button>

                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-16"
                >
                    <div className="p-8 rounded-3xl bg-[var(--accent-color)]/10 text-[var(--accent-color)] border border-[var(--accent-color)]/20 drop-shadow-[0_0_15px_rgba(var(--accent-color-rgb),0.2)]">
                        <Icon size={72} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{service.title}</h1>
                        <p className="text-xl md:text-2xl text-[var(--text-color)]/70 max-w-2xl">{service.description}</p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 space-y-8 text-lg text-[var(--text-color)]/80 leading-relaxed font-light"
                    >
                        <div>
                            <h2 className="text-3xl font-semibold text-[var(--text-color)] mb-6">Overview</h2>
                            <p className="mb-4">{service.content}</p>
                            <p>
                                We follow a comprehensive approach to ensure that our deliverables not only meet but exceed your expectations. 
                                Our agile methodology allows for continuous feedback and rapid iterations, ensuring the final product perfectly aligns with your goals.
                            </p>
                        </div>
                        
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 mt-8">
                            <h3 className="text-2xl font-semibold text-[var(--text-color)] mb-4">Why choose us?</h3>
                            <p className="mb-0">
                                With a focus on modern aesthetics, scalable architectures, and performant code, we bridge the gap between imagination and reality. We treat your product as our own, guaranteeing an elite standard of engineering and design.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassCard className="p-8 border border-white/10 dark:bg-black/40">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <span className="w-2 h-6 bg-[var(--accent-color)] rounded-full"></span>
                                Key Features
                            </h3>
                            <ul className="space-y-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="text-[var(--accent-color)] shrink-0 mt-0.5" size={20} />
                                        <span className="text-[var(--text-color)]/90 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <button 
                                    onClick={() => navigate('/contact')}
                                    className="w-full py-4 px-6 rounded-full bg-[var(--accent-color)] text-white font-semibold hover:bg-[var(--accent-color)]/90 hover:scale-[1.02] transform transition-all shadow-lg hover:shadow-[var(--accent-color)]/25"
                                >
                                    Discuss Your Project
                                </button>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
