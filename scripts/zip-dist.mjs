import AdmZip from "adm-zip";
const zip = new AdmZip();
zip.addLocalFolder("dist");
zip.writeZip("bmore-dist.zip");
console.log("✔ Created bmore-dist.zip (upload this to Hostinger public_html)");
