import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "@/shared/SectionHeader";

export default function Walkthrough() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="mt-24">
      <div className="kontainer text-center">
        <div className="row text-md sm:text-xl text-white flex flex-col items-center gap-8">
          <div className="h-24 flex items-center justify-center">
            <SectionHeader header="Walkthrough" />
          </div>
          <div
            data-aos="fade-up"
            className="w-full flex flex-col justify-between items-center"
          >
            <iframe
              src="https://www.loom.com/embed/c603f4de707e424ab45deff1f6fe9f09?sid=8c9962de-7081-4ac7-9910-781ef94d4052"
              style={{ width: "100%", maxWidth: "500px", height: "405px" }}
              className="bg-white bg-opacity-75 rounded-xl p-2 md:w-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
