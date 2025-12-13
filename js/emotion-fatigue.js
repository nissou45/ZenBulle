import { citations } from "../data/citation.js";

console.log("Page émotion FATIGUE chargée");

const list = citations.fatigue;

const randomCitation = list[Math.floor(Math.random() * list.length)];

document.querySelector(".citation").textContent = randomCitation;

document.querySelector(".btn-zen").addEventListener("click", () => {
  window.location.href = "page-bienvenue.html";
});
