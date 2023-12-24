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
  }
]

let initialPlay = true

audioPlayer.addEventListener('play',()=>{
    if(initialPlay){
        initialPlay=false
    }   
})


window.addEventListener('load', function () {
    
    timerElement = document.getElementById('timer')
    startContainer.style.display = 'block'
    quizContainer.style.display = 'none'
  
    startButton.addEventListener('click', startGame)
    nextButton.addEventListener('click', nextSong)
  })
  
  
  function startGame() {  // Hide start and show quiz when starting the game - IT WORKS!
    startContainer.style.display = 'none'
    quizContainer.style.display = 'block'

    nextSong() // Call nextSong to start the game - IT WORKS! 
  }
  
  function startNextRound() { // Evaluate how to develop it with second part of the quizz 
  quizContainer.style.display = 'block'
  gameOverContainer.style.display = 'none'
  startNextRoundLogic();
  }

  function startNextRoundLogic() { // Evaluate how to develop it with second part of the quizz 
    if (rounds < 3) {
      rounds++;
      console.log(rounds)
      nextSong();
    } else {
      gameOver();
    }
  }
  
  function gameOver() {   // Evaluate how to develop it with second part of the quizz 
    quizContainer.style.display = 'none'
    //gameOverContainer.style.display = 'block'
    alert('Game Over! Your final score is ' + score)
  }

function nextSong() {

  clearInterval(timerInterval)
  initialPlay= true

  audioPlayer.style.display = "block"

  const currentAudioIndex = getRandomAudioIndex()

   //console.log( `current index` ,currentAudioIndex)

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










