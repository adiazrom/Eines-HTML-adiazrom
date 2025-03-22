console.log("Hello from script.js");

let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".top-nav");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    }
    );

});


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
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