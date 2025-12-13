import { citations } from "../data/citation.js";

console.log("Page émotion ANXIEUX chargée");

// liste des citations anxieux
const list = citations.anxieux;

// choisir aléatoirement
const randomCitation = list[Math.floor(Math.random() * list.length)];

// afficher dans la page
document.querySelector(".citation").textContent = randomCitation;

// bouton retour
document.querySelector(".btn-zen").addEventListener("click", () => {
  window.location.href = "/html/page-bienvenue.html";
});
