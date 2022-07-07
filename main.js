//  VARIABLES 

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let my_progress_bar = document.getElementById('my_progress_bar');


let songs = [
    {songName: "My baby", filePath: "1.mp3", coverPath: "./images/baby.png"},
    {songName: "My baby", filePath: "1.mp3", coverPath: "./images/baby.png"},
    {songName: "My baby", filePath: "1.mp3", coverPath: "./images/baby.png"},
    {songName: "My baby", filePath: "1.mp3", coverPath: "./images/baby.png"},
    {songName: "My baby", filePath: "1.mp3", coverPath: "./images/baby.png"},
    {songName: "My baby", filePath: "1.mp3", coverPath: "./images/baby.png"}
]






// Handle Play/Pause click 

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('uil-play-circle');
        masterPlay.classList.add('uil-pause');
    }
    else if(audioElement.played || audioElement.currentTime>=0 ){
        audioElement.pause();
        masterPlay.classList.remove('uil-pause');
        masterPlay.classList.add('uil-play-circle');
    }    

    })