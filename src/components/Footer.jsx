import site from "../data/site.json";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container py-8 text-sm">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-wide">BMORE</span>
          </div>
          <div>
            <div>{site.legalEntityEN}</div>
            <div>Email: <a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div>Phone: {site.phone}</div>
          </div>
          <div className="flex gap-4">
            <a href="/policies/privacy">Privacy</a>
            <a href="/policies/terms">Terms</a>
            <a href="/policies/returns">Returns</a>
          </div>
        </div>
        <p className="mt-4 opacity-60">© {new Date().getFullYear()} BMORE.</p>
      </div>
    </footer>
  );
}
