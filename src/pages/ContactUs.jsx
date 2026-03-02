import { motion } from 'framer-motion';
import { ContactSection } from '../sections/ContactSection';

export function ContactUs() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen flex flex-col"
        >
            <div className="text-center py-16 px-6 relative z-10 hidden md:block">
                <h1 className="text-5xl font-bold tracking-tight mb-6">Get in <span className="text-[var(--accent-color)]">Touch</span></h1>
                <p className="text-lg text-[var(--text-color)]/60 max-w-2xl mx-auto">
                    Whether you have a specific project in mind or just want to explore possibilities, we're ready to listen.
                </p>
            </div>

            <div className="flex-grow flex items-center">
                <ContactSection />
            </div>
        </motion.div>
    );
}
