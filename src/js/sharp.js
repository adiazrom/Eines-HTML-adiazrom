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

  // Function to optimize image to WebP, AVIF, and PNG
  function processImage(inputPath, fileName) {
    const fileExtension = path.extname(fileName).toLowerCase();
    
    // Adjust output file names for WebP, AVIF, and PNG
    const outputWebp = path.join(outputDir, fileName.replace(fileExtension, '.webp'));
    const outputAvif = path.join(outputDir, fileName.replace(fileExtension, '.avif'));
    const outputPng = path.join(outputDir, fileName.replace(fileExtension, '.png'));

    // Get image metadata to maintain aspect ratio
    sharp(inputPath)
      .metadata()
      .then(metadata => {
        // Resize to a width of 800px, maintaining aspect ratio
        const resizeOptions = {
          width: 800, // Adjust the width as needed
          height: Math.round(800 * metadata.height / metadata.width), // Maintain aspect ratio
          fit: sharp.fit.inside // Make sure image fits within the specified dimensions
        };

        // Process WebP
        sharp(inputPath)
          .resize(resizeOptions)
          .webp({ quality: 80 })
          .toFile(outputWebp, (err, info) => {
            if (err) console.error('Error during WebP optimization', err);
            else console.log(`WebP optimized: ${info}`);
          });

        // Process AVIF
        sharp(inputPath)
          .resize(resizeOptions)
          .avif({ quality: 80 })
          .toFile(outputAvif, (err, info) => {
            if (err) console.error('Error during AVIF optimization', err);
            else console.log(`AVIF optimized: ${info}`);
          });

        // Process PNG if the input is a PNG file
        if (fileExtension === '.png') {
          sharp(inputPath)
            .resize(resizeOptions)
            .png({ quality: 80 })
            .toFile(outputPng, (err, info) => {
              if (err) console.error('Error during PNG optimization', err);
              else console.log(`PNG optimized: ${info}`);
            });
        }
      })
      .catch(err => {
        console.error('Error getting image metadata:', err);
      });
  }

  // Iterate over images in the 'img' directory
  fs.readdirSync(inputDir).forEach(file => {
    const fileExtension = path.extname(file).toLowerCase();
    // Process only .jpg and .png files
    if (fileExtension === '.jpg' || fileExtension === '.png') {
      const inputPath = path.join(inputDir, file);
      processImage(inputPath, file);
    }
  });
}

// Call the function to optimize images
optimizeImages();
