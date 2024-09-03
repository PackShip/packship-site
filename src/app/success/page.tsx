"use client";

import React from "react";
import Image from "next/image";
import SuccessfulEmailSent from "../../../public/assets/undraw_mail_sent_re_0ofv.svg";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-3xl font-bold mb-4">Operation Successful!</h1>
      <p className="mb-8 text-lg">Your request has been processed successfully.</p>
      <div className="w-full max-w-md">
        <Image 
          src={SuccessfulEmailSent}
          alt="Success Illustration" 
          width={400} 
          height={300} 
          layout="responsive" 
          priority 
        />
      </div>
    </div>
  );
}