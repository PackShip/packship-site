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
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="pt-32 pb-16 relative">
      <div className="kontainer">
        <div className="row flex flex-col items-center gap-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-lg text-packship-purple-lite font-medium mb-4"
            >
              Open Source NPM Package Management
            </h1>
            <h2
              data-aos="fade-up"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Simplify Your{" "}
              <span className="text-packship-purple-lite">NPM</span> Package{" "}
              <span className="text-packship-purple-lite">Releases</span>
            </h2>
            <p
              data-aos="fade-up"
              className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            >
              Focus more on{" "}
              <span className="text-packship-purple-lite font-medium">
                coding
              </span>{" "}
              and less on{" "}
              <span className="text-packship-purple-lite font-medium">
                managing package releases
              </span>
              .{" "}
              <span className="text-packship-purple-lite font-medium">
                Packship
              </span>{" "}
              makes{" "}
              <span className="text-packship-purple-lite font-medium">
                shipping npm packages
              </span>{" "}
              easier and faster.
            </p>
          </div>

          <div
            className="w-full max-w-2xl mx-auto bg-black/50 rounded-lg p-4 border border-gray-800"
            data-aos="fade-up"
          >
            <div className="flex gap-2 mb-2">
              <div className="tab-button active">Bash</div>
              <div className="tab-button">PowerShell</div>
              <div className="tab-button">npm</div>
            </div>
            <div className="terminal-window">
              <code className="text-green-400">$</code>{" "}
              <code className="text-white">npm install -g packship</code>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            data-aos="fade-up"
          >
            <Link
              href="#start-packshipping"
              className="bg-packship-purple-lite hover:bg-packship-purple-lite/90 text-black rounded-md px-6 py-3 font-medium transition-all"
            >
              Get Started
            </Link>
            <Link
              href="/docs"
              className="bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-md px-6 py-3 font-medium transition-all"
            >
              Documentation
            </Link>
          </div>

          <div
            className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4"
            data-aos="fade-up"
          >
            <Link
              href="https://www.producthunt.com/posts/packship?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-packship"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-all"
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
            <Link
              href="https://fazier.com/launches/packship"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=1261&badge_type=featured&template=true"
                width="270"
                alt="PackShip - Ship your NPM packages in hours, not years | Fazier"
                style={{ width: "250px", height: "54px" }}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-packship-purple-lite/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-packship-purple-lite/10 rounded-full blur-3xl"></div>
    </section>
  );
}
