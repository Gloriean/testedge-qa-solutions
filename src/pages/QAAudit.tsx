import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, FileText, ArrowRight, BarChart } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function QAAudit() {
    return (
        <>
            <Helmet>
                <title>Free QA Audit | TestEdge QA Solutions</title>
                <meta name="description" content="Get a comprehensive QA Audit for your software. Identify critical bugs and performance bottlenecks." />
            </Helmet>

            {/* Hero */}
            <section className="bg-navy-900 pt-16 pb-24 text-center">
                <div className="container mx-auto px-6">
                    <div className="inline-block px-4 py-1.5 bg-green-500/10 text-green-500 rounded-full text-sm font-semibold mb-6 border border-green-500/20">
                        Limited Time Offer for Startups
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Is Your Software <span className="text-green-500">Truly Ready</span> for Launch?
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Get a comprehensive QA Audit. We uncover hidden bugs, security risks, and performance bottlenecks before your users do.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            to="/contact?subject=QA%20Audit"
                            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-green-500/30 text-lg flex items-center gap-2"
                        >
                            Get Your Free Audit <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* What We Check */}
            <section className="py-20 bg-navy-800">
                <div className="container mx-auto px-6">
                    <SectionHeader title="What We Analyze" subtitle="A deep dive into your application's health." />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <AlertTriangle className="text-yellow-500" />, title: "Critical Bugs", desc: "Show-stopping issues that crash your app or block users." },
                            { icon: <BarChart className="text-blue-500" />, title: "Performance", desc: "Load times, responsiveness, and resource usage analysis." },
                            { icon: <CheckCircle className="text-green-500" />, title: "UX/UI Consistency", desc: "Visual glitches and usability friction points." },
                            { icon: <FileText className="text-purple-500" />, title: "Code Quality", desc: "High-level review of testing practices and coverage." }
                        ].map((item, i) => (
                            <Card key={i}>
                                <div className="mb-4 text-3xl">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-navy-900">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-br from-navy-800 to-navy-700 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between border border-navy-600">
                        <div className="mb-8 md:mb-0 md:w-2/3">
                            <h2 className="text-3xl font-bold text-white mb-4">Don't Let Bugs Kill Your Growth</h2>
                            <p className="text-gray-300 text-lg">
                                Our audit report gives you an actionable roadmap to fix issues and improve quality.
                            </p>
                        </div>
                        <div>
                            <Link
                                to="/contact?subject=QA%20Audit"
                                className="inline-block px-8 py-4 bg-white text-navy-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Claim Your Audit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
