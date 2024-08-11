'use strict';

const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password validation (minimum 4 characters)
const passwordRegex = /.{4,}/;

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// Handle Sign Up Form Submission
document.querySelector(".sign-up-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = this.querySelector("input[type='text']").value;
  const email = this.querySelector("input[type='email']").value;
  const password = this.querySelector("input[type='password']").value;

  // Validate email and password
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Password must be at least 4 characters long.");
    return;
  }

  // If validation passes
  alert("Sign Up Successful!");

  // Clear fields
  this.reset();
});

// Handle Sign In Form Submission
document.querySelector(".sign-in-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.querySelector("input[type='text']").value;
  const password = this.querySelector("input[type='password']").value;

  // Validate password
  if (!passwordRegex.test(password)) {
    alert("Password must be at least 4 characters long.");
    return;
  }

  // If validation passes
  alert("Sign In Successful!");

  // Clear fields
  this.reset();
});
