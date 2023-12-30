let startContainer = document.getElementById("start-container"); // Get all elements from the HTML doc and store them in variables
let quizContainer = document.getElementById("quiz-container");
let audioPlayer = document.getElementById("audio-player");
let audioSource = document.getElementById("audio-source");
let choicesContainer = document.getElementById("choices-container");
let nextButton = document.getElementById("next-button");
let startButton = document.getElementById("start-button");
let scoreElement = document.getElementById("score");
let endContainer = document.getElementById("end-container");
let questionContainer = document.getElementById("question-element");
let questionSection = document.getElementById("question-section");
let finalScoreElement = document.getElementById("final-score");
let startNextRoundButton = document.getElementById("start-next-round-button");
let startNewGameButton = document.getElementById("start-new-game-button");
let timerElement = document.getElementById("timer");
let timerInterval; // Store the identifier returned by setInterval()

// Add variables to fill in the quizz : 2 arrays of objects

const audioFiles = [
  {
    choices: ["ACDC", "Black Sabbath", "Motorhead", "Deep Purple"],
    correctChoice: "ACDC",
    audio: "/audio/ACDC - Back In Black.mp3",
  },
  {
    choices: ["ACDC", "Metallica", "Black Sabbath", "Ozzy Osbourne"],
    correctChoice: "Black Sabbath",
    audio: "/audio/Black Sabbath - Paranoid (Official Audio).mp3",
  },
  {
    choices: ["Foo Fighters", "Nirvana", "Pearl Jam", "Smashing Pumpkins"],
    correctChoice: "Nirvana",
    audio: "/audio/Nirvana - Lithium.mp3",
  },
  {
    choices: ["Audioslave","John Frusciante", "Pearl Jam", "Red Hot Chili Peppers"],
    correctChoice: "Red Hot Chili Peppers",
    audio: "/audio/onlymp3.to - Red Hot Chili Peppers Otherside Official Music Video -rn_YodiJO6k-192k-1703019080.mp3",
  },
  {
    choices: ["Village People", "Carpenters", "ABBA", "The Weather Girls"],
    correctChoice: "ABBA",
    audio: "/audio/Abba - Waterloo (Official Music Video).mp3",
  },
  {
    choices: ["Metallica", "Megadeath", "Judas Priest", "Exodus"],
    correctChoice: "Metallica",
    audio: "/audio/Enter Sandman (Remastered).mp3",
  },
  {
    choices: ["Arctic Monkeys", "Franz Ferdinand", "The Killers","The Strokes"],
    correctChoice: "The Strokes",
    audio: "/audio/Last Nite - The Strokes (with Lyrics).mp3",
  },
  {
    choices: ["The Rolling Stones", "The Who", "Aerosmith", "Led Zeppelin"],
    correctChoice: "Led Zeppelin",
    audio: "/audio/onlymp3.to - Led Zeppelin Whole Lotta Love Official Music Video -HQmmM_qwG4k-192k-1703340126.mp3",
  },
  {
    choices: ["Jefferson Airplane", "The Doors", "Cream", "Pink Floyd"],
    correctChoice: "The Doors",
    audio: "/audio/Soul Kitchen.mp3",
  },
  {
    choices: ["Lenny Kravitz", "Led Zeppelin", "Jimi Hendrix", "Steppenwolf"],
    correctChoice: "Jimi Hendrix",
    audio: "/audio/The Jimi Hendrix Experience - All Along The Watchtower (Official Audio).mp3",
  },
  {
    choices: ["Cindy Lauper", "Blondie", "The Bangles", "Eurythmics"],
    correctChoice: "Blondie",
    audio: "/audio/Blondie - Heart Of Glass.mp3",
  },
  {
    choices: ["Dire Straits", "The Who", "U2", "Led Zeppelin"],
    correctChoice: "Dire Straits",
    audio: "/audio/Dire Straits - Sultans Of Swing (Official Music Video).mp3",
  },
  {
    choices: ["Jerry Garcia Band", "The Doors", "Grateful Dead","Dead&Company"],
    correctChoice: "Grateful Dead",
    audio: "/audio/Friend of the Devil (2013 Remaster).mp3",
  },
  {
    choices: ["The Rolling Stones", "The Beatles", "Deep Purple", "The Who"],
    correctChoice: "The Beatles",
    audio: "/audio/Helter Skelter (Remastered 2009).mp3",
  },
  {
    choices: ["Coldplay", "Oasis", "Beady Eye", "Radiohead"],
    correctChoice: "Oasis",
    audio: "/audio/Oasis - Stop Crying Your Heart Out (Official Video).mp3",
  },
  {
    choices: ["John Cale", "Bob Dylan", "Lou Reed", "Neil Young"],
    correctChoice: "Lou Reed",
    audio: "/audio/Lou Reed - Perfect Day.mp3",
  },
  {
    choices: ["Sex Pistols", "The Clash", "Ramones", "The Damned"],
    correctChoice: "The Clash",
    audio: "/audio/London Calling.mp3",
  },
  {
    choices: ["Sex Pistols", "The Clash", "Ramones", "The Damned"],
    correctChoice: "Ramones",
    audio: "/audio/Blitzkrieg Bop (2016 Remaster).mp3",
  },
  {
    choices: ["The White Stripes", "Eurythmics", "The Black Keys", "The Kills"],
    correctChoice: "The White Stripes",
    audio: "/audio/Seven Nation Army.mp3",
  },
  {
    choices: ["The Kinks", "The Who", "Cream", "The Rolling Stones"],
    correctChoice: "The Rolling Stones",
    audio: "/audio/Paint It, Black.mp3",
  },
  {
    choices: ["Bob Dylan", "Leonard Cohen", "Donovan", "Johnny Cash"],
    correctChoice: "Bob Dylan",
    audio: "/audio/Bob Dylan - Hurricane (Official Audio).mp3",
  },
  {
    choices: ["The Cure", "Jefferson Airplane", "Talking Heads", "Velvet Underground"],
    correctChoice: "Talking Heads",
    audio: "/audio/Talking Heads - Psycho Killer.mp3",
  },
  {
    choices: ["Jefferson Airplane", "Talking Heads", "Kaleidoscope", "The Byrds"],
    correctChoice: "Jefferson Airplane",
    audio: "/audio/Somebody to Love.mp3",
  },
  {
    choices: ["Molly Hatchet", "Steppenwolf", "Eagles", "Lynyrd Skynyrd"],
    correctChoice: "Lynyrd Skynyrd",
    audio: "/audio/Lynyrd Skynyrd - Sweet Home Alabama (Audio).mp3",
  },
  {
    choices: ["Genesis", "Pink Floyd", "King Crimson", "Led Zeppelin"],
    correctChoice: "Pink Floyd",
    audio: "/audio/Pink Floyd - Wish You Were Here.mp3",
  },
  {
    choices: ["King Crimson", "Genesis", "Jefferson Airplane", "Jefferson Starship"],
    correctChoice: "King Crimson",
    audio: "/audio/King Crimson - I Talk To The Wind.mp3",
  },
  {
    choices: ["Dropkick Murphys", "Gentle Giant", "Jethro Tull", "Yes"],
    correctChoice: "Jethro Tull",
    audio: "/audio/Journeyman (2003 Remaster).mp3",
  },
];

