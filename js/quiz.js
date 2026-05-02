const questions = [
    {
      title: "Где будет размещаться реклама?",
      options: ["Фасад / вход", "Витрина", "Внутри помещения", "На улице / в районе", "Доставка / транспорт"]
    },
    {
      title: "Какая главная задача?",
      options: ["Привлечь внимание", "Объяснить услуги", "Оформить пространство", "Получить заявки", "Запустить новый бизнес"]
    },
    {
      title: "Что уже есть?",
      options: ["Есть дизайн", "Есть фото места", "Есть идея", "Ничего нет, нужна помощь", "Есть список материалов"]
    }
  ];
  
  let step = 0;
  const answers = [];
  const box = document.getElementById("quiz-box");
  
  function renderQuestion() {
    const q = questions[step];
    box.innerHTML = `
      <div class="quiz-step">
        <span>Вопрос ${step + 1} из ${questions.length}</span>
        <h2>${q.title}</h2>
        <div class="quiz-options">
          ${q.options.map(option => `<button>${option}</button>`).join("")}
        </div>
      </div>
    `;
  
    box.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        answers.push(button.textContent);
        step++;
        if (step < questions.length) renderQuestion();
  renderQuestion();