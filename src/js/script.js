console.log("Hello from script.js");

let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function navigateSlides(event, direction) {
  if (event.key === "ArrowLeft" && direction === -1) {
      plusSlides(-1);
  } else if (event.key === "ArrowRight" && direction === 1) {
      plusSlides(1);
  } else if (event.key === "Enter" || event.key === " ") {
      plusSlides(direction);
  }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("featured-preview");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1
}
  
  if (n < 1) {
    slideIndex = slides.length
}


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".top-nav");

  console.log(menuToggle);  // Check if the element is found
  console.log(navMenu);     // Check if the element is found

  if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", function () {
          console.log("Menu button clicked!");
          if (window.innerWidth < 768) {
              navMenu.classList.toggle("active");
              console.log("Menu toggled, active:", navMenu.classList.contains("active"));
          }
      });
  } else {
      console.log("Elements not found!");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  // Get current path depth
  let depth = window.location.pathname.split("/").length - 2; // Adjust if needed
  let prefix = depth > 0 ? "../".repeat(depth) : "./";

  fetch(prefix + "header.html")
      .then(response => response.text())
      .then(data => document.getElementById("header").innerHTML = data);

  fetch(prefix + "footer.html")
      .then(response => response.text())
      .then(data => document.getElementById("footer").innerHTML = data);
});



