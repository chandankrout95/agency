import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';

export function ContactSection() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-24 relative z-10 w-full overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's Build Something Amazing.</h2>
                        <p className="text-[var(--text-color)]/70 text-lg mb-8 font-light">
                            Ready to take your digital presence to the next level? Drop us a line and let's discuss your next big project.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-[var(--text-color)]/80">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">📍</div>
                                <span>Bhubaneswar (BBSR), India</span>
                            </div>
                            <div className="flex items-center gap-4 text-[var(--text-color)]/80">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">✉️</div>
                                <span>hello@agency.com</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 w-full"
                    >
                        <GlassCard hoverEffect={false} className="p-8">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center h-full text-center py-12"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6 text-2xl">✓</div>
                                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-[var(--text-color)]/60">We'll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-[var(--text-color)]/70 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full bg-black/10 dark:bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all text-[var(--text-color)]"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[var(--text-color)]/70 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full bg-black/10 dark:bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all text-[var(--text-color)]"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-[var(--text-color)]/70 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full bg-black/10 dark:bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] transition-all text-[var(--text-color)] resize-none"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>
                                    <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            )}
                        </GlassCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
