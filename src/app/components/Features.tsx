import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { features } from "../../../constants";
import KeyFeature from "@/shared/KeyFeature";
import SectionHeader from "@/shared/SectionHeader";

export default function Features() {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 200,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section className="mt-24">
      <div className="kontainer text-center">
        <div className="row text-md sm:text-xl text-white flex flex-col items-center gap-8">
          <SectionHeader header="Key Features" />
          <div data-aos="fade-up" className="w-full flex justify-between items-center">
            {features.map((feature, index) => (
              <KeyFeature key={index} title={feature.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
