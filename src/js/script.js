import "../css/styles.css";
import 'core-js/stable';
import 'regenerator-runtime/runtime';


let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
  document.querySelector(".next").addEventListener("click", () => plusSlides(1));

  document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
          plusSlides(-1);
      } else if (event.key === "ArrowRight") {
          plusSlides(1);
      }
  });
});



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("featured-preview");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".top-nav");

  // Ensure the elements exist before adding event listeners
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        // Only toggle the menu on mobile screens
        if (window.innerWidth < 768) {
            navMenu.classList.toggle("active"); // Toggle the "active" class
        }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get current path depth
  let depth = window.location.pathname.split("/").length - 2; // Adjust if needed
  let prefix = depth > 0 ? "../".repeat(depth) : "./";

  // Fetch the header and footer HTML files asynchronously
  Promise.all([
    fetch(prefix + "header.html").then(response => response.text()),
    fetch(prefix + "footer.html").then(response => response.text())
  ])
  .then(([headerData, footerData]) => {
    document.getElementById("header").innerHTML = headerData;
    document.getElementById("footer").innerHTML = footerData;
  })
  .catch(error => console.log("Error loading header or footer:", error));
});

// Script to optimize images with sharp
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Define the input and output directories
const inputDir = path.join(__dirname, 'img');
const outputDir = path.join(__dirname, 'img-opt');

// Make sure the output directory exists, if not, create it
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Function to optimize the image and save it in multiple formats
function optimizeImage(inputPath, fileName) {
  const outputWebp = path.join(outputDir, fileName.replace('.jpg', '.webp'));
  const outputAvif = path.join(outputDir, fileName.replace('.jpg', '.avif'));

  sharp(inputPath)
    .webp({ quality: 80 }) // Convert to webp with quality 80
    .toFile(outputWebp, (err, info) => {
      if (err) {
        console.error('Error during optimization (WebP)', err);
      } else {
        console.log(`WebP Image optimized: ${info}`);
      }
    });

  sharp(inputPath)
    .avif({ quality: 80 }) // Convert to avif with quality 80
    .toFile(outputAvif, (err, info) => {
      if (err) {
        console.error('Error during optimization (AVIF)', err);
      } else {
        console.log(`AVIF Image optimized: ${info}`);
      }
    });
}

// Loop through all the images in the 'img' directory
fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith('.jpg')) {  // You can add other formats here (e.g., png)
    const inputPath = path.join(inputDir, file);
    optimizeImage(inputPath, file);
  }
});



