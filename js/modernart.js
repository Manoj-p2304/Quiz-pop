// Quiz data
const quizData =  [
    {
      "id": 11,
      "question": "Which artist is known for coining the term 'Surrealism'?",
      "options": ["Pablo Picasso", "Salvador Dali", "Vincent van Gogh", "Henri Matisse"],
      "answer": "Salvador Dali",
      "category": "modern-art"
    },
    {
      "id": 12,
      "question": "Which movement is associated with the use of abstract forms and shapes in art?",
      "options": ["Impressionism", "Expressionism", "Futurism", "Cubism"],
      "answer": "Cubism",
      "category": "modern-art"
    },
    {
      "id": 13,
      "question": "Which artist is known for painting the work 'The Persistence of Memory'?",
      "options": ["Pablo Picasso", "Salvador Dali", "Vincent van Gogh", "Henri Matisse"],
      "answer": "Salvador Dali",
      "category": "modern-art"
    },
    {
      "id": 14,
      "question": "Which artist is known for creating the painting 'The Scream'?",
      "options": ["Vincent van Gogh", "Salvador Dali", "Edvard Munch", "Claude Monet"],
      "answer": "Edvard Munch",
      "category": "modern-art"
    },
    {
      "id": 15,
      "question": "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
      "options": ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
      "answer": "Fauvism",
      "category": "modern-art"
    },
    {
      "id": 16,
      "question": "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
      "options": ["Impressionism", "Futurism", "Surrealism", "Abstract Expressionism"],
      "answer": "Futurism",
      "category": "modern-art"
    },
    {
      "id": 17,
      "question": "Which artist is known for creating the painting 'Water Lilies'?",
      "options": ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
      "answer": "Claude Monet",
      "category": "modern-art"
    },
    {
      "id": 18,
      "question": "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
      "options": ["Henri Matisse", "Vincent van Gogh", "Salvador Dali", "Pablo Picasso"],
      "answer": "Pablo Picasso",
      "category": "modern-art"
    },
    {
      "id": 19,
      "question": "Which artist is known for creating the painting 'Guernica'?",
      "options": ["Claude Mone", "Paul Cezanne", "Pablo Picasso", "Vincent van Gogh"],
      "answer": "Pablo Picasso",
      "category": "modern-art"
    },
    {
      "id": 20,
      "question": "Which artist is known for creating the sculpture 'The Thinker'?",
      "options": ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
      "answer": "Auguste Rodin",
      "category": "modern-art"
    }
  ];
  
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
  