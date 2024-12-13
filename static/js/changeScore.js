//CHANGING COLOR SCORES:
// CHANGING COLOR SCORES
const satisfactionScores = document.querySelectorAll(".satisfaction-score");

satisfactionScores.forEach((section) => {
  const scores = section.querySelectorAll(".score");

  scores.forEach((score) => {
    score.addEventListener("click", () => {
      // Remover la clase scoreColor de todos los scores en la sección actual
      scores.forEach((s) => {
        s.classList.remove("scoreColor");
      });

      // Añadir la clase scoreColor al score seleccionado
      score.classList.add("scoreColor");
    });
  });
});
