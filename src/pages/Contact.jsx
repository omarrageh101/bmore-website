
const location = {
  address: "Riyadh, Saudi Arabia",
  industry: "Wellness / Supplements",
  size: "11-50 employees",
  founded: "2023"
};

export default function Contact() {
  return (
    <>
      <section className="hero-wrap min-h-[60vh] relative flex flex-col items-center justify-center py-16 px-4">
        <div className="hero-bg absolute inset-0" aria-hidden />
        <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
          <h1 className="hero-title mb-2">Contact Us</h1>
          <p className="text-lg opacity-70 mb-6">We’d love to hear from you. Please fill out the form below.</p>
          <form className="space-y-6 text-left" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold">Name</label>
                <input className="w-full rounded-lg border border-gray-300 px-3 py-2" name="name" required />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input className="w-full rounded-lg border border-gray-300 px-3 py-2" name="email" type="email" required />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-semibold">Company</label>
              <input className="w-full rounded-lg border border-gray-300 px-3 py-2" name="company" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Country</label>
              <input className="w-full rounded-lg border border-gray-300 px-3 py-2" name="country" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Purpose</label>
              <select className="w-full rounded-lg border border-gray-300 px-3 py-2" name="purpose">
                <option>General Inquiry</option>
                <option>Wholesale</option>
                <option>Distribution</option>
                <option>Press</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea className="w-full rounded-lg border border-gray-300 px-3 py-2" name="message" rows={4} required />
            </div>
            <button className="btn-hero w-full md:w-auto" type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto pb-12 max-w-3xl animate-fade-in-slow">
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 animate-fade-in hover:shadow-3xl transition-shadow duration-500">
          <h2 className="font-bold text-xl mb-2 flex items-center gap-2 brand-gradient">
            <span role="img" aria-label="location">📍</span> Headquarters
          </h2>
          <p className="mb-2">{location.address}</p>
          <div className="text-sm opacity-70">
            <div><b>Industry:</b> {location.industry}</div>
            <div><b>Company size:</b> {location.size}</div>
            <div><b>Founded:</b> {location.founded}</div>
          </div>
        </div>
      </section>
    </>
  );
}
