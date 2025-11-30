const phaseText = document.querySelector(".texte-phase");
const timerEl = document.querySelector(".timer");
const resetBtn = document.querySelector(".btn-reset");

let timerInterval;

// PHASES SYNCHRONISÉES AVEC L’ANIMATION
function startPhases() {
  phaseText.textContent = "Inspire...";

  setTimeout(() => {
    phaseText.textContent = "Bloque...";
  }, 4000);

  setTimeout(() => {
    phaseText.textContent = "Expire...";
  }, 6000);
}

startPhases();
setInterval(startPhases, 12000);

// TIMER 60 SECONDES
function startTimer() {
  let time = 60;

  timerInterval = setInterval(() => {
    time--;
    timerEl.textContent = time >= 10 ? `0:${time}` : `0:0${time}`;

    if (time <= 0) {
      clearInterval(timerInterval);
      phaseText.textContent = "Bravo, c’est terminé ";
    }
  }, 1000);
}

startTimer();

// RESET
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerEl.textContent = "1:00";
  phaseText.textContent = "Inspire...";
  startTimer();
});
