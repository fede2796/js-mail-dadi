//Dadi
//Devo calcolare due numeri random
//Creo un bottone
const startbutton = document.getElementById('startgame')
startbutton.addEventListener('click',
function (){
    const numberplayer = Math.floor(Math.random() * 6)+1;
    const numbercomputer = Math.floor(Math.random() * 6)+1;

    //Devo inserire due giocatori: 1. Giocatore, 2. Computer
    let player = numberplayer;
    let computer = numbercomputer;
    //Calcolo il risultato
    if(player > computer){
        result = 'Ha vinto il Giocatore';
    }
    else if (player < computer){
    result = 'Ha vinto il Computer';
    }
    else{
    result = 'Hanno Pareggiato';
    }
    console.log(player);
    console.log(computer);
    console.log(result);

    //Stampo il Vincitore
    document.getElementById('player').innerHTML = player;
    document.getElementById('computer').innerHTML = computer;
    document.getElementById('result').innerHTML = result;

    }
)