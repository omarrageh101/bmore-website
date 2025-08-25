import { useParams } from "react-router-dom";
import products from "../data/products.json";
import site from "../data/site.json";
import Gallery from "../components/Gallery.jsx";
import { useEffect } from "react";

export default function Product() {
  const { slug } = useParams();
  const p = products.find((x) => x.slug === slug);

  useEffect(() => {
    if (!p) return;
    const ld = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.nameEN,
      image: p.images.map((i) => `/images/${i}`),
      brand: { "@type": "Brand", name: "BMORE" },
      sku: p.sku,
      gtin: p.gtin,
      description: p.shortEN,
      offers: { "@type": "Offer", availability: "https://schema.org/InStock", price: "0.00", priceCurrency: "USD" }
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = JSON.stringify(ld);
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, [p]);

  if (!p) return <div className="container py-10">Not found.</div>;

  return (
    <div className="container py-10 space-y-8">
      <header className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2"><Gallery product={p} /></div>
        <div className="md:w-1/2 space-y-3">
          <h1 className="text-2xl font-bold">{p.nameEN}</h1>
          <p className="opacity-70">{p.shortEN}</p>
          <div className="text-sm opacity-70">{p.count} Gummies • Flavor: {p.flavor}</div>
          <div className="flex gap-2">
            <a href="#" className="px-4 py-2 rounded-xl border">Buy on Noon</a>
            <a href="/contact" className="px-4 py-2 rounded-xl bg-black text-white">Wholesale & Export</a>
          </div>
          <div>
            <h3 className="font-semibold mt-4 mb-2">What’s Inside</h3>
            <ul className="list-disc pl-5">{p.insideEN.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <h3 className="font-semibold mt-4 mb-2">How to Use</h3>
            <p>{p.directionsEN}</p>
          </div>
          <p className="text-xs opacity-60 mt-3">SKU: {p.sku} • GTIN: {p.gtin}</p>
          <div className="text-xs opacity-60">
            Origin: {p.origin} • Net weight: {p.netWeight}
          </div>
          <p className="text-xs opacity-60 mt-2">
            Not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </header>

      <section className="border rounded-2xl p-4 text-sm">
        <h3 className="font-semibold mb-2">Noon facts</h3>
        <div className="grid md:grid-cols-2 gap-2">
          <div>Brand: BMORE</div>
          <div>Owner: {site.legalEntityEN}</div>
          <div>Category: Functional Gummies</div>
          <div>Pack size: {p.count} gummies</div>
        </div>
      </section>
    </div>
  );
}
