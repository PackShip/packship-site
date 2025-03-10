"use client";

import { useState } from "react";
import { CheckoutFormValues } from "../../types";

export default function PurchaseForm() {
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

  if (submitSuccess) {
    return (
      <div className="bg-green-800/20 text-green-400 p-4 rounded-md text-center">
        <h3 className="font-bold text-lg mb-2">Thank you for your interest!</h3>
        <p>
          You&apos;ve been added to our mailing list. We&apos;ll keep you
          updated on the latest Packship news and releases.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-white/70 text-sm mb-1">
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
        <label htmlFor="lastName" className="block text-white/70 text-sm mb-1">
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
  );
}
