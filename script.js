const hiraganaTable = [
  { character: "あ", pronunciation: "a" },
  { character: "い", pronunciation: "i" },
  { character: "う", pronunciation: "u" },
  { character: "え", pronunciation: "e" },
  { character: "お", pronunciation: "o" },
  { character: "か", pronunciation: "ka" },
  { character: "き", pronunciation: "ki" },
  { character: "く", pronunciation: "ku" },
  { character: "け", pronunciation: "ke" },
  { character: "こ", pronunciation: "ko" },
  // Add more hiragana characters here
];
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const question = hiraganaTable[currentQuestion];
  document.getElementById("hiragana").textContent = question.character;
  document.getElementById("userAnswer").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase();
  const correctAnswer = hiraganaTable[currentQuestion].pronunciation;

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("feedback").textContent = "Correct! Well done.";
    document.getElementById("feedback").style.color = "#4CAF50";
  } else {
    document.getElementById("feedback").textContent = `Wrong! The correct answer is "${correctAnswer}".`;
    document.getElementById("feedback").style.color = "#f44336";
  }

  document.getElementById("score").textContent = `Score: ${score}`;

  // Make feedback fade in
  document.getElementById("feedback").style.opacity = 1;
  // Move to the next question or end the quiz
  currentQuestion++;
  if (currentQuestion < hiraganaTable.length) {
    setTimeout(loadQuestion, 1500); // Load next question after 1.5 seconds
  } else {
    setTimeout(() => {
      alert("Quiz complete! Your final score is " + score);
      location.reload(); // Reload page to restart the quiz
    }, 1500);
  }
}

// Initialize the quiz
loadQuestion();
