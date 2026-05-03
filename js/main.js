import { faqItems } from "../data/faq.js";
import { reviews } from "../data/reviews.js";

// REVEAL ANIMATION
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

// MOBILE MENU
const header = document.querySelector(".site-header");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav a");

if (burger && header) {
  burger.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// FAQ ACCORDION
const faqContainer = document.getElementById("faq-container");

if (faqContainer) {
  faqContainer.innerHTML = faqItems
    .map(
      (item) => `
        <details class="faq-item">
          <summary>${item.question}</summary>
          <p>${item.answer}</p>
        </details>
      `
    )
    .join("");
}

// REVIEWS
const reviewsContainer = document.getElementById("reviews-container");

if (reviewsContainer) {
  reviewsContainer.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card">
          <p>“${review.text}”</p>
          <strong>${review.name}</strong>
          <span>${review.role}</span>
        </article>
      `
    )
    .join("");
}

// DEMO FORM
const briefForm = document.getElementById("brief-form");
const formNote = document.getElementById("form-note");

if (briefForm && formNote) {
  briefForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formNote.textContent = "Заявка отправлена. Мы посмотрим задачу и вернёмся с расчётом или уточняющими вопросами.";
    formNote.classList.add("success");
    briefForm.reset();
  });
}
