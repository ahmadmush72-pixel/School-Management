// ==========================================
// Sky Hawk - School Management System
// Simple JavaScript for Navbar Interactions
// ==========================================

// 1. Get Elements from the HTML
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const menuClose = document.getElementById('menuClose');
const navLinks = document.querySelectorAll('.nav-link');
const menuAuthLinks = document.querySelectorAll('.menu-auth a');

// 2. Toggle Mobile Navigation Menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close dropdown with the X icon
menuClose.addEventListener('click', () => {
  navMenu.classList.remove('open');
});

// 3. Handle Active Link Switching & Close Mobile Menu on Click
navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    // Remove "active" from all links
    navLinks.forEach((item) => item.classList.remove('active'));

    // Add "active" to the clicked link
    this.classList.add('active');

    // Close the mobile menu after clicking
    navMenu.classList.remove('open');
  });
});

// Close mobile menu after Login / Register
menuAuthLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});
