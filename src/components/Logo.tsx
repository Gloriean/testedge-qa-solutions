
import clsx from "clsx";

interface LogoProps {
    className?: string;
    variant?: "default" | "light"; // default has white text, light for dark backgrounds (same here)
}

export default function Logo({ className }: LogoProps) {
    return (
        <div className={clsx("flex items-center gap-3", className)}>
            {/* SVG Icon */}
            <svg
                width="50"
                height="50"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
            >
                {/* Shield Background - Blue shades */}
                <path d="M20 20 L80 20 L80 45 C80 75 50 90 50 90 C50 90 20 75 20 45 Z" fill="#002266" />
                <path d="M20 20 L50 20 L50 90 C50 90 20 75 20 45 Z" fill="#1e3a8a" opacity="0.8" />

                {/* Green Checkmark */}
                <path
                    d="M30 50 L45 65 L85 25"
                    stroke="#4CAF50"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            {/* Text Container */}
            <div className="flex flex-col justify-center">
                <div className="flex items-baseline gap-1 leading-none">
                    <span className="text-2xl font-bold text-white tracking-tight">TestEdge</span>
                    <span className="text-2xl font-bold text-green-500 tracking-tight">QA</span>
                    <span className="text-lg font-medium text-green-600 ml-1">Solutions</span>
                </div>
                <span className="text-[0.65rem] text-gray-300 tracking-wide mt-1 uppercase opacity-90 font-medium">
                    Ensuring Excellence, One Test at a Time.
                </span>
            </div>
        </div>
    );
}
