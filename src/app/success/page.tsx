"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import SuccessfulEmailSent from "../../../public/assets/undraw_mail_sent_re_0ofv.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";


export default function Success() {
  const router = useRouter();
  const customerFirstName = useSelector((state: RootState) => state.customer.firstName);
  const requestSuccess = useSelector((state: RootState) => state.customer.requestSuccess);

  useEffect(() => {
    if (!requestSuccess) {
      router.push('/');
    }
  }, [requestSuccess, router]);

  if (!requestSuccess) {
    return null; // Prevent rendering the page if requestSuccess is false
  }


  return (
    <div className="kontainer min-h-screen flex flex-col items-center justify-center text-white">
      <div className="row">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Operation Successful!</h1>
          <p className="mb-16 text-xl text-white">Your request has been processed successfully, {customerFirstName}.</p>
          <div className="w-full flex justify-center items-center gap-8">
            <figure className="w-1/6 bg-white p-4 rounded-full border-8 border-packship-purple-lite">
              <Image 
                src={SuccessfulEmailSent}
                alt="Success Illustration"
                layout="responsive" 
                priority 
              />
            </figure>
            <span className="text-white text-lg w-1/2">Keep an eye on your email as we will be sending you an invoice shortly. We&apos;re currently packshipping your invoice with care.</span>
          </div>
        </div>
      </div>
    </div>
  );
}