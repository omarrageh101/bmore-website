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
    <div className="container py-12 max-w-3xl mx-auto animate-fade-in space-y-10">
      <h1 className="text-4xl font-extrabold tracking-tight animate-hero-gradient bg-gradient-to-r from-brand to-pink-400 bg-clip-text text-transparent mb-6">Quality & Compliance</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {qualityPoints.map((q, i) => (
          <div
            key={q.title}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="text-4xl mb-2">{q.icon}</span>
            <h2 className="font-bold text-xl mb-2">{q.title}</h2>
            <p className="opacity-80">{q.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
