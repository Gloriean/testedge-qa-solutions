interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
    return (
        <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
            {subtitle && <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-6" />}
            {subtitle && <p className="text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>}
        </div>
    );
}
