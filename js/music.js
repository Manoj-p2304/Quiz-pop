// Quiz data
const quizData = [
    {
      "id": 1,
      "question": "Which of the following is not a type of music notation?",
      "options": ["Standard notation", "Tab notation", "Morse code notation", "Graphics notation"],
      "answer": "Morse code notation",
      "category": "music"
    },
    {
      "id": 2,
      "question": "What is the most common time signature in classical music?",
      "options": ["3/4", "4/4", "5/4", "6/8"],
      "answer": "4/4",
      "category": "music"
    },
    {
      "id": 3,
      "question": "Which of the following is not a type of instrument in a symphony orchestra?",
      "options": ["Violin", "Piano", "Harp", "Theremin"],
      "answer": "Theremin",
      "category": "music"
    },
    {
      "id": 4,
      "question": "What is the most common key in pop music?",
      "options": ["C Major", "G Major", "D Major", "A Major"],
      "answer": "C Major",
      "category": "music"
    },
    {
      "id": 5,
      "question": "Which of the following is not a type of chord?",
      "options": ["Major", "Minor", "Diminished", "Flat"],
      "answer": "Flat",
      "category": "music"
    },
    {
      "id": 6,
      "question": "Which of the following is not a type of music genre?",
      "options": ["Jazz", "Blues", "Rock", "Applesauce"],
      "answer": "Applesauce",
      "category": "music"
    },
    {
      "id": 7,
      "question": "Which of the following is not a type of music theory?",
      "options": ["Harmony", "Counterpoint", "Form", "Cooking"],
      "answer": "Cooking",
      "category": "music"
    },
    {
      "id": 8,
      "question": "What is the most common tempo marking in classical music?",
      "options": ["Allegro", "Andante", "Adagio", "Moderato"],
      "answer": "Allegro",
      "category": "music"
    },
    {
      "id": 9,
      "question": "Which of the following is not a type of musical form?",
      "options": ["Sonata", "Symphony", "Concerto", "Spaghetti"],
      "answer": "Spaghetti",
      "category": "music"
    },
    {
      "id": 10,
      "question": "Which of the following is not a type of music notation software?",
      "options": ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
      "answer": "Microsoft Word",
      "category": "music"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let quizCompleted = false;
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const nextButton = document.getElementById("next-btn");
  const submitButton = document.getElementById("submit-btn");
  const scoreElement = document.getElementById("score");
  const exitButton = document.getElementById("exit");
  const svgBut = document.getElementById("svg");
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    // svgBut.style.display = "none";
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
    if (quizCompleted) {
      return;
    }

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
    // svgBut.style.display = "inline";

  
    scoreElement.textContent = "You answered  " + score + " questions correctly " + " out of  "+quizData.length + " questions";

  }



  submitButton.addEventListener("click", showScore);


  
  loadQuestion();


 