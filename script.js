
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#111";
  } else {
    navbar.style.background = "#0b0b0b";
  }
});
