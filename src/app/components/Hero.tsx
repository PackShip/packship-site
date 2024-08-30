import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

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
            className=" text-md text-black font-regular my-4 py-2 px-4 rounded-full"
          >
            Focus more on <span className="text-packship-red font-bold">coding</span> and less on <span className="text-packship-red font-bold">managing package releases</span>. <span className="text-packship-red font-bold">Packship</span> makes <span className="text-packship-red font-bold">shipping npm packages</span> easier and faster.
          </p>
          <button 
            type="button" 
            data-aos="fade-up"
          >
            <Link
              href="/getting-started"
              className="bg-packship-red hover:bg-red-700 rounded-full text-2xl text-framify-grey px-8 py-4 font-bold mt-8"
            >
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};
