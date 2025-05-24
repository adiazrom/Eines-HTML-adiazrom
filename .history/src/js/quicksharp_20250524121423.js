const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { name: 'logo-343.png', width: 343, height: 80 },
  { name: 'logo-1029.png', width: 1029, height: 240 },
];

// Carpeta d'entrada (on està la imatge original)
const inputDir = path.join(__dirname, '..', 'img');
// Carpeta de sortida (on guardarem les versions redimensionades)
const outputDir = path.join(__dirname, '..', 'dist', 'img-opt');

// Crear carpeta de sortida si no existeix
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

sizes.forEach(img => {
  const inputPath = path.join(inputDir, '219465602-bigger.png');
  const outputPath = path.join(outputDir, img.name);

  sharp(inputPath)
    .resize(img.width, img.height)
    .toFile(outputPath)
    .then(() => console.log(`Imatge creada: ${outputPath}`))
    .catch(err => console.error('Error processant la imatge:', err));
});
