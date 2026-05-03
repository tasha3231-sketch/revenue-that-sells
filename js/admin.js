import { cases } from "../data/cases.js";

const loginScreen = document.getElementById("login-screen");
const adminPanel = document.getElementById("admin-panel");
const demoLoginButton = document.getElementById("demo-login");
const ownerForm = document.getElementById("owner-form");
const ownerLoginInput = document.getElementById("owner-login");
const ownerPasswordInput = document.getElementById("owner-password");
const loginError = document.getElementById("login-error");
const modeLabel = document.getElementById("mode-label");
const logoutButton = document.getElementById("logout");
const adminCasesList = document.getElementById("admin-cases-list");

const OWNER_LOGIN = "admin";
const OWNER_PASSWORD = "rts-owner-2026";

function openAdminPanel(mode) {
  loginScreen.classList.add("hidden");
  adminPanel.classList.remove("hidden");

  if (mode === "demo") {
    modeLabel.textContent = "Демо-режим";
  } else {
    modeLabel.textContent = "Полный доступ владельца";
  }

  renderAdminCases(mode);
}

function closeAdminPanel() {
  adminPanel.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  ownerForm.reset();
  loginError.textContent = "";
}

function renderAdminCases(mode = "demo") {
  if (!adminCasesList) return;

  adminCasesList.innerHTML = cases
    .map(
      (caseItem) => `
        <article class="admin-case-item">
          <img src="${caseItem.after}" alt="${caseItem.type}" />
          <div>
            <h3>${caseItem.type}</h3>
            <p>${caseItem.title}</p>
          </div>
          <button type="button" ${mode === "demo" ? "disabled" : ""}>
            ${mode === "demo" ? "Демо" : "Редактировать"}
          </button>
        </article>
      `
    )
    .join("");
}

if (demoLoginButton) {
  demoLoginButton.addEventListener("click", () => {
    openAdminPanel("demo");
  });
}

if (ownerForm) {
  ownerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const login = ownerLoginInput.value.trim();
    const password = ownerPasswordInput.value.trim();

    if (login === OWNER_LOGIN && password === OWNER_PASSWORD) {
      openAdminPanel("owner");
    } else {
      loginError.textContent = "Неверный логин или пароль";
    }
  });
}

if (logoutButton) {
  logoutButton.addEventListener("click", closeAdminPanel);
}

const navButtons = document.querySelectorAll(".admin-nav button");
const tabContents = document.querySelectorAll(".tab-content");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.tab;

    navButtons.forEach((navButton) => navButton.classList.remove("active"));
    button.classList.add("active");

    tabContents.forEach((tab) => {
      if (tab.id === targetId) {
        tab.classList.remove("hidden");
      } else {
        tab.classList.add("hidden");
      }
    });
  });
});
