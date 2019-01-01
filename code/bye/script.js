const BYE = ["Bye!", "See you later!", "See you!", "Goodbye!", "It was a good time!"];

document.getElementById("logo").innerHTML = BYE[Math.floor(Math.random() * 5)];

APIF.start();

setTimeout(() => {
    APIF.stop();
    document.body.onclick = () => {APIF.goto("..\\logo\\index.html")};
}, 3000);