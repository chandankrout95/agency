import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '../ui/Button';

const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
];

export function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled ? (theme === 'dark' ? "glass-nav-dark py-4" : "glass-nav-light py-4") : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold tracking-tighter">
                        psyducq<span className="text-[var(--accent-color)]">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-[var(--accent-color)]",
                                    location.pathname === link.path ? "text-[var(--accent-color)]" : "text-[var(--text-color)]/70"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 py-2.5 rounded-xl bg-[var(--accent-color)] text-white text-sm font-medium hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all"
                            >
                                Let's Talk
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-white/5 border border-white/10"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-[var(--text-color)] focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={cn(
                            "fixed inset-0 z-40 pt-24 px-6 pb-6 flex flex-col backdrop-blur-3xl",
                            theme === 'dark' ? "bg-[#0B0F19]/95" : "bg-white/95"
                        )}
                    >
                        <nav className="flex flex-col gap-6 mt-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={cn(
                                        "text-3xl font-bold tracking-tight",
                                        location.pathname === link.path ? "text-[var(--accent-color)]" : "text-[var(--text-color)]/80"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-auto">
                            <Link to="/contact" className="block w-full text-center py-4 rounded-xl bg-[var(--accent-color)] text-white font-medium text-lg">
                                Start a Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
