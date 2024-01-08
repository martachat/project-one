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
  {
    choices: ["The Kinks", "Badfinger", "The Rolling Stones", "The Beatles"],
    correctChoice: "The Beatles",
    audio: "/audio/A Hard Day's Night (Remastered 2015).mp3",
  },
  {
    choices: ["Jimi Hendrix", "ACDC", "Brant Bjork", "Deep Purple"],
    correctChoice: "ACDC",
    audio: "/audio/ACDC - Highway to Hell.mp3",
  },
  {
    choices: ["Aerosmith", "Bruce Springsteen", "The Rolling Stones", "Van Halen"],
    correctChoice: "Aerosmith",
    audio: "/audio/Aerosmith - Rag Doll.mp3",
  },
  {
    choices: ["The Dandy Warhols", "Blur", "Franz Ferdinand", "Brian Jonestown Massacre"],
    correctChoice: "Brian Jonestown Massacre",
    audio: "/audio/Anemone - Brian Jonestown Massacre.mp3",
  },
  {
    choices: ["Jet", "The Dandy Warhols", "Blur", "Muse"],
    correctChoice: "Blur",
    audio: "/audio/Blur - Song 2 (Official Music Video).mp3",
  },
  {
    choices: ["Lou Reed", "Tom Waits", "Bob Dylan", "Leonard Cohen"],
    correctChoice: "Bob Dylan",
    audio: "/audio/Bob Dylan - Mr. Tambourine Man (Official Audio).mp3",
  },
  {
    choices: ["Bruce Springsteen", "Aerosmith", "U2", "Dire Straits"],
    correctChoice: "Bruce Springsteen",
    audio: "/audio/Born to Run.mp3",
  },
  {
    choices: ["Rush", "The Doors", "U2", "Pink Floyd"],
    correctChoice: "Pink Floyd",
    audio: "/audio/Comfortably Numb.mp3",
  },
  {
    choices: ["Johnny Cash", "David Bowie", "Lou Reed", "Bob Dylan"],
    correctChoice: "David Bowie",
    audio: "/audio/David Bowie - Life on Mars_ (Lyrics).mp3",
  },
  {
    choices: ["ACDC", "Motley Crue", "Jimi Hendrix", "Deep Purple"],
    correctChoice: "Deep Purple",
    audio: "/audio/Deep Purple - Smoke on the Water (Audio).mp3",
  },
  {
    choices: ["Dolly Parton", "Nancy Sinatra", "Blondie", "Cindy Lauper"],
    correctChoice: "Dolly Parton",
    audio: "/audio/Dolly Parton - Jolene (Audio).mp3",
  },
  {
    choices: ["The Strokes", "Interpol", "Arctic Monkeys", "Franz Ferdinand"],
    correctChoice: "Franz Ferdinand",
    audio: "/audio/Franz Ferdinand - Take Me Out (Video).mp3",
  },
  {
    choices: ["Steve Miller Band", "Eagles", "Fleetwood Mac", "Wings"],
    correctChoice: "Fleetwood Mac",
    audio: "/audio/Go Your Own Way (2004 Remaster).mp3",
  },
  {
    choices: ["Eagles", "Guns N' Roses", "Dire Straits", "The Who"],
    correctChoice: "Guns N' Roses",
    audio: "/audio/Guns N' Roses - Sweet Child O' Mine.mp3",
  },
  {
    choices: ["Joan Jett", "Pat Benatar", "The Runaways", "Heart"],
    correctChoice: "Joan Jett",
    audio: "/audio/I Love Rock 'N Roll.mp3",
  },
  {
    choices: ["Black Sabbath", "Iron Maiden", "Metallica", "Megadeth"],
    correctChoice: "Iron Maiden",
    audio: "/audio/Iron Maiden - Wasted Years (Official Video).mp3",
  },
  {
    choices: ["Elvis Presley", "Little Richard", "Elton John", "Chuck Berry"],
    correctChoice: "Chuck Berry",
    audio: "/audio/Johnny B. Goode.mp3",
  },
  {
    choices: ["Motley Crue", "Def Leppard", "Motorhead", "Iron Maiden"],
    correctChoice: "Motley Crue",
    audio: "/audio/Kickstart My Heart (2021- Remaster).mp3",
  },
  {
    choices: ["The Who", "Led Zeppelin", "Deep Purple", "Jimi Hendrix"],
    correctChoice: "Led Zeppelin",
    audio: "/audio/Led Zeppelin - Stairway To Heaven (HQ).mp3",
  },
  {
    choices: ["Arctic Monkeys", "The Libertines", "The Killers", "Kings of Leon"],
    correctChoice: "The Killers",
    audio: "/audio/Mr. Brightside HQ (The Killers).mp3",
  },
  {
    choices: ["Aerosmith", "Def Leppard", "Van Halen", "Guns N' Roses"],
    correctChoice: "Guns N' Roses",
    audio: "/audio/Paradise City - Guns N' Roses.mp3",
  },
  {
    choices: ["Pearl Jam", "Alice in Chains", "U2", "Foo Fighters"],
    correctChoice: "Pearl Jam",
    audio: "/audio/Pearl Jam - Black (Official Audio).mp3",
  },
  {
    choices: ["U2", "Pink Floyd", "Radiohead", "Led Zeppelin"],
    correctChoice: "Pink Floyd",
    audio: "/audio/Pink Floyd - Wish You Were Here.mp3",
  },
  {
    choices: ["Radiohead", "Muse", "Placebo", "Coldplay"],
    correctChoice: "Placebo",
    audio: "/audio/Placebo - Every You Every Me (Lyrics).mp3",
  },
  {
    choices: ["Led Zeppelin", "The Doors", "The Beatles", "Queen"],
    correctChoice: "Queen",
    audio: "/audio/Queen - Another One Bites The Dust [Lyrics].mp3",
  },
  {
    choices: ["Johnny Cash", "Waylon Jennings", "Willie Nelson", "Merle Haggard"],
    correctChoice: "Johnny Cash",
    audio: "/audio/Ring of Fire.mp3",
  },
  {
    choices: ["Dusty Springfield", "Nancy Sinatra", "Dolly Parton", "Bobbie Gentry"],
    correctChoice: "Nancy Sinatra",
    audio: "/audio/Rockin' Rock and Roll.mp3",
  },
  {
    choices: ["Ramones", "Buzzcocks", "Sex Pistols", "The Clash"],
    correctChoice: "Sex Pistols",
    audio: "/audio/Sex Pistols - God Save the Queen.mp3",
  },
  {
    choices: ["The Animals", "Cream", "Jimi Hendrix", "Steppenwolf"],
    correctChoice: "Steppenwolf",
    audio: "/audio/Steppenwolf - Born To Be Wild.mp3",
  },
  {
    choices: ["Simple Minds", "R.E.M", "Oasis", "U2"],
    correctChoice: "U2",
    audio: "/audio/Sunday Bloody Sunday.mp3",
  },
  {
    choices: ["Supertramp", "Electric Light Orchestra", "Yes", "The Moody Blues"],
    correctChoice: "Supertramp",
    audio: "/audio/Supertramp - Breakfast In America (HQ).mp3",
  },
  {
    choices: ["The Eagles", "Fleetwood Mac", "Creedence Clearwater Revival", "Lynyrd Skynyrd"],
    correctChoice: "Eagles",
    audio: "/audio/Take It Easy.mp3",
  },
  {
    choices: ["The Animals", "The Kinks", "The Who", "The Byrds"],
    correctChoice: "The Animals",
    audio: "/audio/The Animals - House Of The Rising Sun (Music Video) [4K HD].mp3",
  },
  {
    choices: ["The Velvet Underground", "The Dandy Warhols", "The Verve", "The Brian Jonestown Massacre"],
    correctChoice: "The Dandy Warhols",
    audio: "/audio/The Dandy Warhols - Bohemian Like You.mp3",
  },
  {
    choices: ["The Doors", "Jefferson Airplane", "The Byrds", "The Rolling Stones"],
    correctChoice: "The Doors",
    audio: "/audio/The Doors - People Are Strange (Official Audio).mp3",
  },
  {
    choices: ["Babyshambles", "The Libertines", "The Strokes", "Arctic Monkeys"],
    correctChoice: "The Libertines",
    audio: "/audio/The Libertines - Can't Stand Me Now.mp3",
  },
  {
    choices: ["The Who", "The Kinks", "The Rolling Stones", "Greta Van Fleet"],
    correctChoice: "The Rolling Stones",
    audio: "/audio/The Rolling Stones - (I Can't Get No) Satisfaction (Official Lyric Video).mp3",
  },
  {
    choices: ["The Beatles", "Led Zeppelin", "The Rolling Stones", "Queen"],
    correctChoice: "Queen",
    audio: "/audio/The Show Must Go On (Remastered 2011).mp3",
  },
  {
    choices: ["The Who", "The Yardbirds", "The Small Faces", "U2"],
    correctChoice: "The Who",
    audio: "/audio/The Who - My Generation.mp3",
  },
  {
    choices: ["ACDC", "Van Halen", "Def Leppard", "Guns N' Roses"],
    correctChoice: "Van Halen",
    audio: "/audio/Van Halen - Jump.mp3",
  }
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
    question: "Which rock guitarist is famous for his 'windmill' guitar strumming style?",
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
    options: ["Freddie Mercury", "David Bowie", "Roger Daltrey","Robert Plant"],
    correctOption: "Freddie Mercury",
  },
  {
    question:"Which rock band's lead singer is famous for his distinctive tongue-wagging on stage?",
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
    correctOption: "Guns N Roses",
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
  //nextButton.addEventListener("click", nextSong);
  startNextRoundButton.addEventListener("click", startSecondRound);
  startNewGameButton.addEventListener("click", startNewGame);
});


 document.addEventListener("DOMContentLoaded", function () {
    
    const gifs = [
        "https://media3.giphy.com/media/hmfMXXKdFABJ98Lvw6/giphy.gif",
        "https://media.tenor.com/e38-1IwvE6oAAAAC/rock-festival.gif",
        "https://media4.giphy.com/media/wKNShEiXo1V5SFwyMa/giphy.gif",
        "https://media3.giphy.com/media/QkJJgKxQL0N3yDbAVx/giphy-downsized-large.gif?cid=6c09b952f8kwdx4pgid5x74dgqnfq0ii5dbbssqon6xf600x&ep=v1_internal_gif_by_id&rid=giphy-downsized-large.gif&ct=g",
        "https://media3.giphy.com/media/fqtEQuOzTAB9QZOcAD/giphy.gif?cid=6c09b952tco8h08y49ilgqlrp9nlj00uksg1rva6gpwu2rs9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        "https://media1.giphy.com/media/h4NEFAAzWRCl8efti2/giphy.gif?cid=6c09b9526onyapy377f9c5op5ua2ztbyai0a4ui4uh7lxxal&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        "https://i.gifer.com/origin/12/12b28c2002f52c48aca84d9ffe1c134c.gif",
        "https://i.gifer.com/7JKb.gif",
        "https://media1.giphy.com/media/jq0GElfMAi8CGwTkBX/giphy.gif?cid=6c09b952e01gbl71vplpa1lux05f5306fxks8uuc00ceeny2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        "https://24.media.tumblr.com/10f219b798aefebef5de4e064d04cc05/tumblr_mlnd9ub2eq1rkehhdo1_500.gif",
        "https://media.giphy.com/media/4WFgJDx1vpirOvTn4g/giphy.gif",
        "https://media4.giphy.com/media/TK3p6PJV9uWJjWCK5O/giphy.gif?cid=6c09b9521nz2sabxx1uc9apt1ddl8rob1anjbe08aj1lxmjk&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        "https://media0.giphy.com/media/3ohs7QHXhJLudpeDok/giphy.gif?cid=6c09b952vwflkk8g3p5wk8u9c9ly7govebrllyc3fjordrey&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        "https://i.gifer.com/7AfF.gif",
        "https://media1.giphy.com/media/rPltWzwhMb9nfMN3zS/giphy.gif?cid=6c09b952k3lkibvl24r84dpw6wqmkio7rix2di6tl5j48jmv&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        "https://i.pinimg.com/originals/54/da/35/54da35c5df0acf0b86bc3a8821b54269.gif",
        "https://giffiles.alphacoders.com/267/26726.gif",
        "https://i.pinimg.com/originals/d4/4a/7c/d44a7c1063d33d1e08721430359e2e41.gif",
        "https://i.pinimg.com/originals/1f/40/73/1f4073e449f9ddbfbe4a054f21add5a2.gif",
        "https://guidelive.imgix.net/1450899529-the-beatles-gif.gif",
        "https://64.media.tumblr.com/5eb0f5a6cd32ebe6a6f7ed57841c5cb1/tumblr_mzo52wRoYg1sn7uyno1_500.gif",
        "https://media3.giphy.com/media/5cH8h1R1HUkybfaDy7/giphy.gif?cid=6c09b952ciifxiitqapr5x0r35qnsaqxhmw8htthfzif7kys&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
        "https://media2.giphy.com/media/26BRKmqUonCPPit1e/giphy.gif",
        "https://i.pinimg.com/originals/11/a4/2a/11a42a328ac7441259221b6505d55619.gif",
        "https://i0.wp.com/www.decoratedyouth.com/wp-content/uploads/2017/08/Tame-Impala-Panorama-Twitter-gif-Apocalypse-Dreams-2.gif?fit=1280%2C720&ssl=1",
        "https://i.gifer.com/F0HP.gif",
        "https://i.pinimg.com/originals/3d/65/2e/3d652e463c75550e19203ecd36fd0d80.gif",
        "https://24.media.tumblr.com/12afe1d3c15df76848be911958304027/tumblr_mgefmouBe41rheqhwo1_500.gif",
        "https://25.media.tumblr.com/2d366588387fac1c32a0ffe93f80463e/tumblr_n1cuqcLDrC1shrw6zo1_500.gif",
        "https://i.gifer.com/embedded/download/XdEb.gif",
        "https://31.media.tumblr.com/f6c949843ab0bffbf4fb12a95b561d88/tumblr_mt8s8fiJpw1r3maj7o1_500.gif",
        "https://i.pinimg.com/originals/c1/bd/7e/c1bd7e1124ff5b59bb08cdf4a3115614.gif",
        "https://media.tenor.com/q46QmTzuKr4AAAAd/red-hot-chili-peppers-black-summer.gif",
        "https://i.pinimg.com/originals/96/8d/63/968d63e310083cd36906c73088025568.gif",
        "https://25.media.tumblr.com/8255f44e0debc2474e85ebb5cc236606/tumblr_mlkn6cFv601qi4n2uo1_500.gif",
        "https://i.makeagif.com/media/2-01-2016/zLbBz-.gif"
    ];

const body = document.body;
    

    function preloadImages(urls) {
        return Promise.all(urls.map(url => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = reject;
            });
        }));
    }

    function randomSort() {
      return Math.random() - 0.5;
  }

  gifs.sort(randomSort);

    function startBackgroundAnimation() {
      let currentGifIndex = 0;

      function changeBackground() {
          body.style.backgroundImage = `url('${gifs[currentGifIndex]}')`;
          currentGifIndex = (currentGifIndex + 1) % gifs.length;
      }

        changeBackground();
        const intervalId = setInterval(changeBackground, 2000);
      

        startButton.addEventListener("click", function () {
            clearInterval(intervalId);
            body.style.backgroundImage = "url('https://support.musicgateway.com/wp-content/uploads/2023/03/ana-grave-gHcWaeldgtQ-unsplash-scaled.jpg')"; // Add a static background
        });
      }

        startNextRoundButton.addEventListener("click", function(){
          body.style.backgroundImage = "url('https://thoughtcatalog.com/wp-content/uploads/2021/10/Classic-Rock-Trivia.jpg?w=1920&h=1280&crop=1')"
        });

    preloadImages(gifs)
        .then(() => startBackgroundAnimation())
        .catch(error => console.error("Error preloading images:", error));
});

