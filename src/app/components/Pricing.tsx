import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "@/shared/SectionHeader";
import Link from "next/link";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: "ease-out",
    });
  }, []);

  return (
    <section data-aos="fade-up" className="mt-24">
      <div className="kontainer">
        <div className="w-full bg-black text-center flex flex-col lg:flex-row justify-between items-stretch rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          {/* Left Column: Comparison Section */}
          <div className="w-1/2 flex-1 bg-gray-100 rounded-l-lg text-md sm:text-lg flex flex-col items-center gap-8">
            <div className="rounded-tl-lg w-full flex items-center justify-center bg-packship-red py-4">
              <SectionHeader header="Why Choose Packship?" className="text-white rounded-lg" />
            </div>
            <div className="w-full flex flex-col justify-between items-center gap-16">
              <table className="w-full max-w-md text-center border-collapse">
                <thead>
                  <tr className="border-b border-packship-red text-packship-red font-semibold text-sm sm:text-base">
                    <th className="py-4 px-2 text-black text-left font-bold">Feature</th>
                    <th className="py-4 px-2 text-black font-bold">Packship</th>
                    <th className="py-4 px-2 text-black font-bold">From Scratch</th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-base text-gray-300">
                  <tr className="border-b border-packship-red">
                    <td className="py-4 px-2 text-black text-left font-semibold">Time to Set Up</td>
                    <td className="py-4 px-2 text-packship-red font-semibold">Instant</td>
                    <td className="py-4 px-2 text-black">Hours</td>
                  </tr>
                  <tr className="border-b border-packship-red">
                    <td className="py-4 px-2 text-black text-left font-semibold">Automated Releases</td>
                    <td className="py-4 px-2 text-packship-red font-semibold">Yes</td>
                    <td className="py-4 px-2 text-black">-</td>
                  </tr>
                  <tr className="border-b border-packship-red">
                    <td className="py-4 px-2 text-black text-left font-semibold">Ease of Use</td>
                    <td className="py-4 px-2 text-packship-red font-semibold">High</td>
                    <td className="py-4 px-2 text-black">Low</td>
                  </tr>
                  <tr className="border-b border-packship-red">
                    <td className="py-4 px-2 text-black text-left font-semibold">Support</td>
                    <td className="py-4 px-2 text-packship-red font-semibold">Priority</td>
                    <td className="py-4 px-2 text-black">-</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-2 text-black text-left font-semibold">Cost</td>
                    <td className="py-4 px-2 text-packship-red font-semibold">$29 One-Time</td>
                    <td className="py-4 px-2 text-black">Varies</td>
                  </tr>
                </tbody>
              </table>
              <div className="italic px-16 flex flex-col gap-8">
                <span className="text-black text-sm">
                  Join a growing community of developers enhancing their productivity.
                </span>
                <span className="text-black text-sm">
                  Questions? Need Support? Want to request an invoice for Packship? Reach out to us at <Link href="mailto:hatemthedev@gmail.com" className="text-packship-red underline">hatemthedev@gmail.com</Link>
                </span>
                <span className="not-italic text-packship-red text-xs font-bold">
                  N.B. Pricing is in United States Dollars
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing and Payment Notice */}
          <div className="rounded-r-lg w-1/2 flex-1 bg-white rounded-tr-lg text-md sm:text-xl text-black flex flex-col items-center gap-8 p-8">
            <SectionHeader header="Checkout" />
            <div className="w-full flex flex-col justify-between items-center">
              <div className="bg-white text-black rounded-lg p-8 shadow-lg flex flex-col gap-4">
                <h4 className="text-xl font-bold mb-4">Packship CLI Tool</h4>
                <p className="text-md mb-4">
                  One-time Purchase: <span className="font-bold">$29</span>
                </p>
                <p className="text-sm text-gray-600 mb-6">
                  Includes all future updates and premium support.
                </p>
                <div className="bg-yellow-200 text-yellow-800 p-4 rounded-lg mb-4">
                  <p className="font-semibold">
                    <span className="text-packship-red">Note:</span> Our online
                    checkout is currently under maintenance. To purchase, click the
                    button below to send us an email request.
                  </p>
                </div>

                {/* Purchase Button */}
                <button
                  className="bg-packship-red text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition"
                  onClick={() =>
                    (window.location.href =
                      "mailto:your-email@example.com?subject=Packship%20Purchase%20Request&body=Please%20send%20me%20an%20invoice%20for%20Packship%20CLI%20Tool.%20Here%20is%20my%20preferred%20payment%20email%3A%20")
                  }
                >
                  Request Invoice via Email
                </button>
              </div>

              {/* Instructions */}
              <div className="text-sm text-black mt-8 max-w-md">
                <p>
                  After you send the email request, we will generate an invoice and
                  send it to your email. Once the payment is processed, we will email
                  you the license key for your Packship CLI Tool.
                </p>
                <p className="mt-4">
                  We apologize for any inconvenience and appreciate your understanding
                  while we improve our payment system!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}