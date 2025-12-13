// Boutons d'actions
const btnsZen = document.querySelectorAll(".btn-zen");
const btnInvite = document.querySelector(".btn-invite");

// --- BOUTONS RESPIRER / ÉMOTION / JOURNAL ---
btnsZen.forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.textContent.trim().toLowerCase();

    if (action === "respirer") {
      window.location.href = "respiration-guidee.html";
    }

    if (action === "émotion du jour") {
      window.location.href = "emotion-du-jour.html";
    }

    if (action === "journal du soir") {
      window.location.href = "journal-du-soir.html";
    }
  });
});

// --- BOUTON CONTINUER (EN INVITÉ) ---
btnInvite.addEventListener("click", () => {
  const guestUser = {
    name: "Invité",
    mode: "guest",
    connected: true,
  };

  localStorage.setItem("zenbulleUser", JSON.stringify(guestUser));
  window.location.href = "page-accueil.html";
});
