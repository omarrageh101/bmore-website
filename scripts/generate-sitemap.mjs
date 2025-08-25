import fs from "node:fs";
import path from "node:path";
import products from "../src/data/products.json" assert { type: "json" };

const base = "https://example.com"; // <-- change after deploying
const staticRoutes = [
  "/", "/products", "/about", "/quality", "/contact",
  "/policies/privacy", "/policies/terms", "/policies/returns",
  "/brand-verification"
];
const productRoutes = products.map((p) => `/products/${p.slug}`);
const urls = [...staticRoutes, ...productRoutes];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${base}${u}</loc></url>`).join("\n") +
  `\n</urlset>\n`;

fs.writeFileSync(path.join("dist", "sitemap.xml"), xml, "utf8");
console.log("✔ sitemap.xml generated");
