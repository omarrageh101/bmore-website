export default function Returns() {
  return (
    <div className="container py-12 max-w-2xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-extrabold mb-4 tracking-tight flex items-center gap-2">
        <span role="img" aria-label="package">📦</span> Returns & Refunds
      </h1>
      <section className="bg-white rounded-2xl shadow p-6 mb-6">
        <h2 className="font-bold mb-2">Returns</h2>
        <p>Returns are accepted within 14 days of delivery if the product is unopened and in original condition. Contact us for a return authorization.</p>
      </section>
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="font-bold mb-2">Refunds</h2>
        <p>Refunds are processed within 7 business days after we receive and inspect your return. Shipping fees are non-refundable.</p>
      </section>
    </div>
  );
}
