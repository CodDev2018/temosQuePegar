var score;
var count;
var spanScore;

function iniciar() {
    inicializaScore();
    setInterval(addBola, 700);
}

function inicializaScore() {
    score = 0;
    count = 0;
    spanScore = document.getElementById("score");
    spanScore.innerHTML = score;
}

function addBola() {
    if (count == 10) {
        gameOver();
    }
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    var p1 = Math.floor(Math.random() * document.documentElement.clientWidth - 60);
    if (p1 < 0) p1 = 10
    var p2 = Math.floor(Math.random() * document.documentElement.scrollHeight - 110);
    if (p2 < 110) p2 = 110
    var cor = parseInt(Math.random() * 999999);
    var background = parseInt(10 * Math.random());
    bola.setAttribute("style", "left:" + p1 + "px;top:" + p2 + "px;background-color:#" + cor +"; background-image: URL('imgs/pokemon"+background+".png')");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
    count++
}

function estourar(elemento) {
    document.body.removeChild(elemento);
    pontuar();
    count--;
}

function pontuar() {
    score += 1;
    var spanScore = document.getElementById("score");
    spanScore.innerHTML = score;
}

function gameOver() {
    alert('Game Over!');
    location.reload();
}