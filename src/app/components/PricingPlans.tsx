import { CheckIcon, XIcon } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
  highlight?: string;
}

interface PricingPlan {
  name: string;
  price: number;
  originalPrice: number;
  features: PlanFeature[];
  buttonText: string;
  bundleNote?: string;
  additionalContent?: React.ReactNode;
}

export default function PricingPlans() {
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: 199,
      originalPrice: 299,
      features: [
        { name: "NextJS boilerplate", included: true },
        { name: "SEO & Blog", included: true },
        { name: "Mailgun emails", included: true },
        { name: "Stripe / Lemon Squeezy", included: true },
        { name: "MongoDB / Supabase", included: true },
        { name: "Google Oauth & Magic Links", included: true },
        { name: "Components & animations", included: true },
        { name: "ChatGPT prompts for terms & privacy", included: true },
        { name: "Discord community & Leaderboard", included: false },
        { name: "$1,210 worth of discounts", included: false },
        { name: "Lifetime updates", included: false },
      ],
      buttonText: "Get ShipFast",
    },
    {
      name: "All-in",
      price: 249,
      originalPrice: 349,
      features: [
        { name: "NextJS boilerplate", included: true },
        { name: "SEO & Blog", included: true },
        { name: "Mailgun emails", included: true },
        { name: "Stripe / Lemon Squeezy", included: true },
        { name: "MongoDB / Supabase", included: true },
        { name: "Google Oauth & Magic Links", included: true },
        { name: "Components & animations", included: true },
        { name: "ChatGPT prompts for terms & privacy", included: true },
        { name: "Discord community & Leaderboard", included: true },
        { name: "$1,210 worth of discounts", included: true },
        { name: "Lifetime updates", included: true, highlight: "Updated 2 weeks ago" },
      ],
      buttonText: "Get ShipFast",
    },
    {
      name: "ShipFast + CodeFast",
      price: 299,
      originalPrice: 648,
      features: [],
      buttonText: "Get ShipFast + CodeFast",
      bundleNote: "Everything in All-in, and...",
      additionalContent: (
        <div className="mt-6 bg-black/40 rounded-xl p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white">
              CF
            </div>
            <div className="text-green-500">CodeFast ($299 value)</div>
          </div>
          <div className="mt-2 text-white">Learn to code in weeks, not months</div>
          <ul className="mt-4 space-y-2">
            <li>• 12 hours of content</li>
            <li>• Build a SaaS from 0</li>
            <li>• Entrepreneur mindset</li>
          </ul>
          <div className="mt-4">
            <div className="flex -space-x-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-400 border-2 border-black"/>
              ))}
            </div>
            <div className="mt-2 text-sm text-gray-400">1000+ students love CodeFast</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="start-packshipping" data-aos="fade-up" className="mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Save hours of repetitive code,<br />
            ship fast, get profitable!
          </h2>
          <div className="flex items-center justify-center gap-2 text-green-500">
            <span className="text-2xl">🎁</span>
            <span>$100 off for the first 5820 customers (13 left)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 ${
                plan.name === "ShipFast + CodeFast"
                  ? "bg-black/30 border border-green-500"
                  : "bg-black/30"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                  {plan.name === "ShipFast + CodeFast" && (
                    <span className="ml-2 text-xs bg-green-500 text-black px-2 py-1 rounded">
                      BUNDLE
                    </span>
                  )}
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
                        <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
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
                        <span className="ml-2 text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded">
                          {feature.highlight}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {plan.additionalContent}

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium ${
                  plan.name === "ShipFast + CodeFast"
                    ? "bg-green-500 text-black hover:bg-green-400"
                    : "bg-yellow-500 text-black hover:bg-yellow-400"
                } transition-colors duration-200`}
              >
                {plan.buttonText}
              </button>

              <p className="text-center text-sm text-gray-400 mt-4">
                Pay once. Build unlimited projects!
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}