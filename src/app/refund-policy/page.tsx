export default function Refund() {
  return (
    <div className="kontainer min-h-screen flex flex-col items-center justify-center text-white">
      <div className="row">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">
              1. Refund Eligibility
            </h2>
            <p className="mb-4">
              We offer a satisfaction guarantee for PackShip. If you&apos; re
              not satisfied with your purchase, you may request a refund within
              14 days of your purchase date.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">2. Refund Process</h2>
            <p className="mb-4">To request a refund:</p>
            <ol className="list-decimal ml-6 mb-4">
              <li>Email us at packshipcli@gmail.com</li>
              <li>Include your purchase details and reason for refund</li>
              <li>We will process your request within 5 business days</li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">
              3. Refund Restrictions
            </h2>
            <p className="mb-4">Refunds may be denied if:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>The 14-day period has expired</li>
              <li>There is evidence of license key misuse</li>
              <li>
                The tool has been extensively used in production environments
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">4. Contact</h2>
            <p className="mb-4">
              For any questions about our refund policy, please contact us at
              packshipcli@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
