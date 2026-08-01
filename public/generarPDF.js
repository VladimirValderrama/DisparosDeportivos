const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();

  // Abre parquemet.html
  const ruta = "file://" + path.join(__dirname, "parquemet.html");

  await page.goto(ruta, {
    waitUntil: "networkidle0"
  });

  // Genera el PDF
  await page.pdf({
    path: "parquemet.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "15mm",
      right: "15mm",
      bottom: "15mm",
      left: "15mm"
    }
  });

  await browser.close();

  console.log("✅ PDF generado: parquemet.pdf");
})();