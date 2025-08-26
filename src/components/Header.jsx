import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/quality", label: "Quality" },
    { to: "/contact", label: "Contact" }
  ];
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container flex items-center gap-4 py-3 relative">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold tracking-wide text-lg">BMORE</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-5">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `hover:opacity-100 opacity-70 ${isActive ? "font-semibold" : ""}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        {/* Mobile menu button */}
        <button
          className="ml-auto md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open navigation menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile nav */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl flex flex-col items-center py-4 animate-fade-in md:hidden z-50">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `block w-full text-center py-2 px-4 hover:bg-brand/10 ${isActive ? "font-semibold text-brand" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
