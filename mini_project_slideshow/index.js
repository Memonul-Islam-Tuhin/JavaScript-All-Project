const slides = document.querySelectorAll(".slideshow-element");

let currentIndex = 0;

setInterval(() => {
  // Hide current slide
  slides[currentIndex].classList.remove("opacity-100", "scale-100", "current");

  slides[currentIndex].classList.add(
    "opacity-0",
    "scale-95",
    "pointer-events-none",
  );

  // Next slide
  currentIndex++;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  // Show next slide
  slides[currentIndex].classList.remove(
    "opacity-0",
    "scale-95",
    "pointer-events-none",
  );

  slides[currentIndex].classList.add("opacity-100", "scale-100", "current");
}, 3000);
