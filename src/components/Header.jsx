import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/quality", label: "Quality" },
    { to: "/contact", label: "Contact" }
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container flex items-center gap-4 py-3">
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
      </div>
    </header>
  );
}
