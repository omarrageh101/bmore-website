import site from "../data/site.json";

export default function Home() {
  return (
    <div className="hero-wrap">
      {/* Background layers */}
      <div className="hero-bg" aria-hidden />
      <div className="hero-blob pink" aria-hidden />
      <div className="hero-blob blue" aria-hidden />

      {/* Centered content */}
      <div className="relative z-10 container px-4 text-center max-w-3xl">
        <h1 className="hero-title transition duration-200 hover:scale-105 hover:drop-shadow-[0_8px_32px_rgba(238,192,233,0.25)]">
          bemore.. be well
        </h1>

        <p className="mt-4 text-lg md:text-xl text-neutral-800 transition-colors duration-200 hover:text-pink-600">
          Clean, minimalist, and made for modern wellness — BMORE Gummies.
        </p>

        <div className="mt-6 flex flex-col items-center gap-4">
          <span className="pill bg-gradient-to-r from-pink-200 via-pink-400 to-blue-200 text-neutral-900 shadow-lg border border-pink-300/60 transition duration-200 hover:from-pink-300 hover:to-blue-300 hover:scale-105 hover:shadow-xl">
            Soon in KSA
          </span>
          <a href="/products" className="btn-hero hover:bg-neutral-900 hover:scale-105 hover:shadow-2xl transition duration-200">
            View Products
          </a>
        </div>
      </div>
    </div>
  );
}
