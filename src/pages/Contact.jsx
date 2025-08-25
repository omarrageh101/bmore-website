const location = {
  address: "Prince Abelaziz ben musaid street, Riyadh 12232, Riyadh, Saudi Arabia, 23451, SA",
  industry: "Retail Health and Personal Care Products",
  size: "11-50 employees",
  founded: "2025"
};

export default function Contact() {
  return (
    <div className="container py-12 max-w-3xl mx-auto animate-fade-in space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight animate-hero-gradient bg-gradient-to-r from-brand to-pink-400 bg-clip-text text-transparent mb-2">Contact & B2B</h1>
        <p className="text-lg opacity-80 animate-fade-in-slow">We'd love to hear from you! For wholesale, export, or general inquiries, use the form below or email us directly.</p>
      </section>
      <form
        method="POST"
        action="https://formspree.io/f/your-id"
        className="grid gap-4 bg-white rounded-2xl shadow-lg p-8 animate-fade-in"
      >
        <input name="name" placeholder="Name" className="border p-3 rounded-xl focus:ring-2 focus:ring-brand transition" required />
        <input name="email" type="email" placeholder="Email" className="border p-3 rounded-xl focus:ring-2 focus:ring-brand transition" required />
        <input name="company" placeholder="Company" className="border p-3 rounded-xl focus:ring-2 focus:ring-brand transition" />
        <select name="purpose" className="border p-3 rounded-xl focus:ring-2 focus:ring-brand transition">
          <option>Retail</option><option>Pharmacy</option><option>Distributor</option><option>Private Label</option>
        </select>
        <textarea name="message" placeholder="Message" className="border p-3 rounded-xl focus:ring-2 focus:ring-brand transition" rows="5"></textarea>
        <button className="bg-black text-white px-8 py-3 rounded-2xl font-bold text-lg shadow hover:scale-105 transition-transform">Send</button>
      </form>
      <div className="bg-brand/10 rounded-2xl p-6 shadow text-brand font-bold text-lg animate-bounce-in text-center">
        Or email: <a href="mailto:contact@bmore-brand.com" className="underline">contact@bmore-brand.com</a>
      </div>
      <section className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
        <h2 className="font-bold text-xl mb-2 flex items-center gap-2"><span role="img" aria-label="location">📍</span> Headquarters</h2>
        <p className="mb-2">{location.address}</p>
        <div className="text-sm opacity-70">
          <div><b>Industry:</b> {location.industry}</div>
          <div><b>Company size:</b> {location.size}</div>
          <div><b>Founded:</b> {location.founded}</div>
        </div>
      </section>
    </div>
  );
}
