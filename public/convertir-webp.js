const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const carpetaImagenes = './img'; // Cambia esto según tu carpeta

fs.readdirSync(carpetaImagenes).forEach(file => {
    if (/\.(jpg|jpeg|png)$/i.test(file)) {
        const inputPath = path.join(carpetaImagenes, file);
        const outputPath = path.join(carpetaImagenes, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

        sharp(inputPath)
            .toFormat('webp')
            .toFile(outputPath, (err, info) => {
                if (err) console.error(`Error al convertir ${file}:`, err);
                else console.log(`Convertido: ${file} → ${outputPath}`);
            });
    }
});
