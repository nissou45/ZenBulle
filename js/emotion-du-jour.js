const emotions = document.querySelectorAll(".emotion-bubble");

emotions.forEach((item) => {
  item.addEventListener("click", () => {
    const emotionChoisie = item.dataset.emotion;

    localStorage.setItem("emotionDuJour", emotionChoisie);

    window.location.href = "carte-du-soir.html";
  });
});
