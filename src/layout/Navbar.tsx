import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Logo from "../components/Logo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close mobile menu when user changes page
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "QA Audit", path: "/qa-audit" },
        { name: "Contact Us", path: "/contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav
            className={clsx(
                "fixed w-full z-50 transition-all duration-300",
                scrolled || isOpen ? "bg-[#001133] shadow-xl py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Link */}
                <Link to="/" className="hover:opacity-90 transition-opacity z-50">
                    <Logo />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                "text-sm font-medium transition-colors hover:text-green-400 relative",
                                isActive(link.path) ? "text-green-500" : "text-gray-300"
                            )}
                        >
                            {link.name}
                            {isActive(link.path) && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500"
                                />
                            )}
                        </Link>
                    ))}

                    {/* Consistent Button Styling with No-Wrap Fix */}
                    <a
                        href="https://calendar.app.google/ns4EYXoZnqLwfFqRA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#4CAF50] text-[#001133] px-6 py-3 rounded-full font-bold hover:bg-green-400 transition cursor-pointer shadow-lg shadow-green-500/20 whitespace-nowrap flex-nowrap"
                    >
                        <span>Book Consultation</span>
                        <ArrowRight size={18} className="flex-shrink-0" />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed inset-0 bg-[#001133] md:hidden flex flex-col items-center justify-center z-40"
                    >
                        <div className="flex flex-col items-center space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={clsx(
                                        "text-3xl font-bold transition-colors",
                                        isActive(link.path) ? "text-green-500" : "text-white"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <a
                                href="https://calendar.app.google/ns4EYXoZnqLwfFqRA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#4CAF50] text-[#001133] px-10 py-4 rounded-full font-bold hover:bg-green-400 transition cursor-pointer whitespace-nowrap flex-nowrap"
                            >
                                <span>Book Consultation</span>
                                <ArrowRight size={20} className="flex-shrink-0" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}