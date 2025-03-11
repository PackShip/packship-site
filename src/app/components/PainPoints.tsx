import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { painPoints } from "../../../constants";
import PainPoint from "@/shared/PainPoint";
import { FaCloudRain } from "react-icons/fa";

export default function PainPoints() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-out",
    });
  }, []);

  // Calculate total hours
  const totalHours = painPoints.reduce((total, point) => {
    const hours = parseInt(point.hours.split(" ")[0]);
    return total + (isNaN(hours) ? 0 : hours);
  }, 0);

  return (
    <section className="py-16 relative">
      <div className="kontainer">
        <div className="row flex flex-col items-center gap-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold dark:text-white light:text-gray-900 mb-4"
            >
              The Development Headache
            </h2>
            <p
              data-aos="fade-up"
              className="dark:text-white/70 light:text-gray-700 text-lg"
            >
              Building and publishing NPM packages traditionally comes with
              these time-consuming pain points that PackShip was designed to
              solve.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {painPoints.map((point, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="h-full"
              >
                <PainPoint
                  title={point.title}
                  hours={point.hours}
                  description={point.description}
                />
              </div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="bg-gradient-to-br from-brown-900/80 to-brown-800/60 p-8 rounded-xl border border-white/10 text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl font-bold text-packship-purple-lite">
                = {totalHours}+ hours
              </span>
              <span className="text-2xl font-bold text-white">
                of headaches
              </span>
              <FaCloudRain className="text-white/70 text-2xl" />
            </div>
            <p className="text-white/70">
              <span className="text-packship-purple-lite font-semibold">
                PackShip
              </span>{" "}
              eliminates these pain points with its six powerful features,
              saving you time and frustration.
            </p>
          </div>

          <div className="text-center" data-aos="fade-up">
            <div className="flex items-center justify-center">
              <div className="h-12 w-0.5 bg-white/20"></div>
            </div>
            <p className="text-white/70 mt-4 text-lg">
              There's an easier way with PackShip
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-brown-800/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-brown-800/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
