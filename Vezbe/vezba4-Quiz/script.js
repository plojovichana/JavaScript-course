const questions = [
    {
      question: "Koji je glavni grad Francuske?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Koja je najveca planeta u Sunčevom sistemu?",
      choices: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Jupiter"
    },
    {
      question: "Koja je najveca planina na svetu?",
      choices: ["Mount Everest", "Mount Kilimanjaro", "Mount McKinley", "Mount Fuji"],
      correctAnswer: "Mount Everest"
    }
  ];

  const questionText = document.getElementById("question");
  const choicesDiv = document.getElementById("choices");
  const submitButton = document.getElementById("submit");
  const resultText = document.getElementById("result");
  let currentQuestion = 0;
  let score = 0;
  
  loadQuestion();
  

  submitButton.addEventListener("click", submitAnswer);

  function loadQuestion() {
    questionText.innerText = questions[currentQuestion].question;
  
    choicesDiv.innerHTML = "";
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
      const choice = document.createElement("div");
      choice.classList.add("choice");
      choice.innerText = questions[currentQuestion].choices[i];
      choice.addEventListener("click", selectAnswer);
      choicesDiv.appendChild(choice);
    }
  }

  function selectAnswer(event) {
    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.innerText;
  
    const choices = choicesDiv.querySelectorAll(".choice");
    for (let i = 0; i < choices.length; i++) {
      choices[i].classList.remove("selected");
    }
    selectedChoice.classList.add("selected");
  }
  
  function submitAnswer() {
    const selectedChoice = choicesDiv.querySelector(".selected");
    if (!selectedChoice) {
      return;
    }
  
    const selectedAnswer = selectedChoice.innerText;
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion === questions.length) {
      questionText.innerText = "Kviz je zavrsen!";
      resultText.style.padding = "20px";
      questionText.style.color = "#E8A0BF";
      questionText.style.backgroundColor = "#fdf4f5be";
      questionText.style.fontSize = "38px";
      resultText.innerText = "Vas skor je " + score +" od mogucih " + questions.length;
      submitButton.style.display = "none";
      return;
    }
    loadQuestion();
  }

