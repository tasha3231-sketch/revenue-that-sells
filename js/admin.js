<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Админка — РА Рекламные решения</title>
  <meta name="description" content="Демо-панель управления сайтом рекламного агентства: кейсы, заявки, блоки сайта." />

  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/admin.css" />
</head>
<body class="admin-body">
  <main class="admin-login" id="login-screen">
    <section class="login-card reveal visible">
      <a class="back-link" href="index.html">← Вернуться на сайт</a>

      <p class="eyebrow">Панель управления сайтом</p>
      <h1>Демо-доступ и вход владельца</h1>
      <p class="login-lead">
        Это демонстрационная версия панели. Здесь можно показать, как владелец будет управлять кейсами,
        заявками и основными блоками сайта без разработчика.
      </p>

      <div class="login-grid">
        <article class="login-box demo-box">
          <span class="login-badge">Демо</span>
          <h2>Демо-доступ</h2>
          <p>Для презентации: можно зайти и посмотреть структуру панели.</p>

          <div class="demo-creds">
            <span>Логин: <b>demo</b></span>
            <span>Пароль: <b>demo123</b></span>
          </div>

          <button class="btn btn-secondary" id="demo-login" type="button">Войти в демо</button>
        </article>

        <form class="login-box owner-box" id="owner-form">
          <span class="login-badge owner">Владелец</span>
          <h2>Вход для владельца</h2>
          <p>Полный доступ к управлению сайтом.</p>

          <input id="owner-login" type="text" placeholder="Логин" autocomplete="username" />
          <input id="owner-password" type="password" placeholder="Пароль" autocomplete="current-password" />

          <button class="btn btn-primary" type="submit">Войти</button>
          <p class="login-error" id="login-error"></p>
        </form>
      </div>
    </section>
  </main>

  <main class="admin-panel hidden" id="admin-panel">
    <aside class="admin-sidebar">
      <a class="logo" href="index.html" aria-label="РА Рекламные решения">
        <span class="logo-mark">RA</span>
        <span class="logo-text">Рекламные решения</span>
      </a>

      <nav class="admin-nav" aria-label="Навигация панели управления">
        <button class="active" type="button" data-tab="dashboard">Обзор</button>
        <button type="button" data-tab="cases-admin">Кейсы</button>
        <button type="button" data-tab="requests-admin">Заявки</button>
        <button type="button" data-tab="blocks-admin">Блоки сайта</button>
      </nav>

      <a class="admin-site-link" href="index.html">Открыть сайт</a>
    </aside>

    <section class="admin-content">
      <div class="admin-topline">
        <div>
          <p class="eyebrow" id="mode-label">Демо-режим</p>
          <h1>Панель управления</h1>
        </div>
        <button class="btn btn-secondary" id="logout" type="button">Выйти</button>
      </div>

      <section class="tab-content" id="dashboard">
        <div class="admin-cards">
          <article><span>5</span><p>Кейсов на сайте</p></article>
          <article><span>3</span><p>Новые заявки</p></article>
          <article><span>12</span><p>Редактируемых блоков</p></article>
        </div>

        <div class="admin-info-card">
          <h2>Что показывает эта панель</h2>
          <p>
            В демо-версии изменения не сохраняются. В рабочей версии владелец сможет добавлять кейсы,
            менять фото, редактировать тексты, смотреть заявки и управлять блоками сайта.
          </p>
        </div>
      </section>

      <section class="tab-content hidden" id="cases-admin">
        <div class="admin-section-head">
          <h2>Кейсы</h2>
          <button class="btn btn-primary" type="button">Добавить кейс</button>
        </div>
        <div id="admin-cases-list" class="admin-list"></div>
      </section>

      <section class="tab-content hidden" id="requests-admin">
        <div class="admin-section-head">
          <h2>Заявки</h2>
          <button class="btn btn-secondary" type="button">Экспорт</button>
        </div>

        <div class="request-list">
          <article>
            <div><b>Анна</b><span>Салон красоты, нужна вывеска и витрина</span></div>
            <em>Новая</em>
          </article>
          <article>
            <div><b>Игорь</b><span>Пекарня, запуск доставки и брендирование машины</span></div>
            <em>В работе</em>
          </article>
          <article>
            <div><b>Мария</b><span>Детский клуб, оформление входа и QR-запись</span></div>
            <em>Новая</em>
          </article>
        </div>
      </section>

      <section class="tab-content hidden" id="blocks-admin">
        <div class="admin-section-head">
          <h2>Блоки сайта</h2>
          <button class="btn btn-secondary" type="button">Изменить порядок</button>
        </div>

        <div class="block-list">
          <article><span>Главный экран</span><button type="button">Редактировать</button></article>
          <article><span>С чем приходят</span><button type="button">Редактировать</button></article>
          <article><span>Услуги</span><button type="button">Редактировать</button></article>
          <article><span>Кейсы</span><button type="button">Редактировать</button></article>
          <article><span>FAQ</span><button type="button">Редактировать</button></article>
          <article><span>Отзывы</span><button type="button">Редактировать</button></article>
        </div>
      </section>
    </section>
  </main>

  <script type="module" src="js/admin.js"></script>
</body>
</html>
