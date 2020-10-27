let playSong = document.getElementById("play");
let previousSong = document.getElementById("prev");
let nextSong = document.getElementById("next");

function play() {
    var audio = document.getElementsByTagName("audio");
    audio.play();
}