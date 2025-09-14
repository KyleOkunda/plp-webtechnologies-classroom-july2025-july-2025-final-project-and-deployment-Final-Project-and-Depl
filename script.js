// ===== Responsive Navigation Toggle =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ===== Accordion for Services Page =====
const accordions = document.querySelectorAll(".accordion-toggle");
accordions.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// ===== Contact Form Validation =====
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      formMsg.textContent = "✅ Thank you! Your message has been sent.";
      formMsg.style.color = "green";
      contactForm.reset();
    } else {
      formMsg.textContent = "❌ Please fill out all fields.";
      formMsg.style.color = "red";
    }
  });
}
