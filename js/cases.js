const casesContainer = document.getElementById("cases-container");

function createAccordionItem(title, content) {
  return `
    <details class="case-accordion-item">
      <summary>${title}</summary>
      <p>${content}</p>
    </details>
  `;
}

function renderCases() {
  casesContainer.innerHTML = cases.map((item) => `
    <article class="case-card reveal">
      <div class="case-heading">
        <p>${item.type}</p>
        <h3>${item.title}</h3>
      </div>

      <div class="before-after" data-slider>
        <img src="${item.after}" alt="${item.type} после" class="after-img">
        <div class="before-layer" style="width: 50%;">
          <img src="${item.before}" alt="${item.type} до" class="before-img">
        </div>
        <input type="range" min="0" max="100" value="50" class="ba-range" aria-label="Сравнить до и после">
        <div class="ba-line" style="left: 50%;"></div>
        <div class="ba-handle" style="left: 50%;">↔</div>
        <span class="ba-label ba-before">До</span>
        <span class="ba-label ba-after">После</span>
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
        ${createAccordionItem("Задача", item.task)}
        ${createAccordionItem("Что предложили", item.solution)}
        ${createAccordionItem("Как усилили", item.upgrade)}
        ${createAccordionItem("Где оптимизировали", item.economy)}
        ${createAccordionItem("Почему так", item.why)}
        ${createAccordionItem("Результат", item.result)}
      </div>
    </article>
  `).join("");

  initBeforeAfterSliders();
}

function initBeforeAfterSliders() {
  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const range = slider.querySelector(".ba-range");
    const beforeLayer = slider.querySelector(".before-layer");
    const line = slider.querySelector(".ba-line");
    const handle = slider.querySelector(".ba-handle");

    range.addEventListener("input", (event) => {
      const value = event.target.value;
      beforeLayer.style.width = `${value}%`;
      line.style.left = `${value}%`;
      handle.style.left = `${value}%`;
    });
  });
}

renderCases();