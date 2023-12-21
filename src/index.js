let audioPlayer = document.getElementById('audio-player')
let audioSource = document.getElementById('audio-source')
let choicesContainer = document.getElementById('choices-container')
let nextButton = document.getElementById('next-button')

const audioFiles = [
  {
    choices: ['ACDC', 'Black Sabbath', 'Motorhead', 'Deep Purple'],
    correctChoice: "ACDC",
    audio: "/audio/ACDC - Back In Black.mp3"
  },
  {
    choices: ['ACDC', 'Metallica', 'Black Sabbath', 'Ozzy Osbourne'],
    correctChoice: "Black Sabbath",
    audio: "/audio/Black Sabbath - Paranoid (Official Audio).mp3"
  },
  {
    choices: ['Foo Fighter', 'Nirvana', 'Pearl Jam', 'Smashing Pumpkins'],
    correctChoice: "Nirvana",
    audio: "/audio/Nirvana - Lithium.mp3"
  },
  {
    choices: ['Audioslave', 'John Frusciante', 'Pearl Jam', 'Red Hot Chili Peppers'],
    correctChoice: "Red Hot Chili Peppers",
    audio: "/audio/onlymp3.to - Red Hot Chili Peppers Otherside Official Music Video -rn_YodiJO6k-192k-1703019080.mp3"
  }
]

let currentAudioIndex = -1

nextButton.addEventListener('click', nextSong);
window.addEventListener("load", function(){nextSong()})

function nextSong() {
    currentAudioIndex += 1

    console.log(currentAudioIndex)
  
    choicesContainer.innerHTML = ''
  
    if (audioFiles[currentAudioIndex]) {
      audioSource.src = audioFiles[currentAudioIndex].audio;
  
    
      const choices = audioFiles[currentAudioIndex].choices
      for (let i = 0; i < choices.length; i++) {
        const choiceButton = document.createElement('button')
        choiceButton.textContent = choices[i]
        choiceButton.addEventListener('click', function() {
          checkAnswer(choices[i]); 
        });
        choicesContainer.appendChild(choiceButton)
      }

      audioPlayer.load()
      audioPlayer.play()
    }
  }
  
  function checkAnswer(selectedChoice) {
    const correctChoice = audioFiles[currentAudioIndex].correctChoice
    if (selectedChoice === correctChoice) {
      alert('Correct!')
    } else {
      alert('Incorrect. Try again.')
    }
  }
  










/*const questions = [
    {
        question: "Who is known as the 'King of Pop'?",
        options: ["Prince", "Michael Jackson", "Elvis Presley", "David Bowie"],
        correctAnswer: "Michael Jackson"
    },
    {
        question: "Which rock band released the album 'The Dark Side of the Moon'?",
        options: ["The Rolling Stones", "Led Zeppelin", "Pink Floyd", "The Beatles"],
        correctAnswer: "Pink Floyd"
    },
    {
        question:
        options: 
        correctAnswer:
    },
    {
        question:
        options: 
        correctAnswer:
    },
    {
        question:
        options: 
        correctAnswer:
    },

    // Add more questions in a similar format
];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score-value');
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startBtn.disabled = true;
    score = 0;
    currentQuestionIndex = 0;
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        displayQuestion(currentQuestion);
        startTimer();

    } else {
        endQuiz();
    }
}

function displayQuestion(question) {
    questionElement.textContent = question.question;

    optionsElement.innerHTML = '';
    for (let i = 0; i < question.options.length; i++) {
        const optionBtn = document.createElement('button');
        optionBtn.textContent = question.options[i];
        optionBtn.addEventListener('click', () => checkAnswer(optionBtn.textContent));
        optionsElement.appendChild(optionBtn);
    }
}

function startTimer() {
    let timeLeft = 10;
    const timerId = setInterval(() => {
        if (timeLeft <= 0) {
            checkAnswer(null);
            clearInterval(timerId);
        } else {
            timeLeft--;
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    } else {
        score--;
    }

    currentQuestionIndex++;
    scoreElement.textContent = score;
    nextQuestion();
}

function endQuiz() {
    startBtn.disabled = false;
    alert(`Quiz Ended. Your final score is: ${score}`);
}*/









