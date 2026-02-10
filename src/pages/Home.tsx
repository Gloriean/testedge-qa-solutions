import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    Smartphone,
    Globe,
    Terminal,
    ShieldCheck,
    Zap,
    Server,
    MessageSquare,
    CheckCircle,
    ArrowRight,
    Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

// --- TYPESCRIPT INTERFACES (Fixes the 16 "any[]" errors and JSX namespace) ---
interface Service {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

interface Industry {
    name: string;
    risk: string;
    solution: string;
}

interface Testimonial {
    name: string;
    role: string;
    text: string;
}

export default function Home() {
    const services: Service[] = [
        { icon: <Terminal size={32} />, title: "Manual QA & Exploratory Testing", desc: "Detect complex bugs and edge cases that automation misses. Our manual QA experts simulate real-user journeys." },
        { icon: <CheckCircle size={32} />, title: "Scalable Test Automation", desc: "Speed up your release cycle with reliable test automation. We build custom suites using Selenium and Appium." },
        { icon: <Globe size={32} />, title: "Cross-Browser Web Testing", desc: "From Chrome to Safari, ensure your web app delivers a consistent experience across every screen size." },
        { icon: <Smartphone size={32} />, title: "iOS & Android Performance QA", desc: "Ensure your mobile app works perfectly on all devices. We test for crashes and UI consistency on real hardware." },
        { icon: <Server size={32} />, title: "API Testing & Security Validation", desc: "Ensure your backend is robust. We validate API endpoints for performance, security, and seamless integration." },
        { icon: <Zap size={32} />, title: "Usability & Accessibility Testing", desc: "Make your product intuitive and inclusive for everyone. We provide expert feedback to meet accessibility standards." },
        { icon: <ShieldCheck size={32} />, title: "Regression Testing", desc: "Protect your product's reputation. Our regression testing ensures new updates don't break existing features." },
        { icon: <MessageSquare size={32} />, title: "QA Consulting & Strategy", desc: "Streamline your QA process with expert consulting. We help you choose the right tools to reduce time-to-market." },
    ];

    const tools: string[] = ["Selenium", "Cypress", "Appium", "Playwright", "Postman", "JMeter", "Jira", "TestRail"];

    const industries: Industry[] = [
        { name: "Fintech & Digital Banking", risk: "Security breaches & data leaks", solution: "Rigorous API testing for financial compliance." },
        { name: "Healthcare & MedTech", risk: "HIPAA issues & patient data friction", solution: "Stability testing for mission-critical software." },
        { name: "E-Commerce & Retail", risk: "Cart abandonment & high-load crashes", solution: "Performance testing for peak traffic surges." },
        { name: "Logistics & Supply Chain", risk: "Tracking errors & integration failures", solution: "End-to-end API & real-time data validation." },
        { name: "SaaS & Cloud Platforms", risk: "Deployment regressions & downtime", solution: "CI/CD integrated automation suites." },
        { name: "EdTech Platforms", risk: "High-concurrency crashes during exams", solution: "Stress testing & accessibility compliance." },
    ];

    const stats = [
        { label: "Bug Detection", value: "99%" },
        { label: "Faster Release", value: "2x" },
        { label: "Support", value: "24/7" },
        { label: "Projects", value: "50+" },
    ];

    const testimonials: Testimonial[] = [
        { name: "David Chen", role: "VP of Engineering, NeoBank", text: "TestEdge QA Solutions transformed our release process. Their fintech-specific security audits helped us launch 3 weeks ahead of schedule." },
        { name: "Sarah Miller", role: "Product Manager, CareSync", text: "The cross-browser validation was flawless. Our patient portal now works perfectly on older tablets used in clinics." },
    ];

    return (
        <div className="bg-[#001133] min-h-screen text-white">
            <Helmet>
                <title>Home | TestEdge QA Solutions</title>
                <meta name="description" content="Reliable software testing services for high-quality products." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('/src/assets/hero-bg.jpg')` }}>
                <div className="absolute inset-0 bg-[#001133]/70 z-0"></div>
                <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
                    <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">Ensuring Excellence, One Test at a Time.</h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">Precision manual and automated testing solutions to help you ship bug-free software faster.</p>

                    {/* Fixed clickable buttons with z-index and pointer-events */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-30">
                        <a
                            href="https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_ID"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#4CAF50] text-[#001133] px-8 py-3 rounded-full font-bold hover:bg-green-400 transition flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
                        >
                            Book a Consultation <ArrowRight size={20} />
                        </a>
                        <Link
                            to="/contact"
                            className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition text-center cursor-pointer active:scale-95"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-navy-900">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Our QA Services" subtitle="Comprehensive testing solutions tailored to your needs." />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {services.map((service, index) => (
                            <Card key={index} className="flex flex-col items-start h-full p-6">
                                <div className="p-3 bg-navy-700/50 rounded-lg text-green-500 mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm flex-grow">{service.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Across Industries Section */}
            <section className="py-24 bg-navy-900 border-t border-navy-800">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Expertise Across Industries" subtitle="Specialized QA for complex sectors." />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                className="group p-8 bg-navy-800/40 border border-navy-700/50 rounded-2xl hover:border-green-500/50 transition-all flex flex-col h-full"
                            >
                                <h4 className="text-green-500 font-bold mb-4 text-lg tracking-tight">{industry.name}</h4>
                                <div className="space-y-4 flex-grow">
                                    <div className="space-y-1">
                                        <span className="text-red-400 font-bold uppercase text-[10px] tracking-widest block">The Risk</span>
                                        <p className="text-white text-sm font-medium">{industry.risk}</p>
                                    </div>
                                    <div className="pt-3 border-t border-navy-700/50 space-y-1">
                                        <span className="text-green-400 font-bold uppercase text-[10px] tracking-widest block">The Solution</span>
                                        <p className="text-gray-400 text-sm leading-relaxed">{industry.solution}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION (Restored after Industries) */}
            <section className="py-24 bg-navy-900/50 border-t border-navy-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl font-bold">Why Choose TestEdge QA Solutions</h2>
                            <p className="text-gray-400 text-lg">We improve your software quality with expert engineers and cutting-edge methodologies.</p>
                            <ul className="space-y-4">
                                {[
                                    "Scalable testing for startups and enterprises",
                                    "Detailed reporting and actionable insights",
                                    "Expertise in latest frameworks",
                                    "Seamless CI/CD integration"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="text-green-500" size={20} />
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
                            {stats.map((stat, i) => (
                                <div key={i} className="p-8 bg-navy-800/40 border border-white/5 rounded-2xl text-center">
                                    <div className="text-4xl font-bold text-green-500 mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-navy-900 border-t border-navy-800">
                <div className="container mx-auto px-6">
                    <SectionHeader title="What Our Clients Say" subtitle="Trusted by engineering teams worldwide." />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {testimonials.map((t, i) => (
                            <div key={i} className="p-8 bg-navy-800/60 rounded-3xl border border-navy-700 relative overflow-hidden">
                                <Quote className="absolute -top-2 -right-2 text-navy-700/30 w-24 h-24" />
                                <p className="text-gray-300 italic text-lg mb-6 relative z-10">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-navy-900">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold">{t.name}</h5>
                                        <p className="text-green-500 text-xs uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="py-24 bg-navy-900 border-t border-navy-800">
                <div className="container mx-auto px-6 text-center">
                    <SectionHeader title="Tools We Master" subtitle="Industry-standard tools for maximum efficiency." />
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {tools.map((tool, index) => (
                            <span key={index} className="px-6 py-2 bg-navy-800 border border-navy-700 rounded-full text-gray-300 font-medium">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}