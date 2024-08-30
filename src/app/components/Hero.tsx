import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {

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
          <h1 
            data-aos="fade-up"
            className="text-2xl text-packship-red font-bold"
          >
            Packship CLI Tool
          </h1>
          <h2 
            data-aos="fade-up"
            className="text-6xl font-black text-black sm:text-8xl leading-relaxed"
          >
            Simplify Your <span className="text-packship-red">NPM</span> Package <span className="text-packship-red">Releases</span>
          </h2>
          <p
            data-aos="fade-up"
            className=" bg-packship-red text-md text-packship-black font-regular my-4 py-2 px-4 rounded-full"
          >
            Ready to streamline your package publishing process? Packship makes shipping npm packages easier and faster.
          </p>
        </div>
      </div>
    </section>
  );
};
