function showPopup(message) {
  const popup = document.getElementById("bubble-popup");
  popup.textContent = message;
  popup.classList.add("active");

  setTimeout(() => {
    popup.classList.remove("active");
  }, 2500);
}

const form = document.querySelector(".form-inscription");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Exemple : future logique de validation

  showPopup(" Bienvenue dans ta bulle !");
});
// Sélecteur de la bulle-notification
const notif = document.createElement("div");
notif.className = "bubble-notif";
document.body.appendChild(notif);

function showBubble(message) {
  notif.textContent = message;
  notif.classList.add("show");

  setTimeout(() => {
    notif.classList.remove("show");
  }, 2500);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const prenom = form.querySelector("input[name='prénom']").value.trim();
  const email = form.querySelector("input[name='email']").value.trim();
  const pass = form.querySelector("input[name='modepasse']").value.trim();
  const confirm = form.querySelector("input[name='confirmation']").value.trim();

  // Vérifications de base
  if (!prenom || !email || !pass || !confirm) {
    showBubble("Remplis toutes les bulles ✨");
    return;
  }

  if (pass !== confirm) {
    showBubble("Les mots de passe ne correspondent pas ");
    return;
  }

  // On peut simuler un succès
  showBubble("Bienvenue dans ta bulle, " + prenom + " 🌸");

  // Sauvegarde dans localStorage (simulation d’un vrai compte)
  const userData = {
    prenom,
    email,
  };

  localStorage.setItem("zenbulleUser", JSON.stringify(userData));

  setTimeout(() => {
    window.location.href = "/page-te-connecter.html";
  }, 2000);
});
