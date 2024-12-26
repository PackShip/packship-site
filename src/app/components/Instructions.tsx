import { commands } from "../../../constants";
import Terminal from "@/shared/Terminal";
import SectionHeader from "@/shared/SectionHeader";

export default function Instructions() {
  return (
    <section className="mt-24">
      <div className="kontainer text-center">
        <div className="row text-md sm:text-xl text-white flex flex-col items-center gap-8">
          <SectionHeader header="How It Works" />
          <div className="w-full flex flex-col justify-between items-center">
            <Terminal commands={commands} />
          </div>
        </div>
      </div>
    </section>
  );
};
