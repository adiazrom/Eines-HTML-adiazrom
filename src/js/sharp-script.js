// Script to optimize images with sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to optimize images
function optimizeImages() {
  const inputDir = path.join(__dirname, '..', 'img');
  const outputDir = path.join(__dirname, '..', 'img-opt');
  
  // Ensure the output folder exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Function to optimize image to WebP and AVIF
  function processImage(inputPath, fileName) {
    const outputWebp = path.join(outputDir, fileName.replace('.jpg', '.webp'));
    const outputAvif = path.join(outputDir, fileName.replace('.jpg', '.avif'));

    // Get image metadata to maintain aspect ratio
    sharp(inputPath)
      .metadata()
      .then(metadata => {
        // Process WebP
        sharp(inputPath)
          .resize({
            width: 800, // Adjust the width as needed
            height: Math.round(800 * metadata.height / metadata.width), // Maintain aspect ratio
            fit: sharp.fit.inside // Make sure image fits within the specified dimensions
          })
          .webp({ quality: 80 })
          .toFile(outputWebp, (err, info) => {
            if (err) console.error('Error during WebP optimization', err);
            else console.log(`WebP optimized: ${info}`);
          });

        // Process AVIF
        sharp(inputPath)
          .resize({
            width: 800, // Adjust the width as needed
            height: Math.round(800 * metadata.height / metadata.width), // Maintain aspect ratio
            fit: sharp.fit.inside // Make sure image fits within the specified dimensions
          })
          .avif({ quality: 80 })
          .toFile(outputAvif, (err, info) => {
            if (err) console.error('Error during AVIF optimization', err);
            else console.log(`AVIF optimized: ${info}`);
          });
      })
      .catch(err => {
        console.error('Error getting image metadata:', err);
      });
  }

  // Iterate over images in the 'img' directory
  fs.readdirSync(inputDir).forEach(file => {
    if (file.endsWith('.jpg')) {
      const inputPath = path.join(inputDir, file);
      processImage(inputPath, file);
    }
  });
}

// Call the function to optimize images
optimizeImages();
