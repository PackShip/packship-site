import React from "react";
import SectionHeader from "@/shared/SectionHeader";
import DonationsLink from "@/shared/DonationsLink";

export default function Testimonials() {
  return (
    <div className="kontainer text-center">
      <div className="row text-md sm:text-xl flex flex-col items-center gap-8">
        <SectionHeader header="What Our Audience Says" />
        {/* Transparent background with blurry circular edges */}
        <div className="bg-white/30 backdrop-blur-lg rounded-3xl w-full p-6 shadow-lg">
          <div id="shapo-widget-ed1bf88ceb779d5abe54" className="w-full max-w-4xl mx-auto"></div>
        </div>
        {/* <DonationsLink linkColor="text-white" /> */}
      </div>
    </div>
  );
}