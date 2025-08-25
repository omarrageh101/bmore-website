export default function Gallery({ product }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {product.images.map((img, i) => (
        <img
          key={i}
          src={`/images/${img}`}
          alt={`${product.nameEN} ${i + 1}`}
          loading="lazy"
          className="rounded-xl border object-cover w-full"
        />
      ))}
    </div>
  );
}
