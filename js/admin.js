const demoLogin = document.getElementById("demo-login");
const ownerForm = document.getElementById("owner-form");
const loginScreen = document.getElementById("login-screen");
const adminPanel = document.getElementById("admin-panel");
const modeLabel = document.getElementById("mode-label");
const loginError = document.getElementById("login-error");
const logout = document.getElementById("logout");

const OWNER_LOGIN = "admin";
const OWNER_PASSWORD = "rts-owner-2026";

function openPanel(mode) {
  loginScreen.classList.add("hidden");
  adminPanel.classList.remove("hidden");
  modeLabel.textContent = mode === "demo" ? "Демо-режим" : "Полный доступ владельца";
  renderAdminCases();
}

demoLogin.addEventListener("click", () => openPanel("demo"));

ownerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const login = document.getElementById("owner-login").value.trim();
  const password = document.getElementById("owner-password").value.trim();

  if (login === OWNER_LOGIN && password === OWNER_PASSWORD) {
    openPanel("owner");
  } else {
    loginError.textContent = "Неверный логин или пароль";
  }
});

logout.addEventListener("click", () => {
  adminPanel.classList.add("hidden");
  loginScreen.classList.remove("hidden");
});

document.querySelectorAll(".admin-sidebar button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".admin-sidebar button").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".tab-content").forEach((tab) => tab.classList.add("hidden"));
    document.getElementById(button.dataset.tab).classList.remove("hidden");
  });
});

function renderAdminCases() {
  const list = document.getElementById("admin-cases-list");
  list.innerHTML = cases.map((item) => `
    <article class="admin-case-item">
      <img src="${item.after}" alt="${item.type}">
      <div>
        <h3>${item.type}</h3>
        <p>${item.title}</p>
      </div>
      <button>Редактировать</button>
    </article>
  `).join("");
}