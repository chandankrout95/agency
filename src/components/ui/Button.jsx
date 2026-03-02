import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-[var(--accent-color)] text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-105",
        secondary: "bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 text-[var(--text-color)] hover:bg-white/20 dark:hover:bg-white/10 hover:scale-105",
        outline: "border-2 border-[var(--accent-color)] text-[var(--text-color)] hover:bg-[var(--accent-color)] hover:text-white hover:scale-105",
        ghost: "text-[var(--text-color)] hover:bg-white/10 dark:hover:bg-white/5"
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-8 text-base",
        lg: "h-14 px-10 text-lg"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
}
