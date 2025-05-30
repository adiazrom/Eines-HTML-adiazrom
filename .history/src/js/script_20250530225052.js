document.addEventListener("DOMContentLoaded", function () {

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
      iframe.setAttribute("loading", "lazy");

      this.replaceWith(iframe);
    });
  });
});

window.addEventListener('load', () => {
  document.querySelector('.parallaxwave > use:nth-child(1)').style.animationPlayState = 'running';
  document.querySelector('.parallaxwave > use:nth-child(2)').style.animationPlayState = 'running';
});