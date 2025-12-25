let score = 0;
let current = 0;

const questions = [
  { q: "If score is greater than 5, should we go to next level?", a: true },
  { q: "Can a computer think without instructions?", a: false },
  { q: "Is coding like giving step-by-step commands?", a: true },
  { q: "Does AI learn from data?", a: true }
];

function loadQuestion() {
  document.getElementById("question").innerText = questions[current].q;
}

function checkAnswer(answer) {
  if (answer === questions[current].a) {
    score++;
    document.getElementById("aiText").innerText =
      "Great job! Your logic is strong 🧠✨";
  } else {
    document.getElementById("aiText").innerText =
      "Oops! Try again. Logic improves with practice 🤖";
  }

  document.getElementById("score").innerText = score;

  current++;
  if (current >= questions.length) {
    document.getElementById("question").innerText =
      "🎉 Level Complete! You are a Logic Star!";
    document.getElementById("aiText").innerText =
      "AI says: Keep learning, coder!";
  } else {
    loadQuestion();
  }
}

loadQuestion();
