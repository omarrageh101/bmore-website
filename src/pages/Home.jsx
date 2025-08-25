import data from "../data/products.json";
import ProductCard from "../components/ProductCard.jsx";
import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="container py-12 space-y-16 animate-fade-in">
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight animate-hero-gradient bg-gradient-to-r from-brand to-pink-400 bg-clip-text text-transparent">
          Glow. Grow. Glow Again.
        </h1>
        <p className="opacity-70 max-w-2xl mx-auto text-lg">
          Clean, minimalist, and made for modern wellness — BMORE Gummies.
        </p>
        <a href="/products" className="inline-block bg-black text-white px-8 py-4 rounded-2xl mt-2 font-bold text-lg shadow hover:scale-105 transition-transform">
          View Products
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((p, i) => (
            <div
              key={p.slug}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`transition-transform duration-300 ${hovered === i ? "scale-105 shadow-2xl z-10" : ""}`}
            >
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {["Vegan & Gelatin-Free", "Sugar Substitute", "Designed for real goals"].map((x, i) => (
          <div
            key={x}
            className="border rounded-2xl p-6 text-lg font-semibold bg-white shadow hover:bg-brand hover:text-white transition-colors cursor-pointer group"
          >
            <span className="transition-transform group-hover:scale-110">{x}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
