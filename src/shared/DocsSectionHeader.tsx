import { SectionHeaderProps } from "../../types";

export default function DocsSectionHeader({
  header,
  className = "",
  color = "text-white",
  description = "",
}: SectionHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${color} ${className}`}
      >
        {header}
      </h2>
      {description && <p className="text-white/70">{description}</p>}
    </div>
  );
}
