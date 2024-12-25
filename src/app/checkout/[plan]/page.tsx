"use client";

import { useParams } from 'next/navigation';
import { plans } from '../../../../constants';
import { CheckIcon } from 'lucide-react';

export default function Checkout() {
  const params = useParams();
  const plan = plans.find(p => p.name.toLowerCase() === params.plan);

  if (!plan) return null;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex flex-col md:flex-row">
        {/* Left side: Product details */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-white mb-6">{plan.name} Plan</h1>
          <div className="mb-6">
            <span className="text-gray-400 line-through">${plan.originalPrice}</span>
            <span className="text-4xl font-bold text-white ml-2">${plan.price}</span>
          </div>
          <ul className="space-y-4">
            {plan.features.map((feature) => (
              <li key={feature.name} className="flex items-center text-gray-300">
                <CheckIcon className="w-5 h-5 text-packship-purple-lite mr-2" />
                <span>{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: PayPal checkout */}
        <div className="w-full md:w-1/2 bg-black/30 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Checkout</h2>
          {/* PayPal integration will go here */}
          <div className="h-96 flex items-center justify-center border border-gray-700 rounded-lg">
            <p className="text-gray-400">PayPal checkout component will be integrated here</p>
          </div>
        </div>
      </div>
    </div>
  );
}