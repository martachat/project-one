let startContainer = document.getElementById('start-container')  // Get all elements from the HTML doc and store them in variables 
let quizContainer = document.getElementById('quiz-container')
let audioPlayer = document.getElementById('audio-player')
let audioSource = document.getElementById('audio-source')
let choicesContainer = document.getElementById('choices-container')
let nextButton = document.getElementById('next-button')
let startButton = document.getElementById('start-button')
let scoreElement = document.getElementById('score')
let endContainer = document.getElementById('end-container')
let questionContainer = document.getElementById('question-element')
let questionSection = document.getElementById('question-section')
let finalScoreElement = document.getElementById('final-score')
let startNextRoundButton = document.getElementById('start-next-round-button')
let startNewGameButton = document.getElementById('start-new-game-button')
let timerElement = document.getElementById('timer')
let timerInterval // Store the identifier returned by setInterval()

// Add variables to fill in the quizz : 2 arrays of objects 

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
    choices: ['Foo Fighters', 'Nirvana', 'Pearl Jam', 'Smashing Pumpkins'],
    correctChoice: "Nirvana",
    audio: "/audio/Nirvana - Lithium.mp3"
  },
  {
    choices: ['Audioslave', 'John Frusciante', 'Pearl Jam', 'Red Hot Chili Peppers'],
    correctChoice: "Red Hot Chili Peppers",
    audio: "/audio/onlymp3.to - Red Hot Chili Peppers Otherside Official Music Video -rn_YodiJO6k-192k-1703019080.mp3"
  },
  {
    choices: ['Village People', 'Carpenters', 'ABBA', 'The Weather Girls'],
    correctChoice: "ABBA",
    audio:"/audio/Abba - Waterloo (Official Music Video).mp3"
  },
  {
    choices: ['Metallica', 'Megadeath', 'Judas Priest', 'Exodus'],
    correctChoice: "Metallica",
    audio: "/audio/Enter Sandman (Remastered).mp3"
  },
  {
    choices: ['Arctic Monkeys', 'Franz Ferdinand', 'The Killers', 'The Strokes'],
    correctChoice: "The Strokes",
    audio: "/audio/Last Nite - The Strokes (with Lyrics).mp3"
  },
  {
    choices: ['The Rolling Stones', 'The Who', 'Aerosmith', 'Led Zeppelin'],
    correctChoice: "Led Zeppelin",
    audio: "/audio/onlymp3.to - Led Zeppelin Whole Lotta Love Official Music Video -HQmmM_qwG4k-192k-1703340126.mp3"
  },
  {
    choices: ['Jefferson Airplane','The Doors', 'Cream', 'Pink Floyd' ],
    correctChoice: "The Doors",
    audio: "/audio/Soul Kitchen.mp3"
  },
  {
    choices: ['The Jimi Hendrix Experience', 'Led Zeppelin', 'Jimi Hendrix', 'Steppenwolf'],
    correctChoice: "The Jimi Hendrix Experience",
    audio: "/audio/The Jimi Hendrix Experience - All Along The Watchtower (Official Audio).mp3"
  },
  {
    choices: ['Cindy Lauper', 'Blondie', 'The Bangles', 'Eurythmics'],
    correctChoice: "Blondie",
    audio: "/audio/Blondie - Heart Of Glass.mp3"
  },
  {
    choices: ['Dire Straits', 'The Who', 'U2', 'Led Zeppelin'],
    correctChoice: "Dire Straits",
    audio: "/audio/Dire Straits - Sultans Of Swing (Official Music Video).mp3"
  },
  {
    choices: ['Jerry Garcia Band', 'New Riders of the Purple Sage', 'Grateful Dead', 'Dead&Company'],
    correctChoice: "Grateful Dead",
    audio: "/audio/Friend of the Devil (2013 Remaster).mp3"
  },
  {
    choices: ['The Rolling Stones', 'The Beatles', 'Deep Purple', 'The Who'],
    correctChoice: "The Beatles",
    audio: "/audio/Helter Skelter (Remastered 2009).mp3"
  },
  {
    choices: ['Metallica', 'Megadeath', 'Motorhead', 'Iron Maiden'],
    correctChoice: "Iron Maiden",
    audio: "/audio/Iron Maiden - Aces High (1998 Remastered Version) #01.mp3"
  },
  {
    choices:['Coldplay', 'Oasis', 'Beady Eye', 'Radiohead'],
    correctChoice: "Oasis",
    audio: "/audio/Oasis - Stop Crying Your Heart Out (Official Video).mp3"
  },
  {
    choices: ['John Cale', 'Bob Dylan', 'Lou Reed', 'Neil Young'],
    correctChoice: "Lou Reed",
    audio: "/audio/Lou Reed - Perfect Day.mp3"
  },
  {
    choices: ['Sex Pistols', 'The Clash', 'Ramones', "The Damned"],
    correctChoice: "The Clash",
    audio: "/audio/London Calling.mp3"
  },
  {
    choices: ['Sex Pistols', 'The Clash', 'Ramones', "The Damned"],
    correctChoice: "Ramones",
    audio: "/audio/Blitzkrieg Bop (2016 Remaster).mp3"
  },
  {
    choices: ['The White Stripes', 'Eurythmics', 'The Black Keys', 'The Kills'],
    correctChoice: "The White Stripes",
    audio: "/audio/Seven Nation Army.mp3"
  },
  {
    choices: ['The Kinks', 'The Who', 'Cream', 'The Rolling Stones'],
    correctChoice: "The Rolling Stones",
    audio: "/audio/Paint It, Black.mp3"
  },
  {
    choices: ['Bob Dylan', 'Leonard Cohen', 'Donovan', 'Johnny Cash'],
    correctChoice: "Bob Dylan",
    audio: "/audio/Bob Dylan - Hurricane (Official Audio).mp3"
  },
  {
    choices: ['The Cure', 'Jefferson Airplane', 'Talking Heads', 'Velvet Underground'],
    correctChoice: "Talking Heads",
    audio: "/audio/Talking Heads - Psycho Killer.mp3"
  },
  {
    choices: ['Jefferson Airplane', 'Talking Heads', 'Kaleidoscope', 'The Byrds'],
    correctChoice: "Jefferson Airplane",
    audio: "/audio/Somebody to Love.mp3"
  },
  {
    choices: ['Molly Hatchet', 'Steppenwolf', 'Eagles', 'Lynyrd Skynyrd'],
    correctChoice: "Lynyrd Skynyrd",
    audio: "/audio/Lynyrd Skynyrd - Sweet Home Alabama (Audio).mp3"
  },
  {
    choices: ['Genesis', 'Pink Floyd', 'King Crimson', 'Led Zeppelin'],
    correctChoice: "Pink Floyd",
    audio: "/audio/Pink Floyd - Wish You Were Here.mp3"
  },
  {
    choices: ['King Crimson', 'Genesis', 'Jefferson Airplane', 'Jefferson Starship'],
    correctChoice: "King Crimson",
    audio: "/audio/King Crimson - I Talk To The Wind.mp3"
  },
  {
    choices: ['Dropkick Murphys', 'Gentle Giant', 'Jethro Tull','Yes'],
    correctChoice: "Jethro Tull",
    audio: "/audio/Journeyman (2003 Remaster).mp3"
  }
]

