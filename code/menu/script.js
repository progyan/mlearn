const NAMES = ['santa'];
const HREFS = ['..\\problems\\santa\\index.html'];

APIF.start();

let sound = new Audio("..\\..\\sound\\menu.mp3");
sound.play();

function close_window() {
    window.close();
    APIF.stop();
    setTimeout(() => {APIF.goto("..\\bye\\index.html")}, 1000);
}

function challenge(str){
    APIF.stop();
    let href = HREFS[search(str, NAMES)];
    setTimeout(() => {APIF.goto(href)}, 1000);
}

function search(search, strings){
    let i = 0;
    for(string of strings){
        if(string == search)
            return i;
        i++;
    }
}