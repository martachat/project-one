const audioPlayer = document.getElementById('audio-player')
const audioSource = document.getElementById('audio-source')


const audioFiles = [
    '/audio/ACDC - Back In Black.mp3',
    '/audio/Black Sabbath - Paranoid (Official Audio).mp3',
    '/audio/Nirvana - Lithium.mp3',
    '/audio/onlymp3.to - Red Hot Chili Peppers Otherside Official Music Video -rn_YodiJO6k-192k-1703019080.mp3'
];

let currentAudioIndex = 0

function nextSong(){
    currentAudioIndex += 1
    const audio = document.createElement('audio')
    audio.setAttribute('controls', true)
    
    
    const source = document.createElement('source')
    source.setAttribute('src', audioFiles[currentAudioIndex])
    source.type="audio/mp3"
    audio.appendChild(source)

   
    const question = document.getElementById('question-container')
    audioPlayer.remove()
    question.appendChild(audio)
}



