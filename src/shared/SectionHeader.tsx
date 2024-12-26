import { SectionHeaderProps } from "../../types";

export default function SectionHeader({ header, className, color }: SectionHeaderProps) {
  return (
    <h3 
      className={`text-2xl ${className && className} font-bold ${color ? color : "text-packship-purple-lite"}`}
    >
      {header}
    </h3>
  );
};
