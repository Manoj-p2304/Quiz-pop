// Quiz data
const quizData = [
    {
      "id": 21,
      "question": "What is the correct syntax for an if statement in Python?",
      "options": ["if (condition):", "if condition", "if: condition", "if condition:"],
      "answer": "if condition:",
      "category": "coding"
    },
    {
      "id": 22,
      "question": "Which of the following is not a data type in JavaScript?",
      "options": ["String", "Number", "Boolean", "ArrayList"],
      "answer": "ArrayList",
      "category": "coding"
    },
    {
      "id": 23,
      "question": "Which of the following is used to declare a variable in Java?",
      "options": ["var", "let", "const", "int"],
      "answer": "int",
      "category": "coding"
    },
    {
      "id": 24,
      "question": "What is the correct syntax for a for loop in C#?",
      "options": ["for i = 0 to 10", "for (i = 0; i <= 10; i++)", "for (int i = 0; i <= 10)", "for i in range(0, 10)"],
      "answer": "for (i = 0; i <= 10; i++)",
      "category": "coding"
    },
    {
      "id": 25,
      "question": "Which of the following is not a looping structure in PHP?",
      "options": ["while", "for", "do-while", "foreach"],
      "answer": "foreach",
      "category": "coding"
    },
    {
      "id": 26,
      "question": "Which of the following is not a valid operator in C++?",
      "options": ["+", "-", "*", "$"],
      "answer": "$",
      "category": "coding"
    },
    {
      "id": 27,
      "question": "In which programming language is 'print' used for displaying output?",
      "options": ["Python", "JavaScript", "Java", "C++"],
      "answer": "Python",
      "category": "coding"
    },
    {
      "id": 28,
      "question": "What is the correct syntax for a function in Ruby?",
      "options": ["function name()", "def name", "function name", "def name()"],
      "answer": "def name()",
      "category": "coding"
    },
    {
      "id": 29,
      "question": "Which of the following is not a type of variable in Swift?",
      "options": ["Int", "String", "Double", "Object"],
      "answer": "Object",
      "category": "coding"
    },
    {
      "id": 30,
      "question": "In which programming language is '#' used for commenting?",
      "options": ["Python", "JavaScript", "Java", "C++"],
      "answer": "C++",
      "category": "coding"
    }
  ]
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const nextButton = document.getElementById("next-btn");
  const submitButton = document.getElementById("submit-btn");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
  
    questionElement.textContent = currentQuizData.question;
  
    choicesElement.innerHTML = "";
  
    for (let i = 0; i < currentQuizData.options.length; i++) {
      const option = currentQuizData.options[i];
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", checkAnswer);
      choicesElement.appendChild(button);
    }
  }
  
  function checkAnswer(event) {
    const selectedChoice = event.target;
    const currentQuizData = quizData[currentQuestion];
  
    if (selectedChoice.textContent === currentQuizData.answer) {
      score++;
    }
  
    currentQuestion++;
    nextButton.addEventListener("click", function() {
      currentQuestion++;
      const currentQuizData = quizData[currentQuestion];
  
    questionElement.textContent = currentQuizData.question;
  
    choicesElement.innerHTML = "";
    for (let i = 0; i < currentQuizData.options.length; i++) {
      const option = currentQuizData.options[i];
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", checkAnswer);
      choicesElement.appendChild(button);
    }
  
    });
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionElement.style.display = "none";
    choicesElement.style.display = "none";
    nextButton.style.display = "none";
    submitButton.style.display = "none";
  
    scoreElement.textContent = "You answered  " + score + " questions correctly " + " out of  "+quizData.length + " questions";

  }
  
  nextButton.addEventListener("click", loadQuestion);
  submitButton.addEventListener("click", showScore);
  
  loadQuestion();
  