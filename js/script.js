'use strict';

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}


const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});




// Initialize EmailJS with your user ID
(function() {
  emailjs.init("ziL9YaTN8_R6YG-Op"); // Correct EmailJS user ID
})();

document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.getElementById('newsletter-form');
  const contactForm = document.getElementById('contact-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      emailjs.send("service_nfj388d", "template_4nwfvlf", {
        from_email: "flite@gmail.com",
        to_email: email,
        subject: 'Subscription Confirmation',
        message: 'Thank you for subscribing to our newsletter!'
      }).then(function(response) {
        console.log('Success:', response.status, response.text);
        alert('Subscription successful! Please check your email.');
      }, function(error) {
        console.error('Failed to send email:', error);
        alert('There was an error. Please try again.');
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('message').value;
      emailjs.send("service_nfj388d", "template_mgj6in3", {
        from_name: name,
        from_email: email,
        to_email: "flite@gmail.com",
        subject: 'New Contact Form Submission',
        message: message
      }).then(function(response) {
        console.log('Success:', response.status, response.text);
        alert('Message sent successfully! We will get back to you soon.');
      }, function(error) {
        console.error('Failed to send message:', error);
        alert('There was an error. Please try again.');
      });
    });
  }
});
