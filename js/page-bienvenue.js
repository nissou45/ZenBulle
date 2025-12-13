console.log("Page bienvenue chargée");

// Sélection des boutons
const boutons = document.querySelectorAll(".btn-zen");

boutons.forEach((btn) => {
  const texte = btn.textContent.trim().toLowerCase();

  btn.addEventListener("click", () => {
    if (texte === "respirer") {
      window.location.href = "respiration-guidee.html";
    }

    if (texte === "émotion du jour") {
      window.location.href = "emotion-du-jour.html";
    }

    if (texte === "journal du soir") {
      window.location.href = "journal-du-soir.html";
    }
  });
});
