import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";
import Logo from "../components/Logo";

export default function Footer() {
    return (
        <footer className="bg-navy-900 border-t border-navy-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="mb-6 block hover:opacity-90 transition-opacity">
                            <Logo />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Ensuring Excellence, One Test at a Time. We provide comprehensive QA solutions for businesses worldwide.
                        </p>
                        <div className="flex space-x-4">
                            {/* LinkedIn - Updated Link */}
                            <a
                                href="https://www.linkedin.com/company/testedge-qa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>

                           
                            {/* Twitter/X
                            <a
                                href="https://twitter.com/your-handle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition-colors"
                            >
                                <Twitter size={20} />
                            </a>

                            
                            <a
                                href="https://youtube.com/your-channel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                                <Youtube size={20} />
                            </a>
                             */}
                            
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-green-400 text-sm transition-colors">About Us</Link></li>
                            <li><Link to="/qa-audit" className="text-gray-400 hover:text-green-400 text-sm transition-colors">QA Audit</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><span className="text-gray-400 text-sm">Manual QA & Exploratory Testing</span></li>
                            <li><span className="text-gray-400 text-sm">Scalable Test Automation</span></li>
                            <li><span className="text-gray-400 text-sm">Cross-Browser Web Testing</span></li>
                            <li><span className="text-gray-400 text-sm">iOS & Android Performance QA</span></li>
                            <li><span className="text-gray-400 text-sm">API Testing & Security Validation</span></li>
                            <li><span className="text-gray-400 text-sm">Usability & Accessibility Testing</span></li>
                            <li><span className="text-gray-400 text-sm">Regression Testing</span></li>
                            <li><span className="text-gray-400 text-sm">QA Consulting & Strategy</span></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-green-500 mt-0.5" />
                                <a href="testedgeqa@gmail.com" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                                    testedgeqa@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-green-500 mt-0.5" />
                                <span className="text-gray-400 text-sm">
                                    Abuja, Nigeria (Remote-friendly)
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center bg-navy-900">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} TestEdge QA Solutions. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