console.log(audioFiles.length);

const rockMusicQuizQuestions = [
  {
    question: "Which rock band released the album 'The Dark Side of the Moon'?",
    options: ["Led Zeppelin", "Pink Floyd", "The Rolling Stones", "The Who"],
    correctOption: "Pink Floyd",
  },
  {
    question: "Who is known as the 'Godfather of Punk'?",
    options: ["David Bowie", "Iggy Pop", "Lou Reed", "Johnny Cash"],
    correctOption: "Iggy Pop",
  },
  {
    question:
      "Which rock guitarist is famous for his 'windmill' guitar strumming style?",
    options: ["Jimi Hendrix", "Pete Townshend", "Eric Clapton", "Jimmy Page"],
    correctOption: "Pete Townshend",
  },
  {
    question:
      "What year did The Beatles release their iconic album 'Sgt. Pepper's Lonely Hearts Club Band'?",
    options: ["1967", "1965", "1969", "1971"],
    correctOption: "1967",
  },
  {
    question: "Who is the lead singer of the band Queen?",
    options: [
      "Freddie Mercury",
      "David Bowie",
      "Roger Daltrey",
      "Robert Plant",
    ],
    correctOption: "Freddie Mercury",
  },
  {
    question:
      "Which rock band's lead singer is famous for his distinctive tongue-wagging on stage?",
    options: ["ACDC", "KISS", "The Rolling Stones", "Van Halen"],
    correctOption: "The Rolling Stones",
  },
  {
    question: "What is the title of Nirvana's breakthrough album?",
    options: ["In Utero", "Nevermind", "Bleach", "Incesticide"],
    correctOption: "Nevermind",
  },
  {
    question:
      "Who is often referred to as the 'Prince of Darkness' in rock music?",
    options: ["Alice Cooper", "Ozzy Osbourne", "Gene Simmons", "Rob Zombie"],
    correctOption: "Ozzy Osbourne",
  },
  {
    question: "Which rock band recorded the hit song 'Bohemian Rhapsody'?",
    options: ["The Who", "Led Zeppelin", "Queen", "The Doors"],
    correctOption: "Queen",
  },
  {
    question: "What city is known as the birthplace of grunge music?",
    options: ["Seattle", "Portland", "San Francisco", "Los Angeles"],
    correctOption: "Seattle",
  },
  {
    question:
      "Which rock band's debut album is titled 'Appetite for Destruction'?",
    options: ["Motley Crue", "Guns N Roses", "Metallica", "Def Leppard"],
    correctOption: "Guns N' Roses",
  },
  {
    question: "Who is often referred to as the 'Lizard King'?",
    options: ["Jim Morrison", "Mick Jagger", "Roger Waters", "Freddie Mercury"],
    correctOption: "Jim Morrison",
  },
  {
    question: "Who is the lead vocalist of the rock band U2?",
    options: ["Chris Martin", "Eddie Vedder", "Thom Yorke", "Bono"],
    correctOption: "Bono",
  },
  {
    question:
      "What is the real name of the guitarist known as Slash from Guns N' Roses?",
    options: [
      "Saul Hudson",
      "Michael McKagan",
      "Dave Mustaine",
      "Izzy Stradlin",
    ],
    correctOption: "Saul Hudson",
  },
  {
    question:
      "In which city did the punk rock movement emerge in the mid-1970s?",
    options: ["Austin", "London", "Los Angeles", "New York City"],
    correctOption: "London",
  },
  {
    question:
      "Who is known as the 'Prince of Darkness' and was the lead vocalist for Black Sabbath?",
    options: [
      "Rob Halford",
      "Bruce Dickinson",
      "Ozzy Osbourne",
      "Ronnie James Dio",
    ],
    correctOption: "Ozzy Osbourne",
  },
  {
    question:
      "What is the name of the famous rock festival that took place in 1969 and featured performances by Jimi Hendrix and The Who?",
    options: [
      "Woodstock",
      "Monterey Pop Festival",
      "Isle of Wight Festival",
      "Altamont Free Concert",
    ],
    correctOption: "Woodstock",
  },
  {
    question:
      "What is the title of Led Zeppelin's fourth studio album, often referred to as 'Untitled' or 'IV'?",
    options: [
      "Physical Graffiti",
      "Houses of the Holy",
      "Led Zeppelin III",
      "Led Zeppelin IV",
    ],
    correctOption: "Led Zeppelin IV",
  },
  {
    question:
      "Which rock band released the album 'Rumours', one of the best-selling albums of all time?",
    options: ["Fleetwood Mac", "The Eagles", "The Rolling Stones", "The Who"],
    correctOption: "Fleetwood Mac",
  },
  {
    question:
      "Who was the guitarist and main songwriter for the punk rock band The Clash?",
    options: ["Joe Strummer", "Johnny Rotten", "Mick Jones", "Paul Simonon"],
    correctOption: "Mick Jones",
  },
  {
    question: "Who is known as the 'Queen of Rock'?",
    options: ["Stevie Nicks", "Pat Benatar", "Janis Joplin", "Tina Turner"],
    correctOption: "Tina Turner",
  },
  {
    question: "Which rock band's debut album is titled 'Ten'?",
    options: ["Nirvana", "Pearl Jam", "Alice in Chains", "Soundgarden"],
    correctOption: "Pearl Jam",
  },
  {
    question:
      "Who is the guitarist and primary songwriter for the rock band Rage Against the Machine?",
    options: ["Dave Grohl", "Adam Jones", "Kim Thayil", "Tom Morello"],
    correctOption: "Tom Morello",
  },
  {
    question:
      "What is the name of the rock band formed by Trent Reznor, known for industrial rock hits like 'Closer'?",
    options: ["Rammstein", "Nine Inch Nails", "Ministry", "KMFDM"],
    correctOption: "Nine Inch Nails",
  },
  {
    question:
      "Who is the lead vocalist and primary songwriter for the band Radiohead?",
    options: ["Thom Yorke", "Jonny Greenwood", "Colin Greenwood", "Ed O Brien"],
    correctOption: "Thom Yorke",
  },
  {
    question:
      "What is the subgenre of rock music characterized by complex arrangements, virtuosic musicianship, and lengthy compositions?",
    options: ["Punk Rock", "Progressive Rock", "Grunge", "Alternative Rock"],
    correctOption: "Progressive Rock",
  },
  {
    question:
      "What is the name of the annual rock music festival held in Tennessee, known for its diverse lineup and large-scale camping experience?",
    options: ["Bonnaroo", "Coachella", "Lollapalooza", "Glastonbury"],
    correctOption: "Bonnaroo",
  },
  {
    question:
      "Which one of these blues artists is considered to be one of the funding fathers of rock'n'roll?",
    options: ["Bill Haley", "Bo Diddley", "Muddy Waters", "Little Richard"],
    correctOption: "Muddy Waters",
  },
  {
    question:
      "Which rock band's music is featured throughout the soundtrack of the movie 'School of Rock,' where Jack Black plays a substitute teacher turning a class into a rock band?",
    options: ["The Rolling Stones", "Led Zeppelin", "ACDC", "The Beatles"],
    correctOption: "ACDC",
  },
  {
    question:
      "Which iconic rock song is featured in the opening credits of the movie 'Wayne's World,' with the main characters Wayne and Garth headbanging along in the car?",
    options: [
      "Bohemian Rhapsody by Queen",
      "Stairway to Heaven by Led Zeppelin",
      "Sweet Child o Mine by Guns N Roses",
      "Don t Stop Believin by Journey",
    ],
    correctOption: "Bohemian Rhapsody by Queen",
  },
  {
    question:
      "In which movie does the Aerosmith song 'I Don't Want to Miss a Thing' play a significant role, becoming the film's theme song?",
    options: [
      "Armageddon",
      "Independence Day",
      "The Day After Tomorrow",
      "Deep Impact",
    ],
    correctOption: "Armageddon",
  },
  {
    question:
      "'Misirlou' by Dick Dale and His Del-Tones is featured in the opening scene of a movie by Quentin Tarantino'. Which one?",
    options: [
      "The Hateful Eight",
      "Reservoir Dogs",
      "Pulp Fiction",
      "Jackie Brown",
    ],
    correctOption: "Pulp Fiction",
  },
  {
    question:
      "In the 4th season of series 'Stranger Things', one song by Metallica is played. Which one?",
    options: [
      "Nothing else matters",
      "Master of Puppets",
      "One",
      "The Unforgiven I",
    ],
    correctOption: "Master of Puppets",
  },
  {
    question:
      "'Death Rattle' by the metal band Pantera has been featured in a very famous kid cartoon. Which one?",
    options: [
      "Dora and Friends",
      "The Powerpuff Girls",
      "Spongebob",
      "Peppa Pig",
    ],
    correctOption: "Spongebob",
  },
  {
    question: "Which death metal band plays in 'Ace Ventura'?",
    options: ["Cannibal Corpse", "Napalm Death", "Carcass", "Bloodbath"],
    correctOption: ["Cannibal Corpse"],
  },
  {
    question: "Which of these artists DID NOT appear in The Simpsons?",
    options: ["Ramones", "Blink182", "Green Day", "Sum41"],
    correctOption: "Sum41",
  },
  {
    question:
      "In the TV series 'Friends,' which rock band's song 'I'll Be There for You' serves as the theme song for the show?",
    options: ["R.E.M.", "U2", "The Rembrandts", "The Rolling Stones"],
    correctOption: "The Rembrandts",
  },
  {
    question:
      "In the film 'Apocalypse Now,' which iconic song by The Doors plays during the opening and closing scenes, creating a surreal and haunting atmosphere?",
    options: [
      "Break On Through (To the Other Side)",
      "Light My Fire",
      "Riders on the Storm",
      "The End",
    ],
    correctOption: "The End",
  },
  {
    question: "Which persona did David Bowie adopt during the early 1970s?",
    options: [
      "Major Tom",
      "The Thin White Duke",
      "Ziggy Stardust",
      "Aladdin Sane",
    ],
    correctOption: "Ziggy Stardust",
  },
  {
    question:
      "Which rock song holds the record for inspiring the most cover versions by different artists, with over 4,000 recorded renditions?",
    options: [
      "Johnny B. Goode by Chuck Berry",
      "Twist and Shout by The Beatles",
      "Yesterday by The Beatles",
      "Hound Dog by Elvis Presley",
    ],
    correctOption: "Yesterday by The Beatles",
  },
  {
    question:
      "Which one of these artists DID NOT record a cover of the song 'Hallelujah' by Leonard Cohen?",
    options: ["Jeff Buckley", "Bob Dylan", "John Cale", "Neil Young"],
    correctOption: "Neil Young",
  },
  {
    question: "Where is the band Stereophonics originally from?",
    options: ["Wales", "Scotland", "Ireland", "England"],
    correctOption: "Wales",
  },
  {
    question:
      "Which one of these artists recorded a notable cover of the song 'Imagine,' originally written and performed by John Lennon?",
    options: ["Adele", "Elton John", "Coldplay", "Madonna"],
    correctOption: "Elton John",
  },
  {
    question: "Where and when was psychedelic rock born?",
    options: [
      "San Francisco in the mid-1960s",
      "London in the early 1970s",
      "New York City in the late 1960s",
      "Los Angeles in the 1980s",
    ],
    correctOption: "San Francisco in the mid-1960s",
  },
  {
    question:
      "Which of these rock genres has not yet emerged as a recognized musical style?",
    options: [
      "Post-Cyberpunk Rock",
      "Quantum Jazz Fusion",
      "Nanotech Metal",
      "Retro-Futurist Psychedelic",
    ],
    correctOption: "Nanotech Metal",
  },
  {
    question:
      "The song 'Bohemian Like You' by The Dandy Warhols gained popularity and was featured in a commercial for which product?",
    options: ["Apple iPod", "Nike Shoes", "Coca-Cola", "Volkswagen Beetle"],
    correctOption: "Volkswagen Beetle",
  },
  {
    question:
      "The song 'Rebel Girl' by Bikini Kill is associated with which feminist movement from the early 1990s?",
    options: [
      "Goth Subculture",
      "Riot Grrrl",
      "Third-wave Feminism",
      "Straight Edge",
    ],
    correctOption: "Riot Grrrl",
  },
  {
    question:
      "Which rock band was inspired by the poem 'The Rime of the Ancient Mariner' by Samuel Taylor Coleridge and recorded a song of the same name?",
    options: ["Metallica", "Iron Maiden", "Black Sabbath", "Judas Priest"],
    correctOption: "Iron Maiden",
  },
  {
    question:
      "Nick Cave is the lead singer and songwriter of which band known for its dark and atmospheric sound?",
    options: ["The Bad Seeds", "The Killers", "The Cure", "The National"],
    correctOption: "The Bad Seeds",
  },
  {
    question:
      "In which era and location is the invention of the mosh pit often associated within the punk and hardcore scenes?",
    options: [
      "1970s, New York City",
      "1980s, Los Angeles",
      "1990s, London",
      "2000s, Seattle",
    ],
    correctOption: "1980s, Los Angeles",
  },
];

