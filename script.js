console.log("Welcome to spotify")
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('Maan Meri Jaan(PagalWorld.com.se).mp3');
let masterPlay = document.getElementById('masterPlay')
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songs=[
    {songName:"Maan meri jaan", filePath:"1.mp3", coverPath:"64630_1.jpg"},
    {songName:"Raatan Lambiyan", filePath:"2.mp3", coverPath:"3198_1.jpg"},
    {songName:"shrivalli", filePath:"3.mp3", coverPath:"5103_1.jpg"},
    {songName:"Kesariya", filePath:"4.mp3", coverPath:"6591_1.jpg"},
    {songName:"Let me love you", filePath:"5.mp3", coverPath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuZ4ZFGyGP-2Z2qG4jljEHZX-d3cSCXE9tA&usqp=CAU"},
    {songName:"Saami Saami", filePath:"6.mp3", coverPath:"4635_4.jpg"},
    {songName:"Jhoome Jo Pathaan", filePath:"7.mp3", coverPath:"65406_4.jpg"},
    {songName:"Lakshya", filePath:"8.mp3", coverPath:"128Lakshya - Lakshya 128 Kbps.jpg"},
]

songItems.forEach((element,i) => {
   
    element.getElementsByTagName('img')[0].src =songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});

// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate')
//update seekbar
progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime= (myprogressbar.value*audioElement.duration)/100;
})
const makeAllPlays = ()=>
{Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    

        // console.log("element",element.target)
        element.classList.add('fa-play');
            element.classList.remove('fa-pause');
    })
       

}

    


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log("hello",e.target);
        makeAllPlays();
        
        songIndex = parseInt(e.target.id)
        
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        audioElement.src = `${songIndex}.mp3`;
        masterSongName.innerText= songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText= songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1
    
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText= songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
})