import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionHeaderProps } from "../../types";

export default function SectionHeader({ header, className, color }: SectionHeaderProps) {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 200,
      easing: 'ease-out',
    });
  }, []);

  return (
    <h3 
      data-aos="fade-up"
      className={`text-2xl ${className && className} font-bold ${color ? color : "text-packship-purple-lite"}`}
    >
      {header}
    </h3>
  );
};
