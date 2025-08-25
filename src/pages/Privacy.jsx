export default function Privacy() {
  return (
    <div className="container py-12 max-w-2xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-extrabold mb-4 tracking-tight flex items-center gap-2">
        <span role="img" aria-label="lock">🔒</span> Privacy Policy
      </h1>
      <section className="bg-white rounded-2xl shadow p-6 mb-6">
        <h2 className="font-bold mb-2">Your Data</h2>
        <p>We respect your privacy. No personal data is collected except what you submit via forms or email. We never sell or share your information.</p>
      </section>
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="font-bold mb-2">Cookies</h2>
        <p>This site uses only essential cookies for basic functionality. No tracking or analytics cookies are used.</p>
      </section>
    </div>
  );
}
