import { CheckIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { plans } from '../../../constants';

export default function PricingPlans() {
  return (
    <section id="start-packshipping" data-aos="fade-up" className="mt-24">
      <div className="kontainer mx-auto px-4">
        <div className="row flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ship NPM packages faster,<br />
              focus on what matters!
            </h2>
            <div className="flex items-center justify-center gap-2 text-packship-purple-lite">
              <span className="text-2xl">⚡️</span>
              <span>Save 40% on launch pricing (Limited time offer)</span>
            </div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Generate production-ready npm packages in minutes, not days. Get instant access to 
              battle-tested boilerplates with all the essentials: testing, CI/CD, and optimizations - 
              preconfigured and ready to ship.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between gap-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`w-full md:w-1/2 rounded-2xl p-6 ${
                  plan.name === "Orbit"
                    ? "bg-black/30 border border-green-500"
                    : "bg-black/30"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <span className="text-gray-400 line-through">
                    ${plan.originalPrice}
                  </span>
                  <span className="text-4xl font-bold text-white ml-2">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">USD</span>
                </div>

                {plan.bundleNote ? (
                  <div className="text-gray-400 italic mb-4">{plan.bundleNote}</div>
                ) : (
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.name}
                        className="flex items-center text-gray-300"
                      >
                        {feature.included ? (
                          <CheckIcon className="w-5 h-5 text-packship-purple-lite mr-2" />
                        ) : (
                          <XIcon className="w-5 h-5 text-gray-600 mr-2" />
                        )}
                        <span
                          className={
                            feature.included ? "text-white" : "text-gray-600"
                          }
                        >
                          {feature.name}
                        </span>
                        {feature.highlight && (
                          <span className="ml-2 text-xs bg-packship-purple-semilite/20 text-packship-purple-lite px-2 py-1 rounded">
                            {feature.highlight}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {plan.additionalContent}

                <Link
                  href={`/checkout/${plan.name.toLowerCase()}`}
                  className={`w-full py-3 px-4 rounded-lg font-medium ${
                    plan.name === "Orbit"
                      ? "bg-green-500 text-black hover:bg-green-400"
                      : "bg-packship-purple-lite text-black hover:bg-packship-purple-semilite"
                  } transition-colors duration-200 block text-center`}
                >
                  {plan.buttonText}
                </Link>

                <p className="text-center text-sm text-gray-400 mt-4">
                  {plan.name === "Launch" 
                    ? "One-time use license. Perfect for single projects!"
                    : "Pay once. Build unlimited projects!"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}