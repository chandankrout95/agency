import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: "Sarah Jenkins",
        role: "Founder, TechFlow",
        content: "The team delivered an exceptional product. Their attention to detail and modern design aesthetic completely transformed our user experience.",
        avatarText: "SJ",
        bgGradient: "from-blue-500 to-indigo-600"
    },
    {
        name: "Rahul Verma",
        role: "CEO, InnovateX",
        content: "They built our full-stack web application from scratch. The performance and scalability are unmatched. Highly recommended!",
        avatarText: "RV",
        bgGradient: "from-emerald-500 to-teal-600"
    },
    {
        name: "Emily Chen",
        role: "Product Manager",
        content: "Working with them was a breeze. They understood our AI integration requirements perfectly and delivered ahead of schedule.",
        avatarText: "EC",
        bgGradient: "from-purple-500 to-pink-600"
    }
];

export function TestimonialSection() {
    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Client <span className="text-[var(--accent-color)]">Love</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--text-color)]/60"
                    >
                        Hear what startup founders and industry leaders have to say about our work.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <GlassCard className="h-full flex flex-col p-8 border border-white/5 dark:border-white/10">
                                <Quote className="w-10 h-10 text-[var(--accent-color)]/40 mb-6" />
                                <p className="text-[var(--text-color)]/80 italic font-light leading-relaxed flex-grow mb-8">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.bgGradient} flex items-center justify-center text-white font-bold shadow-lg`}>
                                        {testimonial.avatarText}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-base">{testimonial.name}</h4>
                                        <p className="text-sm text-[var(--text-color)]/60">{testimonial.role}</p>
                                        <div className="flex text-yellow-500 mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={12} fill="currentColor" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
