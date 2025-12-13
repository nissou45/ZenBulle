import { citations } from "../data/citation.js";

const list = citations.joie;
const randomCitation = list[Math.floor(Math.random() * list.length)];

document.querySelector(".citation").textContent = randomCitation;

document.querySelector(".btn-zen").addEventListener("click", () => {
  window.location.href = "page-bienvenue.html";
});