let timer = 15;
let score = 0; // Initialise the score to 0
let rounds = 0;
let currentRound = 1;
let initialPlay = true;

audioPlayer.addEventListener("play", () => {
  if (initialPlay) {
    initialPlay = false; // the code within the conditional block should only run the first time the audio is played
  }
});

window.addEventListener("load", function () {
  //  Make sure that functions will be executed when the corresponding buttons are clicked
  startButton.addEventListener("click", startGame);
  nextButton.addEventListener("click", nextSong);
  startNextRoundButton.addEventListener("click", startSecondRound);
  startNewGameButton.addEventListener("click", startNewGame);
});

function startGame() {
  startContainer.style.display = "none";
  console.log("Hiding start-container");

  quizContainer.style.display = "block"; // PROBLEM : first object does not display options, connected to previous problem
  console.log("Displaying quiz-container");

  startNextRoundButton.style.display = "none";
  console.log("Hiding next-round");

  startNextRound()
}

function startNextRound() {
  // move to round 1 to round 2
  startContainer.style.display = "none";
  quizContainer.style.display = "block";
  startNextRoundButton.style.display = "block";
  endContainer.style.display = "none";
  startNextRoundLogic();
}

function startNextRoundLogic() {
  // structure round 1 and round 2 logic
  if (currentRound === 1) {
    if (rounds < 5) {
      rounds++;
      nextSong();
      questionContainer.innerText = "Guess the song";
      startNextRoundButton.style.display = "none";
      questionSection.style.display = "none";
    } else {
      quizContainer.style.display = "none"; // This line might be unnecessary, but it helps me displaying the Start Next Round in another screen
      console.log("Hiding quizContainer");

      startNextRoundButton.style.display = "block";
      console.log("Displaying startNextRoundButton");

      audioPlayer.pause();
      console.log("Pausing audioPlayer");

      questionContainer.innerText = "Pick the right option";
    }
  } else if (currentRound === 2) {
    startNextRoundButton.style.display = "none";
    nextButton.style.display = "none";
    questionSection.style.display = "block";

    if (rounds < 6) {
      rounds++;
      nextQuestion();
    } else {
      gameOver();
      // backgroundAudio.pause() -- consider if adding it or not later
    }
  }
}

