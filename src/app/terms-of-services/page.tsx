export default function Terms() {
  return (
    <div className="kontainer min-h-screen flex flex-col items-center justify-center text-white">
      <div className="row">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="mb-4">
              Welcome to PackShip CLI Tool (&quot;PackShip&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing
              or using our CLI tool and services, you agree to be bound by these
              Terms of Service.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">2. License Terms</h2>
            <p className="mb-4">
              PackShip is available as a one-time purchase of $69 USD. This
              purchase includes:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Perpetual license to use the PackShip CLI Tool</li>
              <li>All future updates</li>
              <li>Premium support</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">3. Use of Service</h2>
            <p className="mb-4">
              You agree to use PackShip only for lawful purposes and in
              accordance with these Terms. You are responsible for maintaining
              the security of your license key.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">
              4. Support and Updates
            </h2>
            <p className="mb-4">
              Support is provided via email at packshipcli@gmail.com. While we
              strive to respond promptly, response times may vary.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">5. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Continued
              use of PackShip after such modifications constitutes acceptance of
              the updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
