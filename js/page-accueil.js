// On attend que la page soit prête
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".submit");

  // Effet bulle zen au clic
  button.addEventListener("click", () => {
    button.style.transform = "scale(1.08)";
    button.style.transition = "transform 0.3s ease";

    // Petit retour à la normale comme une respiration
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 300);

    console.log(" Respire... ta bulle t'attend.");

    // Redirection après l'effet (tu mettras la vraie page ici)
    setTimeout(() => {
      window.location.href = "/html/mode-connexion.html";
    }, 600);
  });
});
