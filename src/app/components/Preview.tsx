import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "@/shared/SectionHeader";

export default function Preview() {

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
          <SectionHeader header="Promo Launch Trailer | Skit" />
          <div data-aos="fade-up" className="w-full flex flex-col justify-between items-center">
          <iframe src="https://cards.producthunt.com/cards/products/607718" style={{ width: '100%', maxWidth: '500px', height: '405px' }} className="bg-white bg-opacity-75 rounded-xl p-2 md:w-500" />
          </div>
        </div>
      </div>
    </section>
  );
};


