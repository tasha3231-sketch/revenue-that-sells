// CASES RENDER + SLIDER + ACCORDION

import { cases } from "../data/cases.js";

const container = document.querySelector(".cases-container");

function createCaseCard(caseItem) {
  return `
    <div class="case-card">

      <div class="case-heading">
        <p>${caseItem.type}</p>
        <h3>${caseItem.title}</h3>
      </div>

      <div class="before-after" data-slider>
        <img src="${caseItem.after}" class="after-img" />

        <div class="before-layer">
          <img src="${caseItem.before}" class="before-img" />
        </div>

        <input type="range" min="0" max="100" value="50" class="ba-range" />

        <div class="ba-line"></div>
        <div class="ba-handle">↔</div>

        <div class="ba-label ba-before">До</div>
        <div class="ba-label ba-after">После</div>
      </div>

      <div class="case-extra-grid">
        <div class="case-placeholder">
          <div class="placeholder-content">
            <div class="placeholder-title">Готовим фото для этого кейса</div>
            <div class="placeholder-subtitle">скоро покажем детали</div>
          </div>
        </div>

        <div class="case-placeholder">
          <div class="placeholder-content">
            <div class="placeholder-title">Готовим фото для этого кейса</div>
            <div class="placeholder-subtitle">скоро покажем детали</div>
          </div>
        </div>
      </div>

      <div class="case-accordion">

        <details class="case-accordion-item">
          <summary>Задача</summary>
          <p>${caseItem.task}</p>
        </details>

        <details class="case-accordion-item">
          <summary>Решение</summary>
          <p>${caseItem.solution}</p>
        </details>

        <details class="case-accordion-item">
          <summary>Усиление</summary>
          <p>${caseItem.upgrade}</p>
        </details>

        <details class="case-accordion-item">
          <summary>Почему это работает</summary>
          <p>${caseItem.why}</p>
        </details>

        <details class="case-accordion-item">
          <summary>Результат</summary>
          <p>${caseItem.result}</p>
        </details>

      </div>

    </div>
  `;
}

function renderCases() {
  container.innerHTML = cases.map(createCaseCard).join("");
  initSliders();
}

function initSliders() {
  const sliders = document.querySelectorAll("[data-slider]");

  sliders.forEach(slider => {
    const range = slider.querySelector(".ba-range");
    const beforeLayer = slider.querySelector(".before-layer");

    function updateSlider(value) {
      slider.style.setProperty("--slider-position", value + "%");
      beforeLayer.style.width = value + "%";
    }

    range.addEventListener("input", e => {
      updateSlider(e.target.value);
    });

    // drag support
    let isDragging = false;

    slider.addEventListener("mousedown", () => isDragging = true);
    window.addEventListener("mouseup", () => isDragging = false);

    slider.addEventListener("mousemove", e => {
      if (!isDragging) return;

      const rect = slider.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percent = (offsetX / rect.width) * 100;

      updateSlider(Math.max(0, Math.min(100, percent)));
    });
  });
}

renderCases();
