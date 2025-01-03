let progress = document.getElementById("progress")
let song=document.getElementById("song")
let ctrlIcon=document.getElementById("ctrlicon")
let audioSource=document.getElementById("audioSource")
let songs=[
    "One_Direction_-_Night_Changes_(Lyrics)(128k).mp3",
     "The_Weeknd_-_Reminder_(Lyrics)(128k).mp3",
     "abc.mp3"
];
let i=0;
song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}
function forward(){
    i=(i+1) % songs.length;
    audioSource.src=songs[i];
    song.load()
    song.play()
    updatesonginfo()
}
function backward(){
    if(i>0)
    i=(i-1 + songs.length) % songs.length;
    audioSource.src=songs[i];
    song.load()
    song.play()
    updatesonginfo()
}
function playpause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause()
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    }
    else{
        song.play()
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }
}
    if(song.play()){
        song.pause()
        setInterval(() => {
         
            progress.value=song.currentTime
        }, 500);
    }
    progress.onchange=function(){
       
        song.currentTime=progress.value
        song.play();
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")

    }  
    function updatesonginfo() {
        let title= document.querySelector("h2");
        let artist = document.querySelector("p");
    
        if (i === 0) {
            title.textContent = "Night Changes";
            artist.textContent = "One Direction";
        } else if (i=== 1) {
            title.textContent = "Reminder";
            artist.textContent = "The Weeknd";
        }
        else if (i=== 2) {
            title.textContent = "Die for you";
            artist.textContent = "The Weeknd";
        }
    } 