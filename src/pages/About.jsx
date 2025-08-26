
export default function About() {
  return (
    <section className="hero-wrap min-h-[60vh] relative flex flex-col items-center justify-center py-16 px-4">
      <div className="hero-bg absolute inset-0" aria-hidden />
      <div className="relative z-10 max-w-3xl w-full text-center">
        <h1 className="hero-title mb-4">About BMORE</h1>
        <p className="mb-8 text-lg text-neutral-700">Minimalist design. Transparent labels. Real results.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-xl bg-white/80 backdrop-blur p-6 shadow">
            <h3 className="font-semibold mb-2">Clean Formulations</h3>
            <p className="opacity-70">Focused actives and clear labeling.</p>
          </div>
          <div className="rounded-xl bg-white/80 backdrop-blur p-6 shadow">
            <h3 className="font-semibold mb-2">Quality Mindset</h3>
            <p className="opacity-70">Manufacturing standards and batch coding.</p>
          </div>
          <div className="rounded-xl bg-white/80 backdrop-blur p-6 shadow">
            <h3 className="font-semibold mb-2">Designed for Real Goals</h3>
            <p className="opacity-70">Simple routines that fit modern life.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
