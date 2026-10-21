/* Painel semanal: calcula tendências a partir dos registros locais já existentes. */
(() => {
  "use strict";
  const KEY = "saude-vida-wellness-v1";
  const root = document.querySelector("#wellness-dashboard");
  if (!root) return;
  const read = () => {
    try {
      const value = JSON.parse(localStorage.getItem(KEY) || "{}");
      return value && value.days && typeof value.days === "object" ? value.days : {};
    } catch { return {}; }
  };
  const localKey = date => [date.getFullYear(), String(date.getMonth()+1).padStart(2,"0"), String(date.getDate()).padStart(2,"0")].join("-");
  const moodScore = { great:5, okay:4, neutral:3, low:2, stressed:2, tired:2 };
  const moodName = { great:"Muito bem", okay:"Bem", neutral:"Mais ou menos", low:"Em baixo", stressed:"Estressado(a)", tired:"Cansado(a)" };
  const escapeText = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  function render() {
    const days = read();
    const now = new Date();
    const week = [];
    for (let offset = 6; offset >= 0; offset--) {
      const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - offset);
      const key = localKey(date);
      const record = days[key] || {};
      const habits = record.habits && typeof record.habits === "object" ? Object.values(record.habits).filter(Boolean).length : 0;
      week.push({ key, date, record, habits });
    }
    const checkins = week.filter(day => day.record.mood || day.record.sleep != null || day.record.energy != null || (day.record.note && day.record.note.length));
    const sleepEntries = week.filter(day => Number.isFinite(Number(day.record.sleep)) && day.record.sleep !== null && day.record.sleep !== "");
    const avgSleep = sleepEntries.length ? sleepEntries.reduce((sum, day) => sum + Number(day.record.sleep), 0) / sleepEntries.length : null;
    const activeDays = week.filter(day => day.habits > 0).length;
    const habitPercent = Math.round(week.reduce((sum, day) => sum + Math.min(day.habits, 5), 0) / (7 * 5) * 100);
    const moods = checkins.filter(day => day.record.mood && moodScore[day.record.mood]).map(day => moodScore[day.record.mood]);
    const moodAvg = moods.length ? moods.reduce((sum, value) => sum + value, 0) / moods.length : null;
    const first = week[0].date;
    const last = week[6].date;
    const dateFormat = new Intl.DateTimeFormat("pt-BR", { day:"2-digit", month:"short" });
    const period = dateFormat.format(first) + " – " + dateFormat.format(last);
    const stats = [
      { label:"Check-ins registrados", value:String(checkins.length), detail:"de até 7 dias" },
      { label:"Sono médio", value:avgSleep === null ? "—" : avgSleep.toLocaleString("pt-BR",{maximumFractionDigits:1})+"h", detail:sleepEntries.length ? "em "+sleepEntries.length+" "+(sleepEntries.length === 1 ? "registro" : "registros") : "registre seu sono para acompanhar" },
      { label:"Hábitos concluídos", value:habitPercent+"%", detail:activeDays ? "distribuídos em "+activeDays+" "+(activeDays === 1 ? "dia" : "dias") : "marque hábitos ao longo da semana" }
    ];
    root.innerHTML = '<div class="dashboard-heading"><div><p class="eyebrow">VISÃO DA SEMANA</p><h3>Seu caminho, um dia de cada vez</h3><p>Uma visão geral dos registros deste dispositivo.</p></div><span class="dashboard-period">'+escapeText(period)+'</span></div>' +
      '<div class="dashboard-stats">'+stats.map(stat => '<div class="dashboard-stat"><span>'+escapeText(stat.label)+'</span><strong>'+escapeText(stat.value)+'</strong><small>'+escapeText(stat.detail)+'</small></div>').join("")+'</div>' +
      '<div class="dashboard-chart-heading"><h4>Hábitos por dia</h4><p class="dashboard-footnote">Cada barra representa quantos dos 5 hábitos você marcou naquele dia.</p></div>' +
      (activeDays || checkins.length ? '<div class="week-chart" role="img" aria-label="Gráfico de hábitos concluídos nos últimos sete dias">'+week.map(day => {
        const count = Math.min(day.habits,5);
        const percent = count / 5 * 100;
        const label = new Intl.DateTimeFormat("pt-BR",{weekday:"short"}).format(day.date).replace(".","");
        return '<div class="week-day '+(day.key === localKey(now) ? "today" : "")+'"><span class="bar-value">'+count+'/5</span><div class="week-bar-track"><span class="week-bar" style="height:'+percent+'%" aria-hidden="true"></span></div><span class="day-label">'+escapeText(label)+'</span></div>';
      }).join("")+'</div>' : '<div class="dashboard-empty">Ainda não há registros suficientes para mostrar uma tendência. Faça seu check-in ou marque um hábito para começar.</div>') +
      '<p class="dashboard-footnote">'+(moodAvg === null ? "Quando você registrar seu humor, ele também poderá ser acompanhado nos check-ins recentes." : "Humor médio registrado: "+moodAvg.toLocaleString("pt-BR",{maximumFractionDigits:1})+" de 5 ("+moods.length+" "+(moods.length===1?"registro":"registros")+").")+' Os dados ficam apenas no armazenamento local deste navegador; não são uma avaliação clínica.</p>';
  }
  document.addEventListener("submit", event => { if (event.target && event.target.id === "wellness-form") setTimeout(render, 0); });
  document.addEventListener("change", event => { if (event.target && event.target.matches("#habit-list input[data-habit]")) setTimeout(render, 0); });
  window.addEventListener("storage", event => { if (event.key === KEY) render(); });
  render();
})();
