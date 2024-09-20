import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import CommandPrompt from "@/shared/CommandPrompt";

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
            className="text-2xl text-packship-purple-lite font-bold"
          >
            Packship CLI Tool
          </h1>
          <h2 
            data-aos="fade-up"
            className="text-6xl font-black text-white sm:text-8xl leading-relaxed"
          >
            Simplify Your <span className="text-packship-purple-lite">NPM</span> Package <span className="text-packship-purple-lite">Releases</span>
          </h2>
          <p
            data-aos="fade-up"
            className=" text-md text-white font-regular mt-4 py-2 px-4 rounded-full"
          >
            Focus more on <span className="text-packship-purple-lite font-bold">coding</span> and less on <span className="text-packship-purple-lite font-bold">managing package releases</span>. <span className="text-packship-purple-lite font-bold">Packship</span> makes <span className="text-packship-purple-lite font-bold">shipping npm packages</span> easier and faster.
          </p>
          <CommandPrompt data-aos="fade-up" />
          <span className="text-sm text-white">Early bird special: <span className="text-green-400 font-bold">95% off</span></span>
          <button 
            type="button" 
            data-aos="fade-up"
          >
            <Link
              href="#start-packshipping"
              className="bg-packship-purple hover:bg-purple-700 rounded-full text-lg lg:text-2xl text-framify-grey px-8 py-4 font-bold mt-24 transition ease-in-out"
            >
              Publish Your Package Now
            </Link>
          </button>
          <Link
            href="https://www.producthunt.com/posts/packship?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-packship"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-32 animate-bounce"
            data-aos="fade-up"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=600712&theme=neutral"
              alt="PackShip - Ship your NPM packages in hours, not years | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
