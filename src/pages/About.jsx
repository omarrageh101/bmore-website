import { useState } from "react";

const overview = `Bmore Gummies – Wellness That Tastes Amazing\nExperience the perfect blend of science and flavor with Bmore Gummies, crafted to support your daily health goals. Packed with essential vitamins, minerals, and functional ingredients, our gummies help you boost energy, improve skin, strengthen immunity, and balance your wellness—all in one tasty bite. Proudly made for the Canadian lifestyle, Bmore is your go-to choice for easy, enjoyable self-care.`;

const location = {
  address: "Prince Abelaziz ben musaid street, Riyadh 12232, Riyadh, Saudi Arabia, 23451, SA",
  industry: "Retail Health and Personal Care Products",
  size: "11-50 employees",
  founded: "2025"
};

export default function About() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="container py-12 max-w-4xl mx-auto animate-fade-in space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight animate-hero-gradient bg-gradient-to-r from-brand to-pink-400 bg-clip-text text-transparent mb-2">About BMORE</h1>
        <p className="text-lg opacity-80 whitespace-pre-line animate-fade-in-slow">{overview}</p>
      </section>
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform animate-fade-in">
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
      <section className="text-center">
        <button
          className="bg-black text-white px-6 py-2 rounded-xl font-semibold hover:bg-brand transition mb-6"
          onClick={() => setShowMore((v) => !v)}
        >
          {showMore ? "Show Less" : "Read More"}
        </button>
        {showMore && (
          <div className="space-y-4 animate-fade-in">
            <p>BMORE is committed to providing real product photos, honest information, and a customer-first approach. We never make medical claims and always include a dietary supplement disclaimer.</p>
            <p>Our team is passionate about wellness, design, and transparency. We believe in empowering you to make informed choices for your health and beauty.</p>
          </div>
        )}
      </section>
      <div className="mt-10 text-center">
        <a href="/contact" className="inline-block bg-brand text-white px-8 py-3 rounded-2xl font-bold text-lg shadow hover:scale-105 transition-transform">Contact Us</a>
      </div>
    </div>
  );
}
