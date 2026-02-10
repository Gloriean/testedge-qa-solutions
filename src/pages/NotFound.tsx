import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | TestEdge QA SOlutions</title>
            </Helmet>
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-9xl font-extrabold text-navy-700">404</h1>
                <h2 className="text-3xl font-bold text-white mt-4 mb-6">Page Not Found</h2>
                <p className="text-gray-400 max-w-md mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-green-500/20"
                >
                    Go Back Home
                </Link>
            </div>
        </>
    );
}
