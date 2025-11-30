// BUBBLE POPUP
console.log("JS CHARGÉ !");

function showPopup(message) {
  const popup = document.getElementById("bubble-popup");
  popup.textContent = message;
  popup.classList.add("active");

  setTimeout(() => {
    popup.classList.remove("active");
  }, 2000);
}

// BOUTONS PAGE BIENVENUE
document.querySelectorAll(".btn-zen").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;

    if (action === "respiration") {
      // showPopup("Respire… je t’accompagne.");
      window.location.href = "respiration-guidee.html";
    }

    if (action === "emotion") {
      // showPopup("On explore ton émotion du jour.");
      window.location.href = "emotion-du-jour.html";
    }

    if (action === "journal") {
      // showPopup("Dépose ce que tu ressens…");
      window.location.href = "page-accueil.html";
    }
  });
});
