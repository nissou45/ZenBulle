import { citations } from "../data/citation.js";

console.log("Page émotion CALME chargée");

const list = citations.calme;

const randomCitation = list[Math.floor(Math.random() * list.length)];

document.querySelector(".citation").textContent = randomCitation;

document.querySelector(".btn-zen").addEventListener("click", () => {
  window.location.href = "/html/page-bienvenue.html";
});
