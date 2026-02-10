import { Helmet } from "react-helmet-async";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import { Target, Eye, Award, Users, Search, Play, FileText, Bug, RefreshCw, CheckSquare } from "lucide-react";

export default function About() {
    const values = [
        { icon: <Award className="text-green-500" size={40} />, title: "Quality First", desc: "We never compromise on the quality of our testing. Perfection is our goal." },
        { icon: <Users className="text-blue-500" size={40} />, title: "Client Centric", desc: "Your success is our success. We align our testing strategies with your business goals." },
        { icon: <Eye className="text-purple-500" size={40} />, title: "Transparency", desc: "Clear, detailed reporting with no hidden surprises. You know exactly what we find." },
        { icon: <Target className="text-red-500" size={40} />, title: "Precision", desc: "We focus on the details that matter, ensuring every edge case is covered." },
    ];

    const process = [
        { icon: <Search size={24} />, title: "Requirement Analysis" },
        { icon: <FileText size={24} />, title: "Test Planning" },
        { icon: <Play size={24} />, title: "Test Execution" },
        { icon: <Bug size={24} />, title: "Bug Reporting" },
        { icon: <RefreshCw size={24} />, title: "Regression Testing" },
        { icon: <CheckSquare size={24} />, title: "Final QA Sign-off" },
    ];

    return (
        <>
            <Helmet>
                <title>About Us | TestEdge QA Solutions</title>
                <meta name="description" content="Learn about TestEdge QA Solutions, our mission, values, and comprehensive testing process." />
            </Helmet>

            {/* Hero */}
            <section className="bg-navy-900 py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5" />
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About TestEdge QA Solutions</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        TestEdge QA Solutions is a software quality assurance company that helps businesses build reliable, user-friendly, and high-performing applications. We focus on uncovering defects before they reach production, ensuring that every software release delivers a seamless experience for users.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-navy-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Target className="text-green-500" /> Our Mission
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                To empower businesses to deliver flawless digital experiences by providing top-tier, reliable, and scalable quality assurance solutions. We aim to be the last line of defense before your product hits the market.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Eye className="text-blue-500" /> Our Vision
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                To be the global leader in software testing, recognized for our innovation, integrity, and unwavering commitment to quality. We envision a world where software simply works.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-navy-900">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Core Values" subtitle="The principles that guide our work every day." />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <Card key={i} className="text-center">
                                <div className="flex justify-center mb-6">{v.icon}</div>
                                <h4 className="text-xl font-bold text-white mb-3">{v.title}</h4>
                                <p className="text-gray-400">{v.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-navy-800/50">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Our Testing Approach" subtitle="A systematic process to ensure nothing falls through the cracks." />
                    <div className="relative">
                        {/* Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-navy-700 -translate-y-1/2 z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
                            {process.map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-navy-800 border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 mb-4 shadow-lg shadow-green-500/20 bg-navy-900 transition-transform hover:scale-110">
                                        {step.icon}
                                    </div>
                                    <h5 className="text-white font-semibold text-sm">{step.title}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
