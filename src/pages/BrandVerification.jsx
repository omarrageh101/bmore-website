import products from "../data/products.json";
import site from "../data/site.json";

export default function BrandVerification() {
  return (
    <div className="container py-10 space-y-4">
      <h1 className="text-2xl font-bold">Brand Verification (Noon)</h1>
      <p><span className="font-bold text-lg tracking-wide">BMORE</span> brand website with real product images, owner details, and product information.</p>
      <div className="border rounded-2xl p-4">
        <h2 className="font-semibold mb-2">Company</h2>
        <div>Owner: {site.legalEntityEN}</div>
        <div>Email: {site.email}</div>
        <div>Phone: {site.phone}</div>
      </div>
      <div className="border rounded-2xl p-4">
        <h2 className="font-semibold mb-2">Products</h2>
        <ul className="list-disc pl-5">
          {products.map((p) => (
            <li key={p.slug}><a className="underline" href={`/products/${p.slug}`}>{p.nameEN}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
