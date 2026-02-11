import { useState, type FormEvent, useEffect } from "react";
import { Helmet } from "react-helmet-async";
// Removed Youtube and Twitter from imports to stop the "Unused variable" warnings
import { Mail, MapPin, Linkedin, Send, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";
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
        subject: "",
        message: "",
    });

    const location = useLocation();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const subjectParam = params.get("subject");
        if (subjectParam) {
            setFormData((prev) => ({ ...prev, subject: subjectParam }));
        }
    }, [location]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!formData.subject || formData.subject === "") {
            setStatus("error");
            setErrorMessage("Please select a service from the dropdown.");
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        const submissionData = new FormData();
        submissionData.append("access_key", "cc118b47-519c-48f0-80ed-5d0cd494c1e7");
        submissionData.append("name", formData.name);
        submissionData.append("email", formData.email);
        submissionData.append("phone", formData.phone);
        submissionData.append("company", formData.company);
        submissionData.append("subject", formData.subject);
        submissionData.append("message", formData.message);
        submissionData.append("from_name", "TestEdge Website Inquiry");
        submissionData.append("botcheck", "");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: submissionData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
            } else {
                throw new Error(data.message || "Submission failed. Please check if your email is verified.");
            }
        } catch (error: any) {
            console.error("Contact form error:", error);
            setStatus("error");
            setErrorMessage(error.message || "Something went wrong. Please try again later.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | TestEdge QA Solutions</title>
                <meta name="description" content="Get in touch with TestEdge QA Solutions for your software testing needs." />
            </Helmet>

            <section className="py-20 bg-navy-900 border-b border-navy-800">
                {/* Fixed container padding for mobile edge alignment */}
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Talk Quality</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Ready to start your project? Have questions about our process? We're here to help.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-navy-800/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* Contact Info */}
                        <div className="lg:w-1/3">
                            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                <Card className="flex items-start gap-4 p-6 bg-navy-900 border-navy-700">
                                    <div className="bg-navy-800 p-3 rounded-lg text-green-500">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-bold text-white mb-1">Email Us</h4>
                                        <a href="mailto:testedgeqa@gmail.com" className="text-gray-400 hover:text-green-500 transition-colors break-all">
                                            testedgeqa@gmail.com
                                        </a>
                                    </div>
                                </Card>

                                <Card className="flex items-start gap-4 p-6 bg-navy-900 border-navy-700">
                                    <div className="bg-navy-800 p-3 rounded-lg text-green-500">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-bold text-white mb-1">Visit Us</h4>
                                        <p className="text-gray-400">Abuja, Nigeria (Remote-friendly)</p>
                                    </div>
                                </Card>

                                <div className="pt-8">
                                    <h4 className="font-bold text-white mb-4">Follow Us</h4>
                                    <div className="flex gap-4">
                                        <a href="#" className="p-3 bg-navy-700 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all">
                                            <Linkedin size={20} />
                                        </a>
                                        {/* Twitter and Youtube commented out as requested */}
                                        {/* <a href="#" className="p-3 bg-navy-700 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all"><Twitter size={20} /></a>
                                        <a href="#" className="p-3 bg-navy-700 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all"><Youtube size={20} /></a> 
                                        */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-2/3">
                            <Card className="bg-navy-900 border-navy-700 p-6 md:p-10">
                                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

                                {status === "success" ? (
                                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 text-center">
                                        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                                        <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                                        <p className="text-gray-300 mb-6">Thank you for reaching out. We will get back to you within 24 hours.</p>
                                        <button onClick={() => setStatus("idle")} className="text-green-500 hover:text-green-400 font-semibold underline">Send another message</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="w-full">
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                                <input name="name" required value={formData.name} onChange={handleChange} className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors" placeholder="John Doe" />
                                            </div>
                                            <div className="w-full">
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                                <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors" placeholder="john@company.com" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="w-full">
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                                <input name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors" placeholder="+234..." />
                                            </div>
                                            <div className="w-full">
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                                                <input name="company" value={formData.company} onChange={handleChange} className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors" placeholder="TechStart Inc." />
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label className="block text-sm font-medium text-gray-400 mb-2">Service Required</label>
                                            <div className="relative">
                                                <select
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                                                >
                                                    <option value="" disabled>Select a Service</option>
                                                    <option value="Manual Testing">Manual Testing Request</option>
                                                    <option value="Automation">Test Automation Setup</option>
                                                    <option value="QA Audit">QA Audit & Strategy</option>
                                                    <option value="Staffing">Dedicated QA Staffing</option>
                                                    <option value="Security">Security & Penetration Testing</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                            <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors" placeholder="Tell us about your requirements..." />
                                        </div>

                                        {status === "error" && (
                                            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">
                                                <AlertCircle size={18} /> {errorMessage}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                        >
                                            {status === "loading" ? "Sending..." : "Send Message"} <Send size={20} />
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