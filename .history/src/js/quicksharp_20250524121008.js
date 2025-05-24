const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const sizes = [
  { name: 'logo-343.png', width: 343, height: 80 },
  { name: 'logo-1029.png', width: 1029, height: 240 },
];

sizes.forEach(img => {
  sharp('src/img/219465602-bigger.png')
    .resize(img.width, img.height)
    .toFile(`dist/img/${img.name}`);
});
