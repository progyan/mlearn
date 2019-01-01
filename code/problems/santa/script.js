APIF.start();

let audio = new Audio("..\\..\\..\\sound\\challenge.mp3");
audio.volume = 0.5;
audio.play();

let deer;
let deer_lost;

let i = 0;

function init(){
    deer = Math.ceil(Math.random() * 9);
    deer_lost = Math.ceil(Math.random() * (10 - deer));
    const DEER_TAG = "<img src=\"..\\..\\..\\img\\deer.png\" class=\"deer\">";

    document.getElementById("text").innerHTML = 
        "Santa has " + deer + " deer. " + 
        deer_lost + " deer were lost. How many deer Santa had until " +
        deer_lost + " was lost?";

    document.getElementById("container").innerHTML = "";

    for(let i = 0; i < deer; i++){
        document.getElementById("container").innerHTML += DEER_TAG;
        console.log(DEER_TAG);
    }
}

init();

function close_window(){
    APIF.stop();
    setTimeout(() => {APIF.goto("..\\..\\menu\\index.html")}, 1000);
}

function check(){
    if(document.getElementById("input").value == deer + deer_lost && i < 4){
        document.getElementById("blackhole").style.backgroundColor = "yellowgreen";
        console.log(document.getElementById("blackhole").style.backgroundColor);
        APIF.stop();
        setTimeout(() => {
            init();
            i++;
            document.getElementById("challenge").innerHTML = (i + 1) + " / 5";
            APIF.start();
            setTimeout(() => {
                document.getElementById("blackhole").style.backgroundColor = "black";
            }, 700);
        }, 700);
    } else if(i > 3){
        hohoho();
    }
}

function hohoho(){
    let santaclaus = new Audio("..\\..\\..\\sound\\santaclaus.mp3");
    santaclaus.play();
    setTimeout(APIF.stop, 3000);
    setTimeout(() => {APIF.goto('..\\..\\menu\\index.html')}, 4000);
}