APIF.start();

let audio = new Audio("../../../sound/challenge.mp3");
audio.volume = 0.25;
audio.play();

let deer;
let deer_lost;
let level = 1;

let i = 0;

function init(){
    deer = Math.ceil(Math.random() * 9);
    deer_lost = Math.ceil(Math.random() * (10 - deer));
    const DEER_TAG = "<img src=\"../../../img/deer.png\" class=\"deer\">";
    document.getElementById("text").innerHTML = 
        "Santa has " + deer + " deer. " + 
        deer_lost + " deer were lost. How many deer Santa had until " +
        deer_lost + " was lost?";

    document.getElementById("container").innerHTML = "";

    for(let i = 0; i < deer; i++){
        document.getElementById("container").innerHTML += DEER_TAG;
    }

    function lost(){
        const DEER_LOST_TAG = "<img src=\"../../../img/lost_deer.png\" class=\"deer\">";
        for(let i = 0; i < deer_lost; i++){
            document.getElementById("container").innerHTML += DEER_LOST_TAG;
        }
    }

    if(level == 1){

    }else if(level == 2){
        lost();
    }

    let a, b, c;

    a = deer + deer_lost;
    b = deer + deer_lost;
    c = deer + deer_lost;

    while(a == (deer + deer_lost)){
        a = Math.ceil(Math.random() * 9);
    }

    while(b == a || b == (deer + deer_lost)){
        b = Math.ceil(Math.random() * 9);
    }

    while(c == a || c == b || c == (deer + deer_lost)){
        c = Math.ceil(Math.random() * 9);
    }

    document.getElementById("test").innerHTML = `<span class="answer" onclick="bold(this)">${(shuffle([
        a, b, c, (deer + deer_lost)
    ]).join("</span> &nbsp; <span class=\"answer\" onclick=\"bold(this)\">"))}</span>`;
}

function shuffle(list){
    let output = [];
    let id, el;
    for(let i = 0; i < list.length; i++){
        el = null;
        while(!el){
            id = Math.floor(Math.random() * list.length);
            el = list[id];
        }
        list[id] = null;
        output[i] = el;
    }
    return output;
}

init();

function close_window(){
    APIF.stop();
    setTimeout(() => {APIF.goto("../../menu/index.html")}, 1000);
}

function check(){
    let elem = document.getElementById("selected");
    let nValue;
    if(elem)
        nValue = parseInt(elem.innerHTML);
    else
        return;
    if(nValue == deer + deer_lost && i < 4){
        document.getElementById("blackhole").style.backgroundColor = "green";
        APIF.stop();
        setTimeout(() => {
            init();
            i++;
            document.getElementById("challenge").innerHTML = (i + 1) + " / 5";
            document.getElementsByTagName("title")[0].id = "selected";
            APIF.start();
            setTimeout(() => {
                document.getElementById("blackhole").style.backgroundColor = "black";
            }, 700);
        }, 700);
    } else if(i > 3 && nValue == deer + deer_lost){
        hohoho();
    } else {
        document.getElementById("blackhole").style.backgroundColor = "#ff5500";
        APIF.stop();
        setTimeout(() => {
            init();
            document.getElementById("challenge").innerHTML = (i + 1) + " / 5";
            document.getElementsByTagName("title")[0].id = "selected";
            APIF.start();
            setTimeout(() => {
                document.getElementById("blackhole").style.backgroundColor = "black";
            }, 700);
        }, 700);
    }
}

function hohoho(){
    let santaclaus = new Audio("../../../sound/santaclaus.mp3");
    santaclaus.play();
    setTimeout(APIF.stop, 3000);
    setTimeout(() => {APIF.goto('../../menu/index.html')}, 4000);
}

function bold(el){
    document.getElementById("selected").id = "";
    el.id = "selected";
}