const rockMusicQuizQuestions = [
    {
      question: "Which rock band released the album 'The Dark Side of the Moon'?",
      options: ['Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'The Who'],
      correctOption: "Pink Floyd"
    },
    {
      question: "Who is known as the 'Godfather of Punk'?",
      options: ['David Bowie', 'Iggy Pop', 'Lou Reed', 'Johnny Cash'],
      correctOption: "Iggy Pop"
    },
    {
      question: "Which rock guitarist is famous for his 'windmill' guitar strumming style?",
      options: ['Jimi Hendrix', 'Pete Townshend', 'Eric Clapton', 'Jimmy Page'],
      correctOption: "Pete Townshend"
    },
    {
      question: "What year did The Beatles release their iconic album 'Sgt. Pepper's Lonely Hearts Club Band'?",
      options: ['1967', '1965', '1969', '1971'],
      correctOption: "1967"
    },
    {
      question: "Who is the lead singer of the band Queen?",
      options: ['Freddie Mercury', 'David Bowie', 'Roger Daltrey', 'Robert Plant'],
      correctOption: "Freddie Mercury"
    },
    {
      question: "Which rock band's logo features a tongue and lips?",
      options: ['ACDC', 'KISS', 'The Rolling Stones', 'Van Halen'],
      correctOption: "The Rolling Stones"
    },
    {
      question: "What is the title of Nirvana's breakthrough album?",
      options: ['In Utero', 'Nevermind', 'Bleach', 'Incesticide'],
      correctOption: "Nevermind"
    },
    {
      question: "Who is often referred to as the 'Prince of Darkness' in rock music?",
      options: ['Alice Cooper', 'Ozzy Osbourne', 'Gene Simmons', 'Rob Zombie'],
      correctOption: "Ozzy Osbourne"
    },
    {
      question: "Which rock band recorded the hit song 'Bohemian Rhapsody'?",
      options: ['The Who', 'Led Zeppelin', 'Queen', 'The Doors'],
      correctOption: "Queen"
    },
    {
      question: "What city is known as the birthplace of grunge music?",
      options: ['Seattle', 'Portland', 'San Francisco', 'Los Angeles'],
      correctOption: "Seattle"
    }
  ]

  let timer = 15  
  let score = 0  // Initialise the score to 0
  let rounds = 0 
  let currentRound = 1  
  let initialPlay = true

audioPlayer.addEventListener('play',()=>{
    if(initialPlay){
        initialPlay=false  // the code within the conditional block should only run the first time the audio is played
    }   
})

window.addEventListener('load', function () {  //  Make sure that functions will be executed when the corresponding buttons are clicked 
    startButton.addEventListener('click', startGame)
    nextButton.addEventListener('click', nextSong)
    startNextRoundButton.addEventListener('click', startSecondRound) 
    startNewGameButton.addEventListener('click', startNewGame)
  })
  
  
  function startGame() {       
    startContainer.style.display = 'none' // PROBLEM 1 : start-container and quiz-container appear at the same time and I have to click on the startGame button to make it disappear
    console.log("Hiding start-container")

    quizContainer.style.display = 'block'   // PROBLEM 2 : first object does not display options, connected to previous problem 
    console.log("Displaying quiz-container");

    startNextRoundButton.style.display = 'none' // PROBLEM 3 : screen is appearing with the previous ones
    console.log("Hiding next-round")
    
    //startNextRound()  
  }
  
  function startNextRound() { 
  startContainer.style.display = 'none'
  quizContainer.style.display = 'block'
  startNextRoundButton.style.display = 'block'
  gameOverContainer.style.display = 'none'
  startNextRoundLogic()
  }

  function startNextRoundLogic() {
    if (currentRound === 1) {
      if (rounds < 4) {
        rounds++
        nextSong()
      } else {
        quizContainer.style.display = 'none' // This line might be unnecessary, but it helps me displaying the Start Next Round in another screen
        console.log("Hiding quizContainer")

        startNextRoundButton.style.display = 'block'
        console.log("Displaying startNextRoundButton")

        audioPlayer.pause()
        console.log("Pausing audioPlayer")

        questionContainer.innerText = "Pick the right option"
      }
    } else if (currentRound === 2) {
      startNextRoundButton.style.display = 'none'

      if (rounds < rockMusicQuizQuestions.length) {
        rounds++
        nextQuestion()
      } else {
        gameOver()
        // backgroundAudio.pause() -- consider if adding it or not later
      }
    }
  }
  
  
  function startSecondRound() {
    currentRound = 2
    rounds = 0
    //score = 0
    quizContainer.style.display = 'block'
    endContainer.style.display = 'none'
    //backgroundAudio.play() -- consider if adding it or not later
    startNextRoundLogic()
  }
  
  function gameOver() {
    quizContainer.style.display = 'none'
    startNextRoundButton.style.display = 'none'
    endContainer.style.display = 'block'
    finalScoreElement.textContent = score
  }
  
  function startNewGame() {
    currentRound = 1
    rounds = 0
    score = 0
    endContainer.style.display = 'none'
    startGame()
  }

function nextSong() {

  clearInterval(timerInterval)
  initialPlay= true
  audioPlayer.style.display = "block"

  const currentAudioIndex = getRandomAudioIndex()
  const currentAudio = audioFiles[currentAudioIndex]
  
  if (currentAudio) {
    audioSource.src = currentAudio.audio


    const choices = currentAudio.choices
    choicesContainer.innerHTML = ''

    for (let i = 0; i < choices.length; i++) {
      const choiceButton = document.createElement('button')
      choiceButton.textContent = choices[i]
      choiceButton.addEventListener('click', function () {
        checkAnswer(choices[i],currentAudioIndex)
      })
      choicesContainer.appendChild(choiceButton)
    }

    audioPlayer.disabled = false
    audioPlayer.load()
    audioPlayer.play()
    startTimer(15)
  }
}

function nextQuestion() {

    clearInterval(timerInterval)
    audioPlayer.style.display = "none"
    

    let currentQuestionIndex = getRandomQuestionIndex()
    let currentQuestion = rockMusicQuizQuestions[currentQuestionIndex]

      choicesContainer.innerHTML = ''
  
      for (let i = 0; i < currentQuestion.options.length; i++) {
        const choiceButton = document.createElement('button')
        choiceButton.textContent = currentQuestion.options[i]
        choiceButton.addEventListener('click', function () {
        checkAnswerRoundTwo(currentQuestion.options[i], currentQuestionIndex)
        })
        choicesContainer.appendChild(choiceButton)
      }
      
      audioPlayer.disabled = true
      startTimer(15)
  
      // Update timer here?
  
      //currentQuestionIndex++
    } /*else {
      gameOver()
      // Handle the end of the quiz or start a new round
    }*/
  


function getRandomAudioIndex() {
    let randomNumber = Math.floor(Math.random() * audioFiles.length)
    
    return randomNumber
  }

  function getRandomQuestionIndex() {
    let randomQuestionNumber = Math.floor(Math.random() * rockMusicQuizQuestions.length)

    return randomQuestionNumber
  }

//let timerElement = document.getElementById('timer')

function startTimer(durationInSeconds) {
  if (timer) {
    clearInterval(timer)
  }
  
  let remainingTime = durationInSeconds
  
  timerInterval = setInterval(function () {
    if(remainingTime > 0) {
        remainingTime -= 1
        timerElement.innerHTML = `Time: ${remainingTime}`
    } else {
      clearInterval(timerInterval)
      onTimerEnd()
    }
  }, 1000)
}

function onTimerEnd() {
  audioPlayer.pause()
  audioPlayer.style.display = "none"
  startNextRoundLogic()
  //startTimer(15)
}

function checkAnswer(selectedChoice,currentIndex) {
    console.log(rounds)
  const currentAudioIndex = currentIndex
  const correctChoice = audioFiles[currentAudioIndex].correctChoice

  console.log(`correct`, correctChoice)

  console.log(`selected ${selectedChoice}`)

  if (selectedChoice === correctChoice) {
    alert('Correct!')
    score += 1
  } else {
    alert('Incorrect!')
  }

  scoreElement.innerHTML = score
  hidePlayerAndCheck()
  clearInterval(timer)
}

  function checkAnswerRoundTwo(selectedChoice, currentIndex) {
    const currentQuestionIndex = currentIndex
    const correctChoice = rockMusicQuizQuestions[currentQuestionIndex].correctOption

    if (selectedChoice === correctChoice) {
        alert('Correct!');
        score += 1;
    } else {
        alert('Incorrect!');
    } 
    scoreElement.innerHTML = score
} 

function hidePlayerAndCheck() {
    audioPlayer.style.display = 'none'
    setTimeout(startNextRoundLogic, 1000)
  }