let startContainer = document.getElementById('start-container')
let quizContainer = document.getElementById('quiz-container')
let audioPlayer = document.getElementById('audio-player')
let audioSource = document.getElementById('audio-source')
let choicesContainer = document.getElementById('choices-container')
let nextButton = document.getElementById('next-button')
let startButton = document.getElementById('start-button')
let scoreElement = document.getElementById('score')
let score = 0
let timer = 15
let timerInterval
let rounds = 0

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
  }
]

let initialPlay = true

audioPlayer.addEventListener('play',()=>{
    if(initialPlay){
        initialPlay=false
    }
    //console.log('song played')
   
})


window.addEventListener('load', function () {
    
    timerElement = document.getElementById('timer')
    startContainer.style.display = 'block'
    quizContainer.style.display = 'none'
  
    startButton.addEventListener('click', startGame)
    nextButton.addEventListener('click', nextSong)
    //startAnotherRoundButton.addEventListener('click', startNextRound)
  })
  
  
  function startGame() {  // Hide start and show quiz when starting the game - IT WORKS!
    startContainer.style.display = 'none'
    quizContainer.style.display = 'block'
    //gameOverContainer.style.display = 'none'

    nextSong() // Call nextSong to start the game - IT WORKS! 
  }
  
  function startNextRound() {  // Need verifying if it works after fixing random pick 
  quizContainer.style.display = 'block'
  gameOverContainer.style.display = 'none'
  startNextRoundLogic();
  }

  function startNextRoundLogic() { // Not working 
    if (rounds < 3) {
      rounds++;
      console.log(rounds)
      nextSong();
    } else {
      gameOver();
    }
  }
  
  function gameOver() {  // Not working 
    quizContainer.style.display = 'none'
    //gameOverContainer.style.display = 'block'
    alert('Game Over! Your final score is ' + score)
  }

function nextSong() {

  clearInterval(timerInterval)
  initialPlay= true

  audioPlayer.style.display = "block"

  const currentAudioIndex = getRandomAudioIndex()

   console.log( `current index` ,currentAudioIndex)

  const currentAudio = audioFiles[currentAudioIndex]
  
  if (currentAudio) {
    audioSource.src = currentAudio.audio


    const choices = currentAudio.choices

    console.log(choices)
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

function getRandomAudioIndex() {
    let randomNumber = Math.floor(Math.random() * audioFiles.length)
    
    return randomNumber;
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

  /*const scoreElement = document.getElementById('score')
  if (scoreElement) {
    scoreElement.innerHTML = score
  }*/
  
  scoreElement.innerHTML = score
  hidePlayerAndCheck()
  clearInterval(timer)
}

function hidePlayerAndCheck() {
    audioPlayer.style.display = 'none'
    setTimeout(startNextRoundLogic, 1000)
  }










