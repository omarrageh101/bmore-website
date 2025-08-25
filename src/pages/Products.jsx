import data from "../data/products.json";
import ProductCard from "../components/ProductCard.jsx";
import { useState } from "react";

const overview = `Bmore Gummies – Wellness That Tastes Amazing\nExperience the perfect blend of science and flavor with Bmore Gummies, crafted to support your daily health goals. Packed with essential vitamins, minerals, and functional ingredients, our gummies help you boost energy, improve skin, strengthen immunity, and balance your wellness—all in one tasty bite. Proudly made for the Canadian lifestyle, Bmore is your go-to choice for easy, enjoyable self-care.`;

const features = [
  "✨ Non-GMO",
  "Gluten-Free",
  "No Artificial Colors",
  "Made with Love in Canada 🇨🇦"
];

const location = {
  address: "Prince Abelaziz ben musaid street, Riyadh 12232, Riyadh, Saudi Arabia, 23451, SA",
  industry: "Retail Health and Personal Care Products",
  size: "11-50 employees",
  founded: "2025"
};

export default function Products() {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="container py-12 space-y-12 animate-fade-in">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 animate-hero-gradient bg-gradient-to-r from-brand to-pink-400 bg-clip-text text-transparent">
          Our Products
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-80 whitespace-pre-line animate-fade-in-slow">{overview}</p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {features.map(f => (
            <span key={f} className="inline-block bg-brand/10 text-brand font-semibold px-4 py-2 rounded-full shadow hover:bg-brand hover:text-white transition-colors cursor-pointer animate-bounce-in">
              {f}
            </span>
          ))}
        </div>
      </section>

      <section>
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

      <section className="mt-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
          <h2 className="font-bold text-xl mb-2 flex items-center gap-2"><span role="img" aria-label="location">📍</span> Headquarters</h2>
          <p className="mb-2">{location.address}</p>
          <div className="text-sm opacity-70">
            <div><b>Industry:</b> {location.industry}</div>
            <div><b>Company size:</b> {location.size}</div>
            <div><b>Founded:</b> {location.founded}</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 animate-fade-in-slow">
          <div className="bg-gradient-to-r from-brand to-pink-400 text-white rounded-2xl p-6 shadow-lg text-lg font-semibold animate-pulse">
            Wellness That Tastes Amazing
          </div>
          <div className="bg-brand/10 rounded-2xl p-6 shadow text-brand font-bold text-lg animate-bounce-in">
            Discover the science and flavor behind every BMORE gummy.
          </div>
        </div>
      </section>
    </div>
  );
}
