import { Github, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="w-full py-12 px-6 border-t border-white/10 mt-auto relative z-10 bg-[var(--bg-color)]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="md:col-span-2">
                    <Link to="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block">
                        psyducq<span className="text-[var(--accent-color)]">.</span>
                    </Link>
                    <p className="text-[var(--text-color)]/60 max-w-sm">
                        Building scalable digital products with stunning visual design. Full Stack, Mobile, and AI/ML development based in Bhubaneswar, India.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[var(--accent-color)] hover:text-white transition-all">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[var(--accent-color)] hover:text-white transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[var(--accent-color)] hover:text-white transition-all">
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-lg">Services</h4>
                    <ul className="space-y-3 text-[var(--text-color)]/70">
                        <li><Link to="/services" className="hover:text-[var(--accent-color)] transition-colors">Web Development</Link></li>
                        <li><Link to="/services" className="hover:text-[var(--accent-color)] transition-colors">Mobile Apps</Link></li>
                        <li><Link to="/services" className="hover:text-[var(--accent-color)] transition-colors">AI/ML Solutions</Link></li>
                        <li><Link to="/services" className="hover:text-[var(--accent-color)] transition-colors">UI/UX Design</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
                    <ul className="space-y-3 text-[var(--text-color)]/70">
                        <li className="flex items-center gap-3">
                            <span className="text-xl">📍</span>
                            <span>Bhubaneswar (BBSR), India</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} />
                            <a href="mailto:psyducq.co@gmail.com" className="hover:text-[var(--accent-color)] transition-colors">psyducq.co@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} />
                            <a href="tel:8797125563" className="hover:text-[var(--accent-color)] transition-colors">8797125563</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-[var(--text-color)]/50">
                <p>© {new Date().getFullYear()} psyducq. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="#" className="hover:text-[var(--text-color)] transition-colors">Privacy Policy</Link>
                    <Link to="#" className="hover:text-[var(--text-color)] transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
