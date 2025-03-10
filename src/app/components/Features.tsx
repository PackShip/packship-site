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
      easing: "ease-out",
    });
  }, []);

  return (
    <section id="features" className="py-16">
      <div className="kontainer">
        <div className="row flex flex-col items-center gap-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Key Features
            </h2>
            <p data-aos="fade-up" className="text-white/70">
              Packship provides everything you need to streamline your NPM
              package development and release process.
            </p>
          </div>

          <div data-aos="fade-up" className="grid-container w-full">
            {features.map((feature, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <KeyFeature title={feature.title} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute left-0 right-0 w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-packship-purple-lite/50 to-transparent"></div>
    </section>
  );
}
