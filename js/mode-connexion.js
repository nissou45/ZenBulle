// Sélection des boutons
const btnConnexion = document.querySelector(".btn-connexion");
const btnInscription = document.querySelector(".btn-inscription");
const btnInvite = document.querySelector(".btn-invite");

// se connecter
btnConnexion.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "page-connexion.html";
});

// s'inscrire
btnInscription.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "page-inscription.html";
});

// mode invité
btnInvite.addEventListener("click", (e) => {
  e.preventDefault();

  const guestUser = {
    name: "Invité",
    mode: "guest",
    connected: true,
  };

  localStorage.setItem("zenbulleUser", JSON.stringify(guestUser));

  window.location.href = "page-accueil.html";
});
