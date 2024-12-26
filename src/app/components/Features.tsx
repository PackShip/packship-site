import { useEffect } from "react";
import { features } from "../../../constants";
import KeyFeature from "@/shared/KeyFeature";
import SectionHeader from "@/shared/SectionHeader";

export default function Features() {
  return (
    <section className="mt-24">
      <div className="kontainer text-center">
        <div className="row text-md sm:text-xl text-white flex flex-col items-center gap-8">
          <SectionHeader header="Key Features" />
          <div className="w-full flex justify-center sm:justify-between items-center flex-wrap">
            {features.map((feature, index) => (
              <KeyFeature key={index} title={feature.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
