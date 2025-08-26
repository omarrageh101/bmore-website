import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/quality", label: "Quality" },
    { to: "/contact", label: "Contact" }
  ];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    function onClick(e) {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 header-glass">
  <div className="relative shell-full flex flex-nowrap items-center justify-between py-3">
        {/* Brand left, vertically centered, not stuck to edge */}
  <Link to="/" className="flex items-center">
          <span className="font-extrabold tracking-wide brand-gradient text-2xl md:text-3xl leading-tight">BMORE</span>
        </Link>

        {/* Desktop nav right, vertically centered */}
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                [
                  "nav-link px-3 py-2 rounded-md text-base font-semibold transition",
                  "text-neutral-800 hover:text-neutral-950 hover:bg-neutral-100 hover:scale-105 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60",
                  isActive ? "font-bold text-neutral-950" : ""
                ].join(" ")
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border ml-2"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        {/* Gradient accent line under header */}
        <div className="header-accent absolute left-0 right-0 bottom-0" aria-hidden />
      </div>

      {/* Mobile panel (slight glass look) */}
      {open && (
        <div id="mobile-menu" className="md:hidden px-3 pb-3">
          <div ref={panelRef} className="rounded-xl border bg-white/90 backdrop-blur p-2 shadow-lg flex flex-col">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "nav-link block px-3 py-3 rounded-lg text-base font-semibold transition",
                    "text-neutral-800 hover:bg-neutral-100 hover:text-neutral-950",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60",
                    isActive ? "font-bold text-neutral-950" : ""
                  ].join(" ")
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
