//      PAGE : SE CONNECTER
function showPopup(message) {
  const popup = document.getElementById("bubble-popup");
  popup.textContent = message;
  popup.classList.add("active");

  setTimeout(() => {
    popup.classList.remove("active");
  }, 2500);
}

// Je récupère le formulaire
const form = document.querySelector(".connexion");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // logique de connexion à venir

  showPopup("✨ Heureuse de te revoir !");
});
// Je crée un petit message d’erreur (injecté si besoin)
const errorMsg = document.createElement("p");
errorMsg.style.color = "#b33";
errorMsg.style.fontFamily = "var(--font-principale)";
errorMsg.style.fontSize = "0.9rem";
errorMsg.style.marginTop = "8px";
errorMsg.style.textAlign = "center";

// Fonction pour créer un cookie
function setCookie(name, value, days) {
  const maxAge = days * 24 * 60 * 60; // conversion en secondes
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
}

// Soumission du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault(); // empêche la page de se recharger

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  // Vérification simple
  if (email === "" || password === "") {
    errorMsg.textContent = "Veuillez remplir tous les champs.";
    form.appendChild(errorMsg);
    return;
  }

  // ajouter des validations spécifiques ici
  // Exemple email : if (!email.includes("@")) ...

  // Si OK : on simule une connexion
  setCookie("isLoggedIn", "true", 2); // 2 jours

  // Redirection
  window.location.href = "menu.html";
});
