var song6 ="audio/mixkit-church-light-applause-501.wav"
var lastToPlay = new Audio (song6)

var song2 ="audio/You-are-a-Mumu-Man.mp3" 
var audioToPlay = new Audio (song2)


function even() {
    if(num.value !="" ) {
     if (num.value == 2 ||num.value ==  4 || num.value ==  6 || num.value ==  8 ||num.value ==  10|| num.value == 12 ||num.value == 14 ||num.value == 16 ||num.value == 18 ||num.value == 20 ||num.value == 22 ||num.value == 24 ||num.value == 26 ||num.value == 28 ||num.value == 30 ||num.value == 32 ||num.value == 34 ||num.value == 36 ||num.value == 38 ||num.value == 40 ||num.value == 42 ||num.value == 44 ||num.value == 46 ||num.value == 48 ||num.value == 50 ||num.value == 52 ||num.value == 54){
     console.log("even");
     show.innerHTML ="even✔✔" 
     lastToPlay. play()
    } else if(num.value == 1 || num.value == 3 || num.value == 5 || num.value == 7 || num.value == 9 || num.value == 11 || num.value == 13 || num.value == 15 || num.value == 17 ||num.value == 19 ||num.value == 21 ||num.value == 23 ||num.value == 25 ||num.value == 27 ||num.value == 29 ||num.value == 31 ||num.value == 33 ||num.value == 35 ||num.value == 37 ||num.value == 39 ||num.value == 41 ||num.value == 45 ||num.value == 47 ||num.value == 49 ||num.value == 51 ||num.value == 53 ||num.value == 55 ||num.value == 57)
    {
     console.log("odd"); 
     show.innerHTML= "odd✔✔ "
     lastToPlay. play()
   }
   else if( num.value == 1 || num.value == 3 || num.value == 5 || num.value == 7 || num.value == 9 || num.value == 11 || num.value == 13 || num.value == 15 || num.value == 17 ||num.value == 19 ||num.value == 21 ||num.value == 23 ||num.value == 25 ||num.value == 27 ||num.value == 29 ||num.value == 31 ||num.value == 33 ||num.value == 35 ||num.value == 37 ||num.value == 39 ||num.value == 41 ||num.value == 45 ||num.value == 47 ||num.value == 49 ||num.value == 51 ||num.value == 53 ||num.value == 55 ||num.value == 57 || num.value == 2 ||num.value ==  4 || num.value ==  6 || num.value ==  8 ||num.value ==  10|| num.value == 12 ||num.value == 14 ||num.value == 16 ||num.value == 18 ||num.value == 20 ||num.value == 22 ||num.value == 24 ||num.value == 26 ||num.value == 28 ||num.value == 30 ||num.value == 32 ||num.value == 34 ||num.value == 36 ||num.value == 38 ||num.value == 40 ||num.value == 42 ||num.value == 44 ||num.value == 46 ||num.value == 48 ||num.value == 50 ||num.value == 52 ||num.value == 54 == false)
   {
    console.log("you are a fool"); 
    show.innerHTML= "mumu"
    audioToPlay.play()
  }
   }
   }