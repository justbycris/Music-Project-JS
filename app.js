const songs = [
    "LeonBridges-SmoothSailin.mp3",
    "ArethaFranklin-ISayALittlePrayer.mp3",
    "TheJackson5-IWantYouBack.mp3",
    "AvrilLavigne-Sk8erBoi.mp3",
    "MarvinGaye-LetsGetItOn.mp3",
];

const player = document.getElementById('player')

function createSongList() {
    const list = document.createElement('ol');

    //FOR LOOP TO CREATE THE <li></li> element for every song on the array
    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list
}

const songList = document.getElementById('songsList');
songList.appendChild(createSongList());

songList.onclick = function(e) {

    const source = document.getElementById('source');
    source.src = "audio/" + e.target.innerText;

    //DISPLAY SONG NAME THAT IS PLAYING
    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`;

    //PLAY SONG WHEN CLICKED

    player.load()
    player.play()

    //*IDEA* ADD TO DISPLAY ALBUM IMAGE
}


//PLAY BUTTON 
function playAudio() {
    if (player.readyState) {
        player.play();
    }
}

//PAUSE BUTTON
function pauseAudio() {
    player.pause();
}

//CONTROL VOLUME
const slider = document.getElementById('volumeSlider');
slider.oninput = function(e) {
    const volume = e.target.value
    player.volume = volume;
}