import site from "../data/site.json";
import { useEffect } from "react";

export default function Home() {
  // Parallax effect for floating shapes
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".parallax-float").forEach((el, i) => {
        el.style.transform = `translateY(${window.scrollY * (0.1 + i * 0.05)}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden animate-fade-in bg-gradient-to-br from-[#e6d0f7] via-[#f7e6f0] to-[#e0f7fa]">
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 z-0 animate-gradient-move bg-gradient-to-br from-[#e6d0f7] via-[#f7e6f0] to-[#e0f7fa] opacity-80" style={{ filter: "blur(60px)" }} />
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-40 parallax-float animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand rounded-full opacity-30 parallax-float animate-float" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-200 rounded-full opacity-30 parallax-float animate-float-delay" />
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-24 md:py-40">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-hero-gradient bg-gradient-to-r from-brand to-pink-400 bg-clip-text text-transparent drop-shadow-lg animate-fade-in-slow">
          {site.slogan}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-2xl font-medium text-slate-700 mb-4 animate-fade-in-slow">
          Clean, minimalist, and made for modern wellness — BMORE Gummies. <br />
          <span className="font-bold text-brand">info@namai.com.co</span>
        </p>
        <div className="mb-8 animate-bounce-in">
          <span className="inline-block bg-brand/10 text-brand font-bold px-6 py-2 rounded-full shadow-lg text-xl tracking-wide">Soon in KSA</span>
        </div>
        <a
          href="/products"
          className="inline-block bg-black text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-110 hover:bg-brand transition-transform animate-bounce-in focus:outline-none focus:ring-4 focus:ring-brand"
        >
          View Products
        </a>
      </div>
    </div>
  );
}
