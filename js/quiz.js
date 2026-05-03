const questions = [
  {
    id: "place",
    title: "Где будет размещаться реклама?",
    options: [
      { label: "Фасад / входная группа", value: "facade" },
      { label: "Витрина / окно", value: "showcase" },
      { label: "Внутри помещения", value: "inside" },
      { label: "На улице / в районе", value: "outdoor" },
      { label: "Доставка / транспорт", value: "delivery" },
    ],
  },
  {
    id: "task",
    title: "Какая главная задача?",
    options: [
      { label: "Чтобы нас заметили", value: "attention" },
      { label: "Чтобы стало понятно, чем мы занимаемся", value: "explain" },
      { label: "Чтобы люди заходили / записывались", value: "lead" },
      { label: "Чтобы обновить внешний вид без ремонта", value: "refresh" },
      { label: "Чтобы запустить всё под ключ", value: "launch" },
    ],
  },
  {
    id: "ready",
    title: "Что уже есть на старте?",
    options: [
      { label: "Есть макет / фирменный стиль", value: "brand" },
      { label: "Есть фото места", value: "photo" },
      { label: "Есть только идея", value: "idea" },
      { label: "Пока ничего, нужна помощь", value: "nothing" },
    ],
  },
  {
    id: "budget",
    title: "Что сейчас важнее по бюджету?",
    options: [
      { label: "Сделать минимально, но чтобы работало", value: "smart" },
      { label: "Сделать заметно и сильно", value: "strong" },
      { label: "Собрать полноценную систему", value: "system" },
      { label: "Пока понять порядок стоимости", value: "estimate" },
    ],
  },
];

let currentStep = 0;
const answers = {};

const intro = document.getElementById("quiz-intro");
const startButton = document.getElementById("start-quiz");
const quizCard = document.getElementById("quiz-card");
const quizContent = document.getElementById("quiz-content");
const quizStepText = document.getElementById("quiz-step-text");
const progressFill = document.getElementById("progress-fill");
const resultBox = document.getElementById("quiz-result");
const resultTitle = document.getElementById("result-title");
const resultText = document.getElementById("result-text");
const resultList = document.getElementById("result-list");
const restartButton = document.getElementById("restart-quiz");

function startQuiz() {
  intro.classList.add("hidden");
  resultBox.classList.add("hidden");
  quizCard.classList.remove("hidden");
  currentStep = 0;
  Object.keys(answers).forEach((key) => delete answers[key]);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  quizStepText.textContent = `Вопрос ${currentStep + 1} из ${questions.length}`;
  progressFill.style.width = `${progress}%`;

  quizContent.innerHTML = `
    <h2 class="quiz-question">${question.title}</h2>
    <div class="quiz-options">
      ${question.options
        .map(
          (option) => `
            <button class="quiz-option" type="button" data-value="${option.value}">
              ${option.label}
            </button>
          `
        )
        .join("")}
    </div>
  `;

  quizContent.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      answers[question.id] = button.dataset.value;
      currentStep += 1;

      if (currentStep < questions.length) {
        renderQuestion();
      } else {
        showResult();
      }
    });
  });
}

function getRecommendation() {
  const { place, task, budget } = answers;

  if (place === "delivery") {
    return {
      title: "Логично начать со связки: фасад + доставка + QR",
      text: "Если у бизнеса есть доставка, реклама должна работать не только на месте. Важно связать точку, транспорт и быстрый переход к заказу.",
      list: ["брендирование транспорта", "вывеска / витрина", "QR-код для заказа", "упаковка или листовка с повторным контактом"],
    };
  }

  if (place === "showcase") {
    return {
      title: "Логично начать с витрины и точки входа",
      text: "Витрина не должна просто закрываться рекламой. Она может показывать атмосферу, объяснять услуги и вести к заявке.",
      list: ["оформление витрины", "лайтбокс внутри", "аккуратная графика на стекле", "QR-код на запись / заказ"],
    };
  }

  if (task === "lead") {
    return {
      title: "Логично начать с решения, которое ведёт к заявке",
      text: "Здесь важно не только привлечь внимание, но и сократить путь до действия: запись, заказ, звонок или сообщение.",
      list: ["понятный оффер", "наружный носитель", "QR-переход", "форма заявки или мессенджер"],
    };
  }

  if (budget === "smart") {
    return {
      title: "Логично начать с минимального, но работающего комплекта",
      text: "Не нужно делать всё сразу. Лучше выбрать 1–2 ключевые точки контакта и усилить их, чем размазать бюджет по лишним носителям.",
      list: ["главная вывеска", "входная группа", "один информационный носитель", "QR или быстрый контакт"],
    };
  }

  if (budget === "system" || task === "launch") {
    return {
      title: "Логично собрать систему запуска под ключ",
      text: "Если бизнес запускается, важно сразу связать фасад, материалы, навигацию и быстрый вход в заявку или покупку.",
      list: ["вывеска", "витрина / вход", "полиграфия", "QR-связка", "дополнительный акцент под нишу"],
    };
  }

  return {
    title: "Логично начать с разбора места и задачи",
    text: "Сначала нужно понять, где человек увидит рекламу, что он должен понять и какое действие сделать дальше.",
    list: ["анализ точки контакта", "подбор формата", "расчёт стоимости", "макет и согласование"],
  };
}

function showResult() {
  const recommendation = getRecommendation();

  quizCard.classList.add("hidden");
  resultBox.classList.remove("hidden");

  resultTitle.textContent = recommendation.title;
  resultText.textContent = recommendation.text;
  resultList.innerHTML = recommendation.list
    .map((item) => `<div>${item}</div>`)
    .join("");
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
