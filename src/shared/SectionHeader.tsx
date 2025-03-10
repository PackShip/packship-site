import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionHeaderProps } from "../../types";

export default function SectionHeader({
  header,
  className = "",
  color = "text-white",
  description = "",
}: SectionHeaderProps) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2
        data-aos="fade-up"
        className={`text-3xl md:text-4xl font-bold mb-4 ${color} ${className}`}
      >
        {header}
      </h2>
      {description && (
        <p data-aos="fade-up" data-aos-delay="100" className="text-white/70">
          {description}
        </p>
      )}
    </div>
  );
}
