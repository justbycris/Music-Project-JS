/*let songList = document.getElementById('songList');

const songs = [{
        name: "Respect",
        artist: "Aretha Franklin",
        imgFile: "images/Album covers/Aretha Franklin - Respect-01.png",
        Audio: "./audio/Hustle & Grow/Aretha Franklin - Respect [1967] (Aretha's Original Version).mp3"
    },
    {
        name: "Formation",
        artist: "Beyonce",
        imgFile: "images/Album covers/formation-cover-01.png",
        Audio: "./audio/Hustle & Grow/Beyoncé - Formation.mp3"
    },
    {
        name: "I Don't Fuck With You",
        artist: "Big Sean",
        imgFile: "images/Album covers/Idontfuckwithyou-01.png",
        audio: "./audio/Hustle & Grow/Big Sean - I don't fuck with you ft. E-40 #IDFWU LYRICS.mp3"
    },
    {
        name: "It's My Life",
        artist: "Bon Jovi",
        imgFile: "images/Album covers/Itsmylife-01.png",
        audio: "./audio/Hustle & Grow/Bon Jovi -It's my life.mp3"
    },
    {
        name: "8 Mile",
        artist: "Eminem",
        imgFile: "images/Album covers/8MILE-COVER-01.png",
        audio: "./audio/Hustle & Grow/Eminem - 8 Mile .mp3"
    },
    {
        name: "Whatever It Takes",
        artist: "Imagine Dragons",
        imgFile: '//images/Albumcovers/whateverittakes.jpg',
        audio: "./audio/Hustle & Grow/Imagine Dragons - Whatever It Takes .mp3"
    },
    {
        name: "Monster",
        artist: "Jacob Banks",
        imgFile: "images/Albumcovers/MonsterJB-01.png",
        audio: "./audio/Hustle & Grow/Jacob Banks - Monster .mp3"
    }
];

const createSongList = () => {
    const list = document.createElement('div')

    for (let i = 0; i < songs.length; i++) {
        const newsong = document.insertAdjacentHTML(beforebegin)
        const item = document.createElement('div')
        item.appendChild(document.createTextNode(Object.values(songs[i])))

        list.appendChild(item)
    }
    return list
}

document.getElementById('songList').appendChild(createSongList())