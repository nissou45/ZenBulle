// BUBBLE POPUP
function showPopup(message) {
  const popup = document.getElementById("bubble-popup");
  popup.textContent = message;
  popup.classList.add("active");

  setTimeout(() => {
    popup.classList.remove("active");
  }, 2500);
}

// BOUTONS INVITÉ
document.querySelectorAll(".zen-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;

    if (action === "respiration") {
      showPopup(" Respire… je t’accompagne.");
      // redirection future :
      // window.location.href = "/html/page-respiration.html";
    }

    if (action === "emotion") {
      showPopup(" On explore ton émotion du jour.");
    }

    if (action === "journal") {
      showPopup(" Dépose ce que tu ressens…");
    }
  });
});

// BOUTON CONTINUER EN INVITÉ
document.querySelector(".btn-continuer").addEventListener("click", () => {
  showPopup(" Tu continues en invité");
  // futur redirection:
  // window.location.href = "/html/page-accueil.html";
});