function startSecondRound() {
  currentRound = 2;
  rounds = 0;
  quizContainer.style.display = "block";
  endContainer.style.display = "none";
  //backgroundAudio.play() -- consider if adding it or not later
  startNextRoundLogic();
}

function gameOver() {
  quizContainer.style.display = "none";
  startNextRoundButton.style.display = "none";
  endContainer.style.display = "block";
  finalScoreElement.textContent = score;
}

function startNewGame() {
  currentRound = 1;
  rounds = 0;
  score = 0; // PROBLEM: I can see the score from first game before clicking on an answer
  endContainer.style.display = "none";
  startNextRoundButton.style.display = "none";
  startNextRound();
  //startGame()
}

function nextSong() {
  clearInterval(timerInterval);
  initialPlay = true;
  audioPlayer.style.display = "block";

  const currentAudioIndex = getRandomAudioIndex();
  const currentAudio = audioFiles[currentAudioIndex];
  

  if (currentAudio) {
    audioSource.src = currentAudio.audio;

    const choices = currentAudio.choices;
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choices[i];
      choiceButton.addEventListener("click", function () {
        checkAnswer(choices[i], currentAudioIndex);
      });
      choicesContainer.appendChild(choiceButton);
    }

    audioPlayer.disabled = false;
    audioPlayer.load();
    audioPlayer.play();
    startTimer(15);
  }
}

