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

