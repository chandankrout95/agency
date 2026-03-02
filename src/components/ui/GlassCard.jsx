import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function GlassCard({ children, className, hoverEffect = true, ...props }) {
    const { theme } = useTheme();

    return (
        <motion.div
            whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "rounded-2xl relative overflow-hidden transition-all duration-300",
                theme === 'dark' ? 'glass-card-dark' : 'glass-card-light',
                hoverEffect && "hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] dark:hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]",
                className
            )}
            {...props}
        >
            <div className="relative z-10 w-full h-full p-6">
                {children}
            </div>
        </motion.div>
    );
}
