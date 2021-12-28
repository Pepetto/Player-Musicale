let tracks = [

    {url : './music1.mp3',
cover : './bello.jpg' , artist : 'Alt-j' , title : 'Fitzpleasure'},

{url : './FarewellSpaceman.mp3',
cover : './blockhead1.jpg' , artist : 'BlockHead' , title : 'Farewell Spaceman'},

{url : './trapCity.mp3',
cover : './trapCity1.jpg' , artist : 'Trap City' , title : 'Sleing Bells'},

{url : './MusicScene.mp3',
cover : './blockhead2.jpg' , artist : 'BlockHead' , title : 'The Music Scene'},

{url : './RockingAround.mp3',
cover : './trapCity1.jpg' , artist : 'Trap City' , title : 'Rocking Around'},

{url : './LoneDigger.mp3',
cover : './caravanpalace1.jpg' , artist : 'Caravan Palce' , title : 'Lone Digger'},

{url : './music1.mp3',
cover : './bello3.jpg' , artist : 'Alt-y' , title : 'A BELLO DE ChieSA'},

]


const songListWrapper = document.querySelector('#songListWrapper')
let currentTrack = 0
// Bottoni Play Pausa

const btnPlay = document.querySelector('#btnPlay')
const btnPausa = document.querySelector('#btnPausa')
const btnNextTrack = document.querySelector('#btnNextTrack')
const btnPrevTrack = document.querySelector('#btnPrevTrack')

// Elementi
const albumCover = document.querySelector('#albumCover')
const track = document.querySelector('#track')
const trackArtist = document.querySelector('#trackArtist')
const trackTitle = document.querySelector('#trackTitle')
const currentTime = document.querySelector('#currentTime')
const totalTime = document.querySelector('#totalTime')




track.addEventListener('timeupdate', () => {
    updateProgress()
})


track.addEventListener('loadeddata', () => {
    currentTime.innerHTML = formatTime(0)
    totalTime.innerHTML = formatTime(track.duration)
})

function updateProgress(){
    let progress = (track.currentTime / track.duration) * 100
    progressTimeBar.style.width = progress + '%'
    currentTime.innerHTML = formatTime(progress)
}



function formatTime(sec) {
    let minutes = Math.floor(sec / 60)
    let seconds = Math.floor(sec - minutes * 60)

    if(seconds < 10){
        return `${minutes}:0${seconds}`
    }
    return `${minutes}:${seconds}`
}


btnPlay.addEventListener('click', () =>{
    btnPlay.classList.toggle('d-none')
    btnPausa.classList.toggle('d-none')
    albumCover.classList.toggle('play')

    track.play()
}),

btnPausa.addEventListener('click', () =>{
    btnPlay.classList.toggle('d-none')
    btnPausa.classList.toggle('d-none')
    albumCover.classList.toggle('play')
    track.pause()
}),

btnNextTrack.addEventListener('click', () => {
    nextTrack()
})





function changeTrackDetails(){
    let song = tracks [currentTrack]
    albumCover.src = song.cover
    track.src = song.url
    trackArtist.innerHTML = song.artist
    trackTitle.innerHTML = song.title
    
}


function nextTrack(){
    currentTrack++

    if(currentTrack > tracks.length -1){
        currentTrack = 0
    }

        let playing = !track.paused
    
    changeTrackDetails()

    if(playing){
        track.play()
    }
}

btnPrevTrack.addEventListener('click', () => {
    prevTrack()
})


track.addEventListener('ended' , () => {
    nextTrack()
})


function prevTrack(){
    currentTrack--
    if(currentTrack < 0){
        currentTrack = tracks.length -1
    }
    let playing = !track.paused
    
    changeTrackDetails()

    if(playing){
        track.play()
    }
}

function populateSongList(){

}









tracks.forEach(track => {
    let card = document.createElement('div')

    card.classList.add('col-12')

    card.innerHTML = 
    ` 
                      <div class="card-song  d-flex justify-content-between align-items-center ">
                           <h3>${track.title}</h3>
                      <button class="btn btn-play-song active "><i class="far fa-play-circle"></i></button>
                      </div>
    `
    songListWrapper.appendChild(card)
})


populateSongList()

changeTrackDetails()


