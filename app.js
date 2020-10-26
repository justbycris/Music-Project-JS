let playSong = document.getElementById("play");
let previousSong = document.getElementById("prev");
let nextSong = document.getElementById("next");


function playSong() {
    let audio = document.querySelector("track");
    audio.play();
}