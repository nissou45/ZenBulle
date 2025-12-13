document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".journal-list-container");

  const data = JSON.parse(localStorage.getItem("journalSoir")) || [];

  // SI aucune bulle
  if (data.length === 0) {
    container.innerHTML = `
      <h1 class="titre">mes bulles du soir</h1>
      <p class="texte">relis ton voyage intérieur, en douceur…</p>

      <p class="no-entry">Tu n'as encore envoyé aucune bulle 🫧<br>
      écris ta première ce soir…</p>

      <button class="btn-retour" onclick="history.back()">retour</button>
    `;
    return;
  }

  // SINON → afficher les bulles
  let html = `
    <h1 class="titre">mes bulles du soir</h1>
    <p class="texte">relis ton voyage intérieur, en douceur…</p>
  `;

  data.reverse().forEach((entry, index) => {
    html += `
    <div class="entry-card" data-index="${index}">
      <button class="delete-btn">×</button>
      <div class="entry-date">${entry.date}</div>
      <div class="entry-text">${entry.texte}</div>
    </div>
  `;
  });

  html += `<button class="btn-retour" onclick="history.back()">retour</button>`;

  container.innerHTML = html;
  // Boutons de suppression
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".entry-card");
      const index = card.dataset.index;

      // On récupère le tableau dans le bon sens (ordre original)
      let journal = JSON.parse(localStorage.getItem("journalSoir")) || [];

      // On supprime l'entrée correspondante
      journal.splice(journal.length - 1 - index, 1);

      // On sauvegarde
      localStorage.setItem("journalSoir", JSON.stringify(journal));

      // On rafraîchit la page
      location.reload();
    });
  });
});
