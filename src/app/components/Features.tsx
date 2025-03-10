import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { features } from "../../../constants";
import KeyFeature from "@/shared/KeyFeature";

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-out",
    });
  }, []);

  return (
    <section id="features" className="py-24 relative">
      <div className="kontainer">
        <div className="row flex flex-col items-center gap-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold dark:text-white light:text-gray-900 mb-4"
            >
              Why Use Packship?
            </h2>
            <p
              data-aos="fade-up"
              className="dark:text-white/70 light:text-gray-700 text-lg"
            >
              Packship eliminates the complexity of NPM package development,
              letting you focus on writing great code instead of managing
              release processes.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="h-full"
              >
                <KeyFeature title={feature.title} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-packship-purple-lite/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-packship-purple-lite/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
