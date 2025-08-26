export default function NotFound() {
  return (
    <div className="container py-20 flex flex-col items-center justify-center animate-fade-in">
      <div className="text-7xl font-extrabold text-brand mb-4 animate-bounce">404</div>
      <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
      <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
  <a className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-110 hover:bg-neutral-900 hover:shadow-xl transition-transform duration-200" href="/">Go Home</a>
    </div>
  );
}
