import { useState, type FormEvent, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Linkedin, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    countryCode: string; // Added countryCode to state
    company: string;
    subject: string;
    message: string;
}

// Common country codes - you can expand this list as needed
const COUNTRY_CODES = [
    { code: "+234", label: "NG" },
    { code: "+1", label: "US/CA" },
    { code: "+44", label: "UK" },
    { code: "+27", label: "ZA" },
    { code: "+91", label: "IN" },
    { code: "+254", label: "KE" },
    { code: "+233", label: "GH" },
];

export default function Contact() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        countryCode: "+234", // Default to Nigeria
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
        // Combine code and number for the final submission
        submissionData.append("phone", `${formData.countryCode} ${formData.phone}`);
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
                setFormData({ name: "", email: "", phone: "", countryCode: "+234", company: "", subject: "", message: "" });
            } else {
                throw new Error(data.message || "Submission failed.");
            }
        } catch (error: any) {
            console.error("Contact form error:", error);
            setStatus("error");
            setErrorMessage(error.message || "Something went wrong.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | TestEdge QA Solutions</title>
                <meta name="description" content="Get in touch with TestEdge QA Solutions for your software testing needs." />
            </Helmet>

            <section className="py-20 bg-navy-900 border-b border-navy-800">
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
                        {/* Contact Info Sidebar */}
                        <div className="lg:w-1/3">
                            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                <Card className="flex items-start gap-4 p-6 bg-navy-900 border-navy-700">
                                    <div className="bg-navy-800 p-3 rounded-lg text-[#4ADE80] flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex flex-col overflow-hidden">
                                        <h4 className="font-bold text-white mb-1">Email Us</h4>
                                        <a href="mailto:testedgeqa@gmail.com" className="text-gray-400 hover:text-[#4ADE80] transition-colors break-all">
                                            testedgeqa@gmail.com
                                        </a>
                                    </div>
                                </Card>

                                <Card className="flex items-start gap-4 p-6 bg-navy-900 border-navy-700">
                                    <div className="bg-navy-800 p-3 rounded-lg text-[#4ADE80] flex-shrink-0">
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
                                        <a href="#" className="p-3 bg-navy-700 rounded-full text-gray-400 hover:text-[#001133] hover:bg-[#4ADE80] transition-all">
                                            <Linkedin size={20} />
                                        </a>
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
                                        <CheckCircle className="text-[#4ADE80] w-16 h-16 mx-auto mb-4" />
                                        <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                                        <p className="text-gray-300 mb-6">Thank you for reaching out. We will get back to you within 24 hours.</p>
                                        <button onClick={() => setStatus("idle")} className="text-[#4ADE80] hover:text-green-300 font-semibold underline">Send another message</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="w-full">
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                                <input name="name" required value={formData.name} onChange={handleChange} className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:border-[#4ADE80] focus:outline-none transition-colors" placeholder="John Doe" />
                                            </div>
                                            <div className="w-full">
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                                <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:border-[#4ADE80] focus:outline-none transition-colors" placeholder="john@company.com" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Combined Phone Input with Selector */}
                                            <div className="w-full">
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                                <div className="flex gap-0 group">
                                                    <div className="relative">
                                                        <select 
                                                            name="countryCode" 
                                                            value={formData.countryCode} 
                                                            onChange={handleChange}
                                                            className="h-full bg-navy-800 border border-navy-600 text-white rounded-l-lg pl-3 pr-8 py-3 focus:border-[#4ADE80] focus:outline-none transition-colors appearance-none cursor-pointer border-r-0"
                                                        >
                                                            {COUNTRY_CODES.map(item => (
                                                                <option key={item.code} value={item.code}>{item.label} {item.code}</option>
                                                            ))}
                                                        </select>
                                                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                                                    </div>
                                                    <input 
                                                        name="phone" 
                                                        value={formData.phone} 
                                                        onChange={handleChange} 
                                                        className="w-full bg-navy-800 border border-navy-600 text-white rounded-r-lg px-4 py-3 focus:border-[#4ADE80] focus:outline-none transition-colors" 
                                                        placeholder="801 234 5678" 
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                                                <input name="company" value={formData.company} onChange={handleChange} className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:border-[#4ADE80] focus:outline-none transition-colors" placeholder="TechStart Inc." />
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
                                                    className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:border-[#4ADE80] focus:outline-none transition-colors appearance-none cursor-pointer"
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
                                            <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full bg-navy-800 border border-navy-600 text-white rounded-lg px-4 py-3 focus:border-[#4ADE80] focus:outline-none transition-colors" placeholder="Tell us about your requirements..." />
                                        </div>

                                        {status === "error" && (
                                            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">
                                                <AlertCircle size={18} /> {errorMessage}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full bg-[#4ADE80] hover:bg-green-300 text-[#001133] font-bold py-3 rounded-lg transition-all flex items-center justify-center disabled:opacity-50"
                                        >
                                            {status === "loading" ? "Sending..." : "Send Message"}
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