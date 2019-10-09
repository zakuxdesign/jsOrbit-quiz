// ARRAY OF OBJECTS -----------------------------------------------------
// array needs question, options, and answer
const typographyQuestions = [
  {
    question: "1. What is a font?",
    options: [
      { option: "A name of a type family", answer: false },
      { option: "A specific member of a type family", answer: true },
      { option: "A generic type with no meaning", answer: false }
    ]
  },
  {
    question: "2. What font is being used on for this app?",
    options: [
      { option: "Avenir", answer: false },
      { option: "Futura", answer: false },
      { option: "Helvetica", answer: true },
      { option: "Bodoni", answer: false },
      { option: "Baskerville", answer: false }
    ]
  },
  {
    question: "3. What is a serif?",
    options: [
      {
        option: "A slight projection off of a stroke",
        answer: true
      },
      { option: "A sharp point where two strokes meet", answer: false },
      { option: "An angle of inwards pressure onto a letter", answer: false },
      { option: "A made up word", answer: false }
    ]
  },
  {
    question: "4. When's it best to use Comic Sans?",
    options: [
      { option: "Whenever. It's a great typeface", answer: false },
      { option: "UI Design", answer: false },
      { option: "Package Design", answer: false },
      { option: "Print Design", answer: false },
      { option: "Never. Who the hell would use it?", answer: true }
    ]
  },
  {
    question: "5. What classification best describes the Futura typeface?",
    options: [
      { option: "Old Style Serif", answer: false },
      { option: "Geometric Sans Serif", answer: true },
      { option: "Humanist Sans Serif", answer: false },
      { option: "Modern Serif", answer: false },
      { option: "Blackletter", answer: false }
    ]
  },
  {
    question: "6. What alignment is easiest to read in Western cultures?",
    options: [
      { option: "Centered Aligned", answer: false },
      { option: "Left Aligned", answer: true },
      { option: "Right Aligned", answer: false },
      { option: "Left Justified", answer: false }
    ]
  }
];

// START FUNCTION -----------------------------------------------------
// remove 'quiz-ui--start'
// add 'quiz-ui--questions'
// call loop function
const buttonStart = document.getElementById("button-start");
const quizUIStart = document.getElementById("quiz-ui--start");
const quizUIQuestions = document.getElementById("quiz-ui--questions");
const question = document.createElement("p");

//
//
//
//
// Functions
let quizScore = 0;
let currentQuestion = 0;

function scoreMyQuiz() {
  const score = document.createElement("h2");
  const percentage = document.createElement("h3");
  let endPercentage =
    Math.floor((quizScore / typographyQuestions.length) * 100) + "%";
  let endScore = quizScore + "/" + typographyQuestions.length;
  // Score
  console.log(endScore);
  document.getElementById("questions-question").appendChild(score);
  score.setAttribute("id", "myScore");
  score.innerText = "Score: " + endScore;
  // Percentage
  console.log(endPercentage);
  document.getElementById("questions-question").appendChild(percentage);
  percentage.innerText = endPercentage;
}

function controlQuestionNumber() {
  currentQuestion += 1;
}

function nextQuestion() {
  // Question
  document.getElementById("questions-question").appendChild(question);
  question.setAttribute("id", "question");
  document.getElementById("quesiton");
  if (currentQuestion == typographyQuestions.length) {
    console.log("quiz done.");
    document.getElementById("question").remove();
    scoreMyQuiz();
  } else {
    question.innerHTML = typographyQuestions[currentQuestion].question;
    //Options
    for (
      let key = 0;
      key < typographyQuestions[currentQuestion].options.length;
      key++
    ) {
      const option = document.createElement("button");

      document.getElementById("questions-options").appendChild(option);
      option.setAttribute(
        "data-answer",
        typographyQuestions[currentQuestion].options[key].answer
      );
      option.setAttribute("class", "option");
      option.innerHTML =
        typographyQuestions[currentQuestion].options[key].option;
    }
    clickingOption();
  }
}

function clickingOption() {
  let buttonOptions = document.getElementsByClassName("option");

  for (var x = 0; x < buttonOptions.length; x++) {
    buttonOptions[x].addEventListener("click", function() {
      // Will add 1 point to the quiz
      if (this.getAttribute("data-answer") === "true") {
        quizScore += 1;
        console.log("1 point added");
        console.log("Player's score is: " + quizScore);
        controlQuestionNumber();
        clearQuestionOptions();
        nextQuestion();
        // Will add 0 points to the quiz
      } else if (this.getAttribute("data-answer") == "false") {
        quizScore += 0;
        console.log("0 points added");
        console.log("Player's score is: " + quizScore);
        controlQuestionNumber();
        clearQuestionOptions();
        nextQuestion();
      }
    });
  }
}

function clearQuestionOptions() {
  // Because it's grabbing classes (plural) you need to do a loop
  // to go through each one
  // otherwise there is an error.
  let oldOptions = document.querySelectorAll(".option");
  for (var x = 0; x < oldOptions.length; x++) {
    oldOptions[x].parentNode.removeChild(oldOptions[x]);
  }
}

buttonStart.addEventListener("click", function() {
  // remove the start div
  quizUIStart.remove();
  quizUIQuestions.style.display = "block";
  // add the quiz to the div
  quizUIQuestions.style.display = "block";
  nextQuestion();
});
