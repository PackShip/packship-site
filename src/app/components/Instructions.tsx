import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { commands } from "../../../constants";
import Terminal from "@/shared/Terminal";
import SectionHeader from "@/shared/SectionHeader";

export default function Instructions() {

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
          <SectionHeader header="How It Works" />
          <div data-aos="fade-up" className="w-full flex flex-col justify-between items-center">
            <Terminal commands={commands} />
          </div>
        </div>
      </div>
    </section>
  );
};
