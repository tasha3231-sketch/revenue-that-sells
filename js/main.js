const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

const faqContainer = document.getElementById("faq-container");
if (faqContainer) {
  faqContainer.innerHTML = faqItems.map((item) => `
    <details class="faq-item">
      <summary>${item.question}</summary>
      <p>${item.answer}</p>
    </details>
  `).join("");
}

const reviewsContainer = document.getElementById("reviews-container");
if (reviewsContainer) {
  reviewsContainer.innerHTML = reviews.map((review) => `
    <article class="review-card">
      <p>“${review.text}”</p>
      <strong>${review.name}</strong>
    </article>
  `).join("");
}