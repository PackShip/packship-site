"use client";

import React from "react";
import Image from "next/image";
import SuccessfulEmailSent from "../../../public/assets/undraw_mail_sent_re_0ofv.svg";
import { useSearchParams } from "next/navigation";

export default function Success() {
  const searchParams = useSearchParams();
  const serialCode = searchParams.get('serialCode');

  return (
    <div className="kontainer min-h-screen flex flex-col items-center justify-center text-white">
      <div className="row">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Payment Successful!</h1>
          <p className="mb-16 text-xl text-white">Thank you for your purchase.</p>
          
          {serialCode && (
            <div className="mb-8 p-6 bg-white/10 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Your Serial Code</h2>
              <code className="text-xl bg-black/20 p-2 rounded">{serialCode}</code>
            </div>
          )}

          <div className="w-full flex justify-center items-center gap-8">
            <figure className="w-1/6 bg-white p-4 rounded-full border-8 border-packship-purple-lite">
              <Image 
                src={SuccessfulEmailSent}
                alt="Success Illustration"
                layout="responsive" 
                priority 
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}