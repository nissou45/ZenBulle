import { citations } from "../data/citation.js";

console.log("Page émotion TRISTE chargée");

// prendre toutes les citations "triste"
const list = citations.triste;

// choisir aléatoirement
const randomCitation = list[Math.floor(Math.random() * list.length)];

// mettre dans la page
document.querySelector(".citation").textContent = randomCitation;
document.querySelector(".btn-zen").addEventListener("click", () => {
  window.location.href = "page-bienvenue.html";
});
