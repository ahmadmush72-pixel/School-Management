// ==========================================
// Sky Hawk - School Management System
// Simple JavaScript for Navbar Interactions
// ==========================================

// 1. Get Elements from the HTML
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const menuClose = document.getElementById("menuClose");
const navLinks = document.querySelectorAll(".nav-link");
const menuAuthLinks = document.querySelectorAll(".menu-auth a");

// 2. Toggle Mobile Navigation Menu
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Close dropdown with the X icon
menuClose.addEventListener("click", () => {
  navMenu.classList.remove("open");
});

// 3. Handle Active Link Switching & Close Mobile Menu on Click
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove "active" from all links
    navLinks.forEach((item) => item.classList.remove("active"));

    // Add "active" to the clicked link
    this.classList.add("active");

    // Close the mobile menu after clicking
    navMenu.classList.remove("open");
  });
});

// Close mobile menu after Login / Register
menuAuthLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// 4. Testimonials Slider
const slides = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot-btn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentSlide = 0;

// Show one slide and highlight its dot
function showSlide(index) {
  // Loop around: after the last slide go to the first, and the opposite
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

// Clicking a dot jumps to that slide
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

// 5. Contact & Newsletter Forms
// (No backend yet: we just show a thank-you message and clear the form)
const demoForms = document.querySelectorAll(".demo-form");

demoForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the page from reloading
    form.reset();
    form.querySelector(".form-msg").classList.add("show");
  });
});
