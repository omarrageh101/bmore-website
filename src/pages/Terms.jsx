export default function Terms() {
  return (
    <div className="container py-12 max-w-2xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-extrabold mb-4 tracking-tight flex items-center gap-2">
        <span role="img" aria-label="document">📄</span> Terms of Use
      </h1>
      <section className="bg-white rounded-2xl shadow p-6 mb-6">
        <h2 className="font-bold mb-2">Use of Site</h2>
        <p>This website is for informational purposes only. By using this site, you agree not to misuse the content or attempt to breach security.</p>
      </section>
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="font-bold mb-2">Disclaimer</h2>
        <p>BMORE products are not intended to diagnose, treat, cure, or prevent any disease. Always consult a healthcare professional before use.</p>
      </section>
    </div>
  );
}
