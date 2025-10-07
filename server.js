// =====================
// HERO SLIDESHOW
// =====================
let slideIndex = 0;
const slides = document.querySelectorAll(".hero-slideshow .slide");

function showSlides() {
  slides.forEach((slide) => (slide.classList.remove("active")));
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 5000); // change slide every 5 seconds
}

// Initialize slideshow
if (slides.length > 0) {
  showSlides();
}

// =====================
// DARK/LIGHT MODE TOGGLE
// =====================
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Optional: Save preference to localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// =====================
// BACK TO TOP BUTTON
// =====================
const backToTop = document.getElementById("back-to-top");
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show button when scrolled down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
