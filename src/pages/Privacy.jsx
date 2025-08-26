export default function Privacy() {
  return (
    <section className="hero-wrap min-h-[60vh] relative flex flex-col items-center justify-center py-16 px-4">
      <div className="hero-bg absolute inset-0" aria-hidden />
      <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
  <h1 className="hero-title mb-2 hover:scale-105 hover:drop-shadow-lg transition-transform duration-200 cursor-pointer">Privacy Policy</h1>
  <p className="text-sm opacity-70 mb-6 hover:text-pink-600 transition-colors duration-200 cursor-pointer">Last updated: 26 Aug 2025</p>

        <section className="space-y-4 text-left">
          <h2 className="text-xl md:text-2xl font-semibold hover:text-pink-600 transition-colors duration-200 cursor-pointer">Who we are</h2>
          <p>
            BMORE is a wellness brand owned by <strong>nami first for trading</strong> (founded
            in <strong>2023</strong>). This website is an informational portfolio for our products.
            You can contact us at <a className="underline" href="mailto:info@namai.com.co">info@namai.com.co</a>.
          </p>
          <p>
            We are the "data controller" for personal data collected via this website. We do not
            sell your personal data.
          </p>
        </section>

        <section className="space-y-4 text-left">
          <h2 className="text-xl md:text-2xl font-semibold hover:text-pink-600 transition-colors duration-200 cursor-pointer">What we collect</h2>
          <ul className="list-disc pl-5 space-y-2 text-base hover:list-inside hover:text-blue-600 transition-colors duration-200 cursor-pointer">
            <li>
              <strong>Information you provide</strong>: when you submit our contact form (name, email,
              company, country, purpose, message).
            </li>
            <li>
              <strong>Technical data</strong>: basic logs needed to operate the site (IP address,
              browser type, pages viewed, timestamps). These are used for security and performance.
            </li>
            <li>
              <strong>Cookies</strong>: we only use essential cookies required to run the site and routing.
              If we later enable analytics or marketing cookies, we will ask for your consent first.
            </li>
          </ul>
          <p className="text-sm">
            Please do not include health information or other sensitive data in free-text fields.
          </p>
        </section>

        <section className="space-y-4 text-left">
          <h2 className="text-xl md:text-2xl font-semibold hover:text-pink-600 transition-colors duration-200 cursor-pointer">How we use your data (purposes & legal bases)</h2>
          <ul className="list-disc pl-5 space-y-2 text-base hover:list-inside hover:text-blue-600 transition-colors duration-200 cursor-pointer">
            <li>
              <strong>To respond to inquiries</strong> (consent / legitimate interests).
            </li>
            <li>
              <strong>To operate, secure, and debug the site</strong> (legitimate interests).
            </li>
            <li>
              <strong>To comply with law</strong> (legal obligation).
            </li>
          </ul>
        </section>

        <section className="space-y-4 text-left">
          <h2 className="text-xl md:text-2xl font-semibold hover:text-pink-600 transition-colors duration-200 cursor-pointer">Sharing your data</h2>
          <p>
            We share personal data only with service providers that help us run this website, such as
            hosting, content delivery, email, and our contact-form provider (acting as our processor).
            These providers may process data in other countries but must protect it under contracts.
            We may disclose data to authorities where required by law. We do not sell or share personal
            information for cross-context behavioral advertising.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold hover:text-pink-600 transition-colors duration-200 cursor-pointer">International transfers</h2>
          <p>
            If personal data is transferred internationally, we use appropriate safeguards (e.g., EU
            Standard Contractual Clauses where applicable).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold hover:text-pink-600 transition-colors duration-200 cursor-pointer">Retention</h2>
          <p>
            Contact submissions are kept for up to <strong>24 months</strong> (or shorter if no longer
            needed) and then deleted or anonymized. Server logs are kept for a short period for security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold hover:text-pink-600 transition-colors duration-200 cursor-pointer">Security</h2>
          <p>
            We use reasonable technical and organizational measures (e.g., HTTPS, access controls). No
            method of transmission or storage is 100% secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold hover:text-pink-600 transition-colors duration-200 cursor-pointer">Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, restrict or
            object to processing, and to data portability. You can withdraw consent at any time. You may
            also have the right to lodge a complaint with your local supervisory authority.
          </p>
          <p>
            To exercise your rights, email{' '}
            <a className="underline hover:text-blue-700 transition-colors duration-200" href="mailto:info@namai.com.co">info@namai.com.co</a>.
          </p>
        </section>
      </div>
    </section>
  );
}
