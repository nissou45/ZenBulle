document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector(".journal-textarea");
  const btn = document.querySelector(".btn-envoyer");

  btn.addEventListener("click", () => {
    const texte = textarea.value.trim();

    if (texte === "") {
      alert(
        "Tu n'as rien écrit… prends un moment pour toi avant d'envoyer ta bulle 🫧"
      );
      return;
    }

    // Enregistrement dans localStorage
    const date = new Date().toLocaleString("fr-FR");
    const entree = { date, texte };

    // récupérer l'ancien journal
    const ancien = JSON.parse(localStorage.getItem("journalSoir")) || [];

    // ajouter la nouvelle entrée
    ancien.push(entree);

    // sauvegarder
    localStorage.setItem("journalSoir", JSON.stringify(ancien));

    // vider la zone de texte
    textarea.value = "";

    alert("Ta bulle a été envoyée 🫶🏻");
  });
});
