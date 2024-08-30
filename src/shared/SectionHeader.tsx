import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionHeaderProps } from "../../types";

export default function SectionHeader({ header }: SectionHeaderProps) {

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
      className="text-2xl text-packship-red font-bold"
    >
      {header}
    </h3>
  );
};
