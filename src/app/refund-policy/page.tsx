"use client"

import Footer from "@/shared/Footer";
import Navigation from "@/shared/Navigation";
import Link from "next/link";

export default function Refund() {
  return (
    <>
      <Navigation />
      <div className="kontainer flex flex-col items-center justify-center text-white">
        <div className="row">
          <div className="my-8 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-16">Refund Policy</h1>

            <div className="w-full text-sm mb-6">
              <h2 className="text-xl font-semibold mb-3">1. Limited Refund Policy</h2>
              <p className="mb-4">
                PackShip maintains a strict no-refund policy except in specific circumstances. 
                Refunds are only considered in exceptional cases and are evaluated on a case-by-case basis.
              </p>
            </div>

            <div className="w-full text-sm mb-6">
              <h2 className="text-xl font-semibold mb-3">2. Valid Reasons for Refund</h2>
              <p className="mb-4">Refunds may be considered in the following situations:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Accidental purchase (proof required)</li>
                <li>License key has not been activated or used</li>
              </ul>
            </div>

            <div className="w-full text-sm mb-6">
              <h2 className="text-xl font-semibold mb-3">3. Refund Process</h2>
              <p className="mb-4">If you believe you qualify for a refund:</p>
              <ol className="list-decimal ml-6 mb-4">
                <li>Email us at <Link className="underline font-bold italic" href="mailto:packshipcli@gmail.com">packshipcli@gmail.com</Link></li>
                <li>Include your purchase details and detailed explanation for the refund request</li>
                <li>Complete our mandatory feedback form (will be sent upon request)</li>
                <li>Provide any requested documentation to support your claim</li>
              </ol>
            </div>

            <div className="w-full text-sm mb-6">
              <h2 className="text-xl font-semibold mb-3">4. Important Notes</h2>
              <ul className="list-disc ml-6 mb-4">
                <li>All refund requests are thoroughly reviewed and not guaranteed</li>
                <li>License keys must be surrendered if a refund is granted</li>
                <li>Processing time may vary depending on the circumstances</li>
                <li>We reserve the right to deny any refund request that doesn&apos;t meet our criteria</li>
              </ul>
            </div>

            <div className="w-full text-sm mb-6">
              <h2 className="text-xl font-semibold mb-3">5. Contact</h2>
              <p className="mb-4">
                For any questions about our refund policy, please contact us at <Link className="underline font-bold italic" href="mailto:packshipcli@gmail.com">packshipcli@gmail.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}