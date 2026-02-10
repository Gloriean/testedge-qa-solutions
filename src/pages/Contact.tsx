import { useState, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { Mail, MapPin, Youtube, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from "lucide-react";

import Card from "../components/Card";
import { useLocation } from "react-router-dom";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "Testing Request",
        message: "",
    });

    const location = useLocation();
    // Pre-fill subject if query param exists (e.g. from QA Audit page)
    useState(() => {
        const params = new URLSearchParams(location.search);
        const subjectParam = params.get("subject");
        if (subjectParam) {
            setFormData((prev) => ({ ...prev, subject: subjectParam }));
        }
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            // Check if we are in development mode to mock the API
            if (import.meta.env.DEV) {
                console.log("Dev Mode: Mocking API call to /api/contact", formData);
                await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay
                // Randomly simulate error for testing (commented out)
                // if (Math.random() > 0.8) throw new Error("Random mock error");
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", company: "", subject: "Testing Request", message: "" });
                return;
            }

            // Real API call
            await axios.post("/api/contact", formData);
            setStatus("success");
            setFormData({ name: "", email: "", phone: "", company: "", subject: "Testing Request", message: "" });
        } catch (error: any) {
            console.error("Contact form error:", error);
            setStatus("error");
            setErrorMessage(error.response?.data?.message || "Something went wrong. Please try again later.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | TestEdge QA Solutions</title>
                <meta name="description" content="Get in touch with TestEdge QA Solutions for your software testing needs." />
            </Helmet>

            <section className="py-20 bg-navy-900 border-b border-navy-800">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Talk Quality</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Ready to start your project? Have questions about our process? We're here to help.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-navy-800/30">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Contact Info */}
                        <div className="lg:w-1/3">
                            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                <Card className="flex items-start gap-4">
                                    <div className="bg-navy-900 p-3 rounded-lg text-green-500">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Email Us</h4>
                                        <a href="mailto:hello@testedgeqasolutions.com" className="text-gray-400 hover:text-green-500 transition-colors">
                                            hello@testedgeqasolutions.com
                                        </a>
                                    </div>
                                </Card>

                                <Card className="flex items-start gap-4">
                                    <div className="bg-navy-900 p-3 rounded-lg text-green-500">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Visit Us</h4>
                                        <p className="text-gray-400">
                                            Remote-First, Global Support
                                        </p>
                                    </div>
                                </Card>

                                <div className="pt-8">
                                    <h4 className="font-bold text-white mb-4">Follow Us</h4>
                                    <div className="flex gap-4">
                                        <a href="#" className="p-3 bg-navy-700 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all"><Linkedin size={20} /></a>
                                        <a href="#" className="p-3 bg-navy-700 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all"><Twitter size={20} /></a>
                                        <a href="#" className="p-3 bg-navy-700 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all"><Youtube size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-2/3">
                            <Card className="bg-navy-900 border-navy-700 p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

                                {status === "success" ? (
                                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 text-center animate-fade-in">
                                        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                                        <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                                        <p className="text-gray-300 mb-6">Thank you for reaching out. We will get back to you within 24 hours.</p>
                                        <button onClick={() => setStatus("idle")} className="text-green-500 hover:text-green-400 font-semibold">Send another message</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors placeholder-gray-500"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors placeholder-gray-500"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors placeholder-gray-500"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors placeholder-gray-500"
                                                    placeholder="TechStart Inc."
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                            <div className="relative">
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors appearance-none"
                                                >
                                                    <option value="Testing Request">Testing Request</option>
                                                    <option value="QA Consultation">QA Consultation</option>
                                                    <option value="Automation Setup">Automation Setup</option>
                                                    <option value="QA Audit">QA Audit</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-gray-400" />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors placeholder-gray-500"
                                                placeholder="Tell us about your project requirements..."
                                            />
                                        </div>

                                        {status === "error" && (
                                            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">
                                                <AlertCircle size={18} />
                                                {errorMessage}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {status === "loading" ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message <Send size={20} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
