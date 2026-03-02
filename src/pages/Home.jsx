import { HeroSection } from '../sections/HeroSection';
import { AnimatedMarquee } from '../components/ui/AnimatedMarquee';
import { ServicesSection } from '../sections/ServicesSection';
import { ContactSection } from '../sections/ContactSection';
import { motion } from 'framer-motion';

export function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col"
        >
            <HeroSection />

            {/* Decorative divider */}
            <div className="w-full flex justify-center py-10 opacity-50">
                <div className="w-1 h-20 bg-gradient-to-b from-[var(--accent-color)] to-transparent rounded-full max-w-[2px]" />
            </div>

            <AnimatedMarquee />
            <ServicesSection />
            <ContactSection />
        </motion.div>
    );
}
