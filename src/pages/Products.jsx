

import data from "../data/products.json";
import ProductCard from "../components/ProductCard.jsx";

export default function Products() {
  return (
    <section className="hero-wrap min-h-[60vh] relative flex flex-col items-center justify-center py-16 px-4">
      <div className="hero-bg absolute inset-0" aria-hidden />
      <div className="relative z-10 max-w-5xl w-full text-center">
  <h1 className="hero-title mb-4 hover:scale-105 hover:drop-shadow-lg transition-transform duration-200 cursor-pointer">Our Products</h1>
  <p className="mb-10 text-lg text-neutral-700 hover:text-pink-600 transition-colors duration-200 cursor-pointer">Discover the science and flavor behind every BMORE gummy.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
