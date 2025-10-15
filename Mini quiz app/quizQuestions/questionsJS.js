const triviaQuestions = [
    {
      id: 1,
      question: "What is the capital city of France?",
      options: ["Florida", "Paris", "Texas", "California"],
      correctAnswer: "Paris"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Venus", "Mars", "Mercury"],
      correctAnswer: "Mars"
    },
    {
      id: 3,
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    },
    {
      id: 4,
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
      id: 5,
      question: "What color is a ripe banana?",
      options: ["Green", "Yellow", "Red", "Blue"],
      correctAnswer: "Yellow"
    },
    {
      id: 6,
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "Thailand", "India"],
      correctAnswer: "Japan"
    },
    {
      id: 7,
      question: "How many days are in a week?",
      options: ["Five", "Six", "Seven", "Eight"],
      correctAnswer: "Seven"
    },
    {
      id: 8,
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      correctAnswer: "H2O"
    },
    {
      id: 9,
      question: "Which animal is known for its black and white stripes?",
      options: ["Tiger", "Zebra", "Leopard", "Cheetah"],
      correctAnswer: "Zebra"
    },
    {
      id: 10,
      question: "What is the tallest mountain in the world?",
      options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount Rushmore"],
      correctAnswer: "Mount Everest"
    },
    {
      id: 11,
      question: "Which Disney character lives under the sea?",
      options: ["Cinderella", "Ariel", "Snow White", "Belle"],
      correctAnswer: "Ariel"
    },
    {
      id: 12,
      question: "What is the primary source of energy for Earth’s climate system?",
      options: ["The Moon", "The Sun", "The Ocean", "The Wind"],
      correctAnswer: "The Sun"
    },
    {
      id: 13,
      question: "Which country is famous for the pyramids?",
      options: ["Brazil", "Egypt", "Australia", "Canada"],
      correctAnswer: "Egypt"
    },
    {
      id: 14,
      question: "What is the name of the wizarding school in the Harry Potter series?",
      options: ["Narnia", "Hogwarts", "Middle-earth", "Westeros"],
      correctAnswer: "Hogwarts"
    },
    {
      id: 15,
      question: "How many continents are there on Earth?",
      options: ["Four", "Five", "Six", "Seven"],
      correctAnswer: "Seven"
    },
    {
      id: 16,
      question: "What gas do humans breathe in to survive?",
      options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
      correctAnswer: "Oxygen"
    },
    {
      id: 17,
      question: "Which fruit is associated with Newton’s theory of gravity?",
      options: ["Orange", "Apple", "Banana", "Grape"],
      correctAnswer: "Apple"
    },
    {
      id: 18,
      question: "What is the name of the famous clock tower in London?",
      options: ["Big Ben", "Eiffel Tower", "Leaning Tower of Pisa", "Statue of Liberty"],
      correctAnswer: "Big Ben"
    },
    {
      id: 19,
      question: "Which sport is played with a racket and a shuttlecock?",
      options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
      correctAnswer: "Badminton"
    },
    {
      id: 20,
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "2"
    }
  ];



let currentQuestionIndex = 0;
let score = 0;
const maxScore = 20;

addEventListener('DOMContentLoaded', () => {
  const startBtn = document.createElement('button');
  startBtn.id = 'quiz-start';
  startBtn.className = 'start';
  startBtn.textContent = 'Start';
  document.getElementById('container').appendChild(startBtn);

  startBtn.addEventListener('click', () => {
   
    renderQuestions(currentQuestionIndex);
    
    startBtn.style.display = 'none';
    
    createSubmitButton();

    createScoreBoard();

    submitAnswer();

    resetProgress();

  });

});



function renderQuestions(currentQuestionIndex) {
  if(document.getElementById('q-a-field')) {
    document.getElementById('q-a-field').remove();
  }
  if(currentQuestionIndex < triviaQuestions.length) {
    const qField = document.createElement('fieldset');
    qField.id = 'q-a-field';
    qField.innerHTML = `
      <legend id="question"> ${triviaQuestions[currentQuestionIndex].question} </legend>
      <input type="radio" id="option-1" name="answer" value= "${triviaQuestions[currentQuestionIndex].options[0]}">
      <label for="option-1"> ${triviaQuestions[currentQuestionIndex].options[0]}</label><br>
      <input type="radio" id="option-2" name="answer" value= "${triviaQuestions[currentQuestionIndex].options[1]}">
      <label for="option-2"> ${triviaQuestions[currentQuestionIndex].options[1]}</label><br>
      <input type="radio" id="option-3" name="answer" value= "${triviaQuestions[currentQuestionIndex].options[2]}">
      <label for="option-3"> ${triviaQuestions[currentQuestionIndex].options[2]}</label><br>
      <input type="radio" id="option-4" name="answer" value= "${triviaQuestions[currentQuestionIndex].options[3]}">
      <label for="option-4"> ${triviaQuestions[currentQuestionIndex].options[3]}</label><br>
       `;
    document.getElementById('container').insertAdjacentElement('afterbegin', qField);

    if(document.getElementById('question-number')) {
      document.getElementById('question-number').remove();
    }
    
    const qNumber = document.createElement('h2');
    qNumber.id = 'question-number';
    qNumber.className = 'q-label';
    qNumber.textContent = `${triviaQuestions[currentQuestionIndex].id}`;
    document.getElementById('container').insertAdjacentElement('beforebegin', qNumber);
  }
}

function createSubmitButton() {
  const submitBtn = document.createElement('button');
  submitBtn.className = 'start';
  submitBtn.id = 'submit';
  submitBtn.textContent = 'Submit';
  document.getElementById('container').appendChild(submitBtn);
}

function createScoreBoard() {
  const scoreBtn = document.createElement('div');
  scoreBtn.className ='score-board';
  scoreBtn.ariaLabel = 'score-board';
  scoreBtn.id = 'score';
  scoreBtn.innerHTML = `
    <p>Score - ${score}</p>
      `;
    document.getElementById('nav-bar').appendChild(scoreBtn);
}

function submitAnswer() {
  document.getElementById('submit').addEventListener('click', () => {
    try {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
      if(selectedAnswer === triviaQuestions[currentQuestionIndex].correctAnswer) {
        score++;
        document.getElementById('score').innerHTML = `<p>Score - ${score}</p>`;
      }
    } catch (error) {
      alert('Please select an answer');
      return;
    }

  currentQuestionIndex++;
  renderQuestions(currentQuestionIndex);
  if(currentQuestionIndex === triviaQuestions.length) {
      alert(`Quiz complete! Your score is ${score}/${triviaQuestions.length}`);
      window.location.reload();
    }
  });
}

function resetProgress() {
  document.getElementById('reset-btn').addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    window.location.reload();
  });
}




