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

  // Calculate creator's total time in days (rough estimate)
  const creatorTotalTime = "~200 days";

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
              className="dark:text-white/70 light:text-gray-700 text-lg mb-2"
            >
              Building and publishing NPM packages traditionally comes with
              these time-consuming pain points that PackShip was designed to
              solve.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="dark:text-packship-purple-lite light:text-packship-purple-lite text-lg italic"
            >
              Here&apos;s how much time it actually took me to develop and ship
              my first package:
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
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
                  creatorExperience={point.creatorExperience}
                />
              </div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="bg-gradient-to-br from-brown-900/80 to-brown-800/60 p-6 sm:p-8 rounded-xl border border-white/10 text-center max-w-3xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
              <span className="text-xl sm:text-2xl font-bold text-packship-purple-lite">
                = {totalHours}+ hours
              </span>
              <span className="text-xl sm:text-2xl font-bold text-white">
                of headaches
              </span>
              <FaCloudRain className="text-white/70 text-xl sm:text-2xl" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-4">
              <span className="text-base sm:text-lg text-packship-purple-lite font-semibold">
                My personal time spent:
              </span>
              <span className="text-base sm:text-lg text-white font-bold">
                {creatorTotalTime}
              </span>
            </div>

            <p className="text-white/70 mb-3">
              <span className="text-packship-purple-lite font-semibold">
                PackShip
              </span>{" "}
              eliminates these pain points with its six powerful features,
              saving you time and frustration.
            </p>
            <p className="text-white/70 text-xs sm:text-sm italic">
              * I shipped my first package with security risks because I was
              tired of the amount of work involved.
              <br className="hidden sm:block" />
              Don&apos;t make the same mistake - use PackShip instead!
            </p>
          </div>

          <div className="text-center" data-aos="fade-up">
            <div className="flex items-center justify-center">
              <div className="h-12 w-0.5 bg-white/20"></div>
            </div>
            <p className="text-white/70 mt-4 text-lg">
              There&apos;s an easier way with PackShip
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