function startGame() {
  nextButton.style.display = 'none'

  startContainer.style.display = "none";
  console.log("Hiding start-container");

  quizContainer.style.display = "block"; 
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

  const finalScore = score;
  finalScoreElement.textContent = finalScore;

  const imageElement = document.createElement('img');
  const sentenceElement = document.createElement('p');

  const highScoreImagePath = 'https://i.gifer.com/L4T.gif';
  const lowScoreImagePath = 'https://media1.tenor.com/m/Lhsnu5y9BxcAAAAC/robin-you-rule.gif';

  const highScoreSentence = 'Rock on! You did great!';
  const lowScoreSentence = 'Oops! Looks like you need to crank up the volume and try again!';

  if (finalScore > 6) {
      imageElement.src = highScoreImagePath;
      sentenceElement.textContent = highScoreSentence;
  } else {
      imageElement.src = lowScoreImagePath;
      sentenceElement.textContent = lowScoreSentence;
  }

  endContainer.appendChild(imageElement);
  endContainer.appendChild(sentenceElement);
}



function startNewGame() {
  currentRound = 1;
  rounds = 0;
  score = 0; // PROBLEM: I can see the score from first game before clicking on an answer
  endContainer.style.display = "none";
  startNextRoundButton.style.display = "none";

  startNextRound();  
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
    playCorrectSound();
    alert("Correct!");
    score += 1;
  } else {
    playIncorrectSound();
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
  console.log(`selected ${selectedChoice}`);
  console.log(`correct ${correctChoice}`)

  if (selectedChoice === correctChoice) {
    playCorrectSound();
    alert("Correct!");
    score += 1;
  } else {
    playIncorrectSound();
    alert("Incorrect!");
  }
  scoreElement.innerHTML = score;
  setTimeout(startNextRoundLogic, 1000);
  rockMusicQuizQuestions.splice(currentQuestionIndex, 1)
}


function playCorrectSound() {
  const correctSound = new Audio('/sounds/correctAnswer.mp3');
  correctSound.play();
}

function playIncorrectSound() {
  const incorrectSound = new Audio('/sounds/wrongAnswer.mp3');
  incorrectSound.play();
}

function hidePlayerAndCheck() {
  // allow transition between rounds
  audioPlayer.style.display = "none";
  setTimeout(startNextRoundLogic, 1000);
}
