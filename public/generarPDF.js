const puppeteer = require("puppeteer");
const path = require("path");

(async () => {

    const browser = await puppeteer.launch({
        headless: true
    });

    const page = await browser.newPage();
    page.setDefaultTimeout(120000);

    const htmlPath = path.resolve(__dirname, "parquemet.html");

    console.log("Abriendo:", htmlPath);

    await page.goto(`file://${htmlPath}`, {
        waitUntil: "domcontentloaded",
        timeout: 0
    });

    console.log("HTML cargado");


    // Evita que imágenes lentas bloqueen el PDF
    await page.evaluate(() => {
        document.querySelectorAll("img").forEach(img => {
            img.loading = "eager";
        });
    });


    console.log("Generando PDF...");

await page.pdf({
    path: path.resolve(__dirname, "parquemet.pdf"),
    format: "A4",
    printBackground: true,
    preferCSSPageSize: false,
    margin: {
        top: "15mm",
        bottom: "15mm",
        left: "12mm",
        right: "12mm"
    }
});

    console.log("PDF creado");


    await browser.close();

})();