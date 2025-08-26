

const qualityPoints = [
  {
    icon: "🔍",
    title: "Label Transparency",
    desc: "Actives, serving, storage, and warnings are always clear."
  },
  {
    icon: "📦",
    title: "Batch Coding",
    desc: "Batch/lot coding and expiry printed on every pack."
  },
  {
    icon: "🚫",
    title: "No Medical Claims",
    desc: "Dietary supplement disclaimer included."
  },
  {
    icon: "📸",
    title: "Real Images",
    desc: "All images used on this site are real product photos provided by the brand."
  }
];

export default function Quality() {
  return (
    <section className="hero-wrap min-h-[60vh] relative flex flex-col items-center justify-center py-16 px-4">
      <div className="hero-bg absolute inset-0" aria-hidden />
      <div className="relative z-10 max-w-2xl w-full text-center space-y-10">
        <h1 className="hero-title mb-2">Quality & Compliance</h1>
        <p className="text-lg opacity-70 mb-6">BMORE’s commitment to product quality and consumer safety.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {qualityPoints.map((q, i) => (
            <div
              key={q.title}
              className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-4xl mb-2">{q.icon}</span>
              <h2 className="font-bold text-xl mb-2 brand-gradient">
                {q.title}
              </h2>
              <p className="opacity-80">{q.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
