"use client";

import React from "react";
import Image from "next/image";
import SuccessfulEmailSent from "../../../public/assets/undraw_mail_sent_re_0ofv.svg";

export default function Success() {
  return (
    <div className="kontainer min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <div className="row">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-4 text-packship-red">Operation Successful!</h1>
          <p className="mb-16 text-xl text-packship-red">Your request has been processed successfully.</p>
          <div className="w-full flex justify-center items-center gap-8">
            <figure className="w-1/6">
              <Image 
                src={SuccessfulEmailSent}
                alt="Success Illustration"
                layout="responsive" 
                priority 
              />
            </figure>
            <span className="text-black text-lg w-1/2">Keep an eye on your email as we will be sending you an invoice shortly. We&apos;re currently packshipping your invoice with care.</span>
          </div>
        </div>
      </div>
    </div>
  );
}