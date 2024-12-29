"use client"

import Footer from "@/shared/Footer";
import Navigation from "@/shared/Navigation";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <Navigation />
      <div className="kontainer flex flex-col items-center justify-center text-white">
        <div className="row">
          <div className="my-8 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-16">Privacy Notice</h1>

            <div className="w-full text-sm mb-6">
              <h2 className="text-xl font-semibold mb-3">
                1. Information Collection
              </h2>
              <p className="mb-4">
                We collect limited information necessary for processing your
                purchase and providing support, including:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  Name and email address for purchase and support communication
                </li>
                <li>License key usage data for security purposes</li>
              </ul>
            </div>

            <div className="w-full text-sm mb-6">
              <h2 className="text-xl font-semibold mb-3">2. Data Usage</h2>
              <p className="mb-4">Your information is used solely for:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Processing your purchase</li>
                <li>Providing customer support</li>
                <li>Sending important updates about PackShip</li>
              </ul>
            </div>

            <div className="w-full text-sm mb-6">
              <h2 className="text-xl font-semibold mb-3">3. Data Protection</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your
                personal information and prevent unauthorized access.
              </p>
            </div>

            <div className="w-full text-sm mb-6">
              <h2 className="text-xl font-semibold mb-3">4. Contact Us</h2>
              <p className="mb-4">
                For privacy-related inquiries, please contact us at <Link className="underline font-bold italic" href="mailto:packshipcli@gmail.com">packshipcli@gmail.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
