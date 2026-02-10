import type { ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface CardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function Card({ children, className, hoverEffect = true }: CardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : {}}
            className={clsx(
                "bg-navy-800 border border-navy-700 rounded-xl p-6 shadow-lg transition-all duration-300",
                hoverEffect && "hover:border-green-500/50 hover:shadow-green-500/10",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
