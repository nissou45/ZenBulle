const emotions = document.querySelectorAll(".emotion-bubble");

emotions.forEach((item) => {
  item.addEventListener("click", () => {
    const emotionChoisie = item.dataset.emotion;

    // stocker l'émotion choisie
    localStorage.setItem("emotionDuJour", emotionChoisie);

    // redirection selon l'émotion
    window.location.href = `/html/emotion-${emotionChoisie}.html`;
  });
});
