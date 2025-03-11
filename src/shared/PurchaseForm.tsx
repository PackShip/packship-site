"use client";

import { useState } from "react";
import { CheckoutFormValues } from "../../types";
import { useTheme } from "@/context/ThemeContext";

export default function PurchaseForm() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<CheckoutFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    requestSuccess: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // For an open-source project, we're just simulating form submission
      // In a real implementation, you might want to send this to a mailing list signup API
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        requestSuccess: true,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "There was an error submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Construction banner for both light and dark modes
  return (
    <div className="relative overflow-hidden rounded-lg border-2 border-yellow-500 p-6 dark:bg-black/40 light:bg-yellow-50">
      {/* Diagonal construction tape strips with higher z-index */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20">
        <div className="absolute -left-10 top-1/3 w-[150%] h-10 bg-yellow-400 rotate-12 flex items-center justify-center transform origin-left shadow-md">
          <span className="text-black font-bold text-sm tracking-widest">
            UNDER CONSTRUCTION
          </span>
        </div>
        <div className="absolute -left-10 bottom-1/3 w-[150%] h-10 bg-yellow-400 -rotate-12 flex items-center justify-center transform origin-left shadow-md">
          <span className="text-black font-bold text-sm tracking-widest">
            COMING SOON
          </span>
        </div>
      </div>

      <div className="relative z-10 text-center py-12">
        <h3 className="text-2xl font-bold dark:text-white light:text-gray-800 mb-4">
          Newsletter Signup Coming Soon!
        </h3>
        <p className="dark:text-white/70 light:text-gray-600 mb-4 max-w-md mx-auto">
          We&apos;re still working on our newsletter subscription system. Check
          back later for updates!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="https://www.npmjs.com/package/packship"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-packship-purple-lite hover:bg-packship-purple-lite/90 text-black font-medium py-2 px-6 rounded-md transition-colors"
          >
            Try PackShip CLI while you wait
          </a>
          <a
            href="/"
            className="bg-transparent border-2 border-packship-purple-lite hover:bg-packship-purple-lite/10 text-packship-purple-lite font-medium py-2 px-6 rounded-md transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>

      {/* Original form hidden behind the construction banner */}
      <div className="opacity-0 pointer-events-none absolute">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-white/70 text-sm mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full bg-black/30 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-packship-purple-lite"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-white/70 text-sm mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full bg-black/30 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-packship-purple-lite"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-white/70 text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black/30 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-packship-purple-lite"
            />
          </div>

          {submitError && (
            <div className="mb-4 text-red-400 text-sm">{submitError}</div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-packship-purple-lite hover:bg-packship-purple-lite/90 text-black font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe to Updates"}
          </button>

          <p className="mt-4 text-white/50 text-xs text-center">
            By subscribing, you&apos;ll receive updates about new releases,
            features, and community events.
          </p>
        </form>
      </div>
    </div>
  );
}
