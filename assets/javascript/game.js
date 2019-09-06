var letter = '';
var letterList = ['a', 'b', 'c', 'd'];
var guessList = [];
var j = -1;
var livesLeft = 5;
var wins = 0;
var losses = 0;

var targetLetter = letterList[Math.floor(Math.random() * letterList.length)];
console.log(targetLetter)

window.addEventListener("keydown", checkKey, false);

function checkKey(event) {
    var x = event.keyCode;
    var y = String.fromCharCode(x);
    console.log(y.toLowerCase());
    livesLeft--;
    j++;

    guessList[j] = y.toLowerCase();

    document.getElementById("guessList").textContent = guessList;
    document.getElementById("livesLeft").textContent = livesLeft;
    // console.log()


    if (targetLetter == y.toLowerCase()) {
        wins++
        if (livesLeft === 0) {



            losses++
        }
    }

    document.getElementById("winList").textContent = wins;
    document.getElementById("lossList").textContent = losses;




};


