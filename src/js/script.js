import "../css/styles.css";

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

  // Ensure that the elements exist before adding event listeners
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        if (window.innerWidth < 768) {
            navMenu.classList.toggle("active");
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