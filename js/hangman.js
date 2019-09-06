var myNewArray = [];


var wordlist = [],
        targetWord = '',
        guesses = [],
        maxLives = 6;


function setImage(number) {

    document.getElementById("hangman_img").removeAttribute("class");
    document.getElementById("hangman_img").classList.add("image" + number);
  

}

function loadWordlist() {
    var word = '';

    wordlist = ['cowboy', 'western', 'horse'];


}

function newWord() {
    targetWord = wordlist[Math.floor(Math.random() * wordlist.length)];
}

function obfuscateWord() {
    var obWord = '';

    for (var i = 0; i < targetWord.length; i++) {
        if (guesses.indexOf(targetWord[i].toLowerCase(), 0) == -1) {
            obWord += ' _ ';
        } else {
            obWord += targetWord[i];
        }
    }
    return obWord;
}

function drawWord() {
    while (targetWord == '') {
        newWord();
    }
    console.log(obfuscateWord())
    document.getElementById("targetWord").innerHTML=obfuscateWord();
    
}

function drawGuesses() {
    guesses.sort();
    
    document.getElementById("previousGuesses").innerHTML=guesses.join(', ');
}

function cleanGuess() {
    var uniqueGuesses = [];
    

    $.each(guesses, function(index, element) {
        if (element.length > 0 && $.inArray(element, uniqueGuesses) == -1) {
            uniqueGuesses.push(element);
        }
    });
    guesses = uniqueGuesses;


    document.onkeydown = function(event) {
    var userIn = '';

    userIn = String.fromCharCode(event.keycode)

    console.log("user input = " + userIn);
}
}

function addGuess() {


    if (/^[a-zA-Z]*$/.test($('#guess').val()) && typeof $('#guess').val() !== "undefined") {
        guesses.push($('#guess').val().toLowerCase()); //NONNUMERIC FILTER BUT UPDATES THE ARRAY
    }



$('#guess').val(''); //JUST UPDATING THE HTML
// document.getElementById("guess").innerHTML='';

}




function endGameDialog(isWinner) {
    if (isWinner) {
        $('#endGameDialogTitle').html('You won');
        $('#endGameDialogContent').html('You guessed ' + targetWord + ' in ' + guesses.length + ' attempts');
    } else {
        $('#endGameDialogTitle').html('You lost');
        $('#endGameDialogContent').html('Unlucky.  The word was ' + targetWord);
    }

    $('#endGameDialog').modal('toggle');
}

function reviewLives() {
    var livesRemaining = maxLives,
            string = targetWord.toLowerCase();

    for (var i = 0; i < guesses.length; i++) {
        if (string.indexOf(guesses[i], 0) == -1) {
            livesRemaining--;
        }
    }

    if (livesRemaining <= 0) {
        setImage(0);
        endGameDialog(false);
        return;
    }

    setImage(maxLives - livesRemaining);
}

function checkIfWon() {
    if (obfuscateWord() == targetWord) {
        endGameDialog(true);
    }
}

function resetGame() {
    setImage(0);
    targetWord = '';
    guesses = [];
    newWord();
}

function update() {
    addGuess();
    cleanGuess();
    drawWord();
    drawGuesses();
    reviewLives();
    checkIfWon();
}

// $(document).ready(function() {
document.addEventListener("click", function(){
    loadWordlist();
    drawWord();
    drawGuesses();

    document.addEventListener('onkeyup', update());
    document.getElementById("guess").innerHTML=guesses
    // console.log("before=" + document.getElementById("guess"))
    //  $('#guess').attr('onkeyup', 'update();');
    // console.log("after" + document.getElementById("guess"))
});



//COMPLETE REWRITE 

