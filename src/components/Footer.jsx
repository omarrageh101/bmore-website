import site from "../data/site.json";

export default function Footer() {
  return (
    <footer className="footer-surface border-t text-neutral-800">
      <div className="footer-blob pink" aria-hidden />
      <div className="footer-blob blue" aria-hidden />

      {/* SAME SHELL AS HEADER */}
      <div className="shell-full py-10 relative">
        {/* 3 columns; brand column left, policies right */}
        <div className="grid gap-6 md:grid-cols-[minmax(90px,auto)_1fr_auto] items-start">
          {/* Col 1: brand logo, left-aligned like header, with copyright below */}
          <div className="flex flex-col items-start justify-start">
            <span className="font-extrabold tracking-wide brand-gradient text-2xl md:text-3xl leading-tight">
              BMORE
            </span>
            <p className="mt-3 text-neutral-700 text-left">© {new Date().getFullYear()} BMORE.</p>
          </div>

          {/* Col 2: company info, centered horizontally */}
          <div className="space-y-1 flex flex-col items-center text-center">
            <div className="text-neutral-900 font-medium">
              Brand owner: {site.legalEntityEN}
            </div>
            <div>
              Email:{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-4 hover:text-neutral-950 hover:bg-neutral-100 px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60 font-medium transition-colors duration-200"
              >
                {site.email}
              </a>
            </div>
            {site.founded && <div className="text-neutral-700">Founded: {site.founded}</div>}
          </div>

          {/* Col 3: policy links (right aligned on desktop) */}
          <nav className="flex gap-7 md:justify-end">
            <a
              href="/policies/privacy"
              className="nav-link px-3 py-2 rounded-md hover:underline underline-offset-4 hover:bg-neutral-100 hover:scale-105 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60 text-base font-semibold transition duration-200"
            >
              Privacy
            </a>
            <a
              href="/policies/terms"
              className="nav-link px-3 py-2 rounded-md hover:underline underline-offset-4 hover:bg-neutral-100 hover:scale-105 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60 text-base font-semibold transition duration-200"
            >
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
