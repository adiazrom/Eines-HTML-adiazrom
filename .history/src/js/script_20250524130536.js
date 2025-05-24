import "../css/styles.css";
/*import 'core-js/stable';
import 'regenerator-runtime/runtime';*/


let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", function () {
   
/*
   // Navigation buttons
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  // Only add listeners if the buttons exist
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => plusSlides(-1));
    nextBtn.addEventListener("click", () => plusSlides(1));

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        plusSlides(-1);
      } else if (event.key === "ArrowRight") {
        plusSlides(1);
      }
    });
  }
*/

  // Facade per YouTube
  const facades = document.querySelectorAll(".youtube-facade");

  facades.forEach(facade => {
    facade.addEventListener("click", function () {
      const videoId = this.dataset.videoId;
      const iframe = document.createElement("iframe");
      iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);
      iframe.setAttribute("title", "YouTube video player");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");

      this.replaceWith(iframe);
    });
  });
});