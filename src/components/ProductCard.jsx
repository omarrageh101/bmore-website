import { Link } from "react-router-dom";

export default function ProductCard({ p }) {
  return (
    <Link
      to={`/products/${p.slug}`}
  className="rounded-2xl border hover:shadow-xl hover:scale-105 transition-transform duration-300 block overflow-hidden cursor-pointer"
      style={{ borderColor: p.accent }}
    >
      <img
        src={`/images/${p.images[0]}`}
        alt={p.nameEN}
        loading="lazy"
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">{p.nameEN}</h3>
        <p className="text-sm opacity-70">{p.shortEN}</p>
        <div className="mt-2 text-xs opacity-70">{p.count} Gummies • {p.flavor}</div>
      </div>
    </Link>
  );
}
