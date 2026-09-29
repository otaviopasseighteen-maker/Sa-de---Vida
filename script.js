const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const range = document.querySelector("#screen-range");
const output = document.querySelector("#screen-output");
const usageMessage = document.querySelector("#usage-message");

function updateScreenTime() {
  const hours = Number(range.value);
  output.textContent = hours + "h";

  if (hours <= 2) {
    usageMessage.textContent = "Um uso menor não significa automaticamente um uso melhor. Observe como esse tempo se encaixa na sua rotina.";
  } else if (hours <= 5) {
    usageMessage.textContent = "Um ponto de partida para observar seus hábitos, momentos e motivos de uso.";
  } else if (hours <= 8) {
    usageMessage.textContent = "Vale observar quanto desse tempo é trabalho/estudo e quanto é entretenimento ou uso automático.";
  } else {
    usageMessage.textContent = "Talvez seja interessante observar quando, por que e como você costuma permanecer conectado por tanto tempo.";
  }
}

range?.addEventListener("input", updateScreenTime);
updateScreenTime();

const emotionMessages = {
  "Ansiedade":"Tente perceber: essa sensação aparece antes, durante ou depois de usar a tecnologia? Identificar o contexto pode ajudar a compreender o hábito.",
  "Cansaço":"Observe se existe relação com sono, excesso de estímulos, rotina ou falta de pausas. Cansaço merece atenção, não culpa.",
  "Estresse":"Pergunte a si mesmo o que está exigindo mais energia neste momento. Uma pausa consciente pode ser um primeiro passo.",
  "Solidão":"Tecnologia pode aproximar pessoas, mas também não substitui todas as formas de conexão. Observe de que tipo de contato você sente falta.",
  "Desânimo":"Pequenas ações fora da tela também contam. Movimento, descanso, conversa e atividades significativas podem fazer parte do cuidado.",
  "Tranquilidade":"Perceba o que está contribuindo para essa sensação e quais hábitos você gostaria de manter."
};

document.querySelectorAll(".emotion").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".emotion").forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    const emotion = button.dataset.emotion;
    document.querySelector("#emotion-response").textContent =
      emotionMessages[emotion] || "Observe essa emoção com curiosidade e sem julgamento.";
  });
});