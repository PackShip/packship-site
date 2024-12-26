"use client";

import { useParams } from "next/navigation";
import { plans } from "../../../../constants";
import { CheckIcon, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PackShipLogo from "../../../../public/assets/packshipLogo.svg";
import { useRouter } from "next/navigation";
import PaymentProvider from "@/app/components/PaymentProvider";
import PayPalButton from "@/app/components/paypal/PayPalButton";
import PaymentGateway from "@/app/components/paypal/PaymentGateway";

export default function Checkout() {
  const router = useRouter();
  const params = useParams();
  const plan = plans.find((p) => p.name.toLowerCase() === params.plan);

  if (!plan) {
    return <div className="text-red-500">Plan not found</div>;
  }

  const handlePaymentSuccess = (details: any) => {
    router.push("/success");
  };

  return (
    <div className="h-screen bg-gray-900">
      <Link
        href="/"
        className="fixed top-8 left-8 flex items-center gap-2 group transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 text-packship-purple-lite opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        <Image
          src={PackShipLogo}
          alt="Packship Logo"
          width={120}
          height={40}
          className="opacity-100 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300"
        />
        <span className="absolute left-7 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-packship-purple-lite">
          Back
        </span>
      </Link>

      <div className="flex flex-col md:flex-row h-full">
        {/* Left side: Product details */}
        <div className="w-full md:w-1/2 p-8 pt-24 flex items-center">
          <div className="max-w-xl mx-auto w-full">
            <h1 className="text-3xl font-bold text-white mb-6">
              {plan.name} Plan
            </h1>
            <div className="mb-6">
              <span className="text-gray-400 line-through">
                ${plan.originalPrice}
              </span>
              <span className="text-4xl font-bold text-white ml-2">
                ${plan.price}
              </span>
              <span className="text-gray-400 ml-1">USD</span>
            </div>
            <ul className="space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature.name}
                  className="flex items-center text-gray-300"
                >
                  <CheckIcon className="w-5 h-5 text-packship-purple-lite mr-2 flex-shrink-0" />
                  <span>{feature.name}</span>
                  {feature.highlight && (
                    <span className="ml-2 text-xs bg-packship-purple-semilite/20 text-packship-purple-lite px-2 py-1 rounded">
                      {feature.highlight}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right side: PayPal checkout */}
        <div className="w-full md:w-1/2 bg-white p-8 pt-24 flex items-center">
          <div className="max-w-xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>
            {/* <PaymentProvider plan={plan} onSuccess={handlePaymentSuccess} /> */}
            {/* <PayPalButton amount={plan.price} onSuccess={handlePaymentSuccess} /> */}
            <PaymentGateway plan={plan} onSuccess={handlePaymentSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
}
