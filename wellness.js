/* Ferramentas locais de bem-estar: os dados ficam apenas neste navegador. */
(() => {
  "use strict";

  const STORAGE_KEY = "saude-vida-wellness-v1";
  const today = () => {
    const now = new Date();
    return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, "0"), String(now.getDate()).padStart(2, "0")].join("-");
  };
  const readData = () => {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return value && typeof value === "object" ? value : {};
    } catch {
      return {};
    }
  };
  const saveData = data => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  };
  const data = readData();
  const habits = [
    { id: "water", label: "Beber água ao longo do dia", hint: "Hidratação" },
    { id: "move", label: "Fazer algum movimento", hint: "Movimento" },
    { id: "pause", label: "Fazer uma pausa sem tela", hint: "Descanso digital" },
    { id: "connect", label: "Conversar com alguém ou ter um momento offline", hint: "Conexão" },
    { id: "sleep", label: "Preparar uma rotina para descansar", hint: "Sono" }
  ];
  const moodLabels = { great: "Muito bem", okay: "Bem", neutral: "Mais ou menos", low: "Em baixo", stressed: "Estressado(a)", tired: "Cansado(a)" };
  const dateKey = today();
  if (!data.days || typeof data.days !== "object") data.days = {};
  if (!data.days[dateKey]) data.days[dateKey] = { habits: {}, mood: null, note: "", sleep: null, energy: null };
  if (!data.days[dateKey].habits || typeof data.days[dateKey].habits !== "object") data.days[dateKey].habits = {};

  const moodButtons = [...document.querySelectorAll(".mood-choice")];
  let selectedMood = data.days[dateKey].mood || "";
  const noteInput = document.querySelector("#wellness-note");
  const sleepInput = document.querySelector("#wellness-sleep");
  const energyInput = document.querySelector("#wellness-energy");
  const moodForm = document.querySelector("#wellness-form");
  const moodStatus = document.querySelector("#wellness-status");
  const habitList = document.querySelector("#habit-list");
  const progressBar = document.querySelector("#habit-progress-fill");
  const progressText = document.querySelector("#habit-progress-text");
  const historyList = document.querySelector("#wellness-history-list");
  const historySummary = document.querySelector("#wellness-history-summary");

  moodButtons.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.mood === selectedMood));
    button.addEventListener("click", () => {
      selectedMood = button.dataset.mood;
      moodButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    });
  });
  if (noteInput) noteInput.value = data.days[dateKey].note || "";
  if (sleepInput && data.days[dateKey].sleep != null) sleepInput.value = data.days[dateKey].sleep;
  if (energyInput && data.days[dateKey].energy != null) energyInput.value = data.days[dateKey].energy;

  moodForm?.addEventListener("submit", event => {
    event.preventDefault();
    const day = data.days[dateKey];
    day.mood = selectedMood || null;
    day.note = (noteInput?.value || "").trim().slice(0, 280);
    day.sleep = sleepInput?.value ? Number(sleepInput.value) : null;
    day.energy = energyInput?.value ? Number(energyInput.value) : null;
    if (!saveData(data)) {
      moodStatus.textContent = "Não foi possível salvar neste navegador. Verifique o espaço disponível ou as configurações de privacidade.";
      return;
    }
    moodStatus.textContent = "Seu check-in foi salvo neste dispositivo. Obrigado por reservar esse momento para você.";
    renderHistory();
  });

  if (habitList) {
    habitList.innerHTML = habits.map(habit => {
      const checked = Boolean(data.days[dateKey].habits[habit.id]);
      return '<label class="habit-item"><input type="checkbox" data-habit="' + habit.id + '"' + (checked ? " checked" : "") + '><span>' + habit.label + '</span><small>' + habit.hint + '</small></label>';
    }).join("");
    habitList.addEventListener("change", event => {
      const checkbox = event.target.closest("input[data-habit]");
      if (!checkbox) return;
      data.days[dateKey].habits[checkbox.dataset.habit] = checkbox.checked;
      if (!saveData(data)) {
        checkbox.checked = !checkbox.checked;
        data.days[dateKey].habits[checkbox.dataset.habit] = checkbox.checked;
        if (moodStatus) moodStatus.textContent = "Não foi possível salvar a alteração neste navegador.";
      }
      renderHabits();
      renderHistory();
    });
  }

  function renderHabits() {
    const completed = habits.filter(habit => data.days[dateKey].habits[habit.id]).length;
    const percent = Math.round(completed / habits.length * 100);
    if (progressBar) progressBar.style.width = percent + "%";
    if (progressText) progressText.textContent = completed + " de " + habits.length + " hábitos concluídos hoje (" + percent + "%).";
  }

  function renderHistory() {
    if (!historyList) return;
    const entries = Object.entries(data.days)
      .filter(([, day]) => day && (day.mood || day.sleep != null || day.energy != null || (day.note && day.note.length)))
      .sort(([a], [b]) => b.localeCompare(a))
      .slice(0, 7);
    historyList.innerHTML = entries.length ? entries.map(([date, day]) => {
      const [, month, datePart] = date.split("-");
      const formatted = date === dateKey ? "Hoje" : datePart + "/" + month;
      const details = [day.mood ? moodLabels[day.mood] || day.mood : "", day.sleep != null ? day.sleep + "h de sono" : "", day.energy != null ? "energia " + day.energy + "/5" : ""].filter(Boolean).join(" · ");
      return "<li><span>" + formatted + "</span><strong>" + details.replace(/[<>]/g, "") + "</strong></li>";
    }).join("") : '<li><span>Nenhum check-in registrado ainda.</span></li>';
    if (historySummary) {
      const completed = habits.filter(habit => data.days[dateKey].habits[habit.id]).length;
      historySummary.textContent = "Hoje: " + completed + "/" + habits.length + " hábitos concluídos.";
    }
  }

  renderHabits();
  renderHistory();
})();