function nextQuestion() {
  clearInterval(timerInterval);
  audioPlayer.style.display = "none";

  let currentQuestionIndex = getRandomQuestionIndex();
  let currentQuestion = rockMusicQuizQuestions[currentQuestionIndex];
  
  questionSection.innerText = currentQuestion.question;
  choicesContainer.innerHTML = "";

  for (let i = 0; i < currentQuestion.options.length; i++) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = currentQuestion.options[i];
    choiceButton.addEventListener("click", function () {
      checkAnswerRoundTwo(currentQuestion.options[i], currentQuestionIndex);
    });
    choicesContainer.appendChild(choiceButton);
  }

  audioPlayer.disabled = true;
  startTimer(15);
}

function getRandomAudioIndex() {
  let randomNumber = Math.floor(Math.random() * audioFiles.length);

  return randomNumber;
}

function getRandomQuestionIndex() {
  let randomQuestionNumber = Math.floor(
    Math.random() * rockMusicQuizQuestions.length
  );

  return randomQuestionNumber;
}

function startTimer(durationInSeconds) {
  if (timer) {
    clearInterval(timer);
  }

  let remainingTime = durationInSeconds;

  timerInterval = setInterval(function () {
    if (remainingTime > 0) {
      remainingTime -= 1;
      timerElement.innerHTML = `Time: ${remainingTime}`;
    } else {
      clearInterval(timerInterval);
      onTimerEnd();
    }
  }, 1000);
}

