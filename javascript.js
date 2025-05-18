document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const body = document.body;

  function updateBackground() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    const scrollPercent = scrollPosition / (documentHeight - windowHeight);

    body.classList.remove(
      "scroll-depth-0",
      "scroll-depth-1",
      "scroll-depth-2",
      "scroll-depth-3"
    );

    if (scrollPercent < 0.25) {
      body.classList.add("scroll-depth-0");
    } else if (scrollPercent < 0.5) {
      body.classList.add("scroll-depth-1");
    } else if (scrollPercent < 0.75) {
      body.classList.add("scroll-depth-2");
    } else {
      body.classList.add("scroll-depth-3");
    }
  }

  window.addEventListener("scroll", updateBackground);

  //
  updateBackground();
});