function onTimerEnd() {
  audioPlayer.pause();
  audioPlayer.style.display = "none";
  startNextRoundLogic();
}

function checkAnswer(selectedChoice, currentIndex) {
  console.log(rounds);
  const currentAudioIndex = currentIndex;
  // const currentAudio = audioFiles[currentAudioIndex]
  const correctChoice = audioFiles[currentAudioIndex].correctChoice;

  console.log(`correct`, correctChoice);

  console.log(`selected ${selectedChoice}`);

  if (selectedChoice === correctChoice) {
    alert("Correct!");
    score += 1;
  } else {
    alert("Incorrect!");
  }

  scoreElement.innerHTML = score;
  audioFiles.splice(currentAudioIndex, 1)
  hidePlayerAndCheck();
  clearInterval(timer);
}

function checkAnswerRoundTwo(selectedChoice, currentIndex) {
  const currentQuestionIndex = currentIndex;
  const currentQuestion = rockMusicQuizQuestions[currentQuestionIndex];
  const correctChoice = rockMusicQuizQuestions[currentQuestionIndex].correctOption;

  console.log(`Question: ${currentQuestion.question}`);
  //console.log(`correct`, correctChoice)
  console.log(`selected ${selectedChoice}`);

  if (selectedChoice === correctChoice) {
    alert("Correct!");
    score += 1;
  } else {
    alert("Incorrect!");
  }
  scoreElement.innerHTML = score;
  rockMusicQuizQuestions.splice(currentQuestionIndex, 1)
  setTimeout(startNextRoundLogic, 1000);
}

function hidePlayerAndCheck() {
  // allow transition between rounds
  audioPlayer.style.display = "none";
  setTimeout(startNextRoundLogic, 1000);
}
