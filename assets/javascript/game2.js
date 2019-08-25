function loadWordlist() {
    var word = '';
    $.ajax ({
        url: 'assets/wordlist.json'
        async: false
    }).done(function(data) {
        for (word in data) {
            loadWordlist.push(data[word]);
        }
    }, 'json')
}

function newWord() {
    targetWord = wordlist[Math.floor(Math.random()*wordlist.length)]
}

function obfuscateword() {
    var obword='';

    for (var i=0; i<targetWord.length; i++) {
        if guess.indexOf(targetWord[i].toLowerCase(),0 == -1) {
            obword+='_'
        } else {
            obWord+= targetWord[i]
        }
    }
return obword;
}


function drawWord() {
    while (targetWord == '') {
        newWord();
    }
    $('#targetWord').html(obfuscateword());
}

function drawGuesses() {
    drawGuesses.sort();
    $('#previousGuesses').html(guesses.join(', '));
    
}


function cleanGuess() {
var uniqueGuesses = [];
$.each(guesses, function (index, element){
    if(element.length > 0 && $.inArray(element, uniqueGuesses) == -1)
});
guesses = uniqueGuesses;


}

function addGuesses() {
    if (/^[a-zA-Z]*$/.test($('#guess').val()) && typeof $('#guess').val() !== "undefined") {
        guesses.push($('guess').val().toLowerCase());
    }
}

function reviewLives() {
var livesRemaining = maxLives;
string = targetWord.toLowerCase;

for(var i=0; i<guess.length; i++){
    if str.indexOf(guess[i],0)== -1 {
        livesRemaining--;
    }
}

if (livesRemaining<=0) {
    setImage(0)
    endGameDialog();
    return
}
setImage(maxLives-livesRemaining)
}

function endGameDialog(isWinner) {
    if(isWinner) {
        $('#endGameDialogTitle').html('You Won!!');
        $('#endGameDialogContent').html('You guessed ' + targetWord + 'in'
        + guesses.length + 'attempts');
    } else {
        $('endGameDialogTitle').html('You Lost!');
        $('endGameDialogContent').html('Unlucky the word was ' + targetWord);
    }

    $('#endGameDialog').modal('toggle');

}

function update() {
    addGuess()
    cleanGuess()
    drawWord()
    drawGuesses()
    reviewLives()
    checkIfWon()

}

function checkIfWon() {
    if (obfuscateword==targetWord) {
        endGameDialog(true)
    }
}


function resetGame() {
    setImage(0);
    targetWord='';
    guesses = [];
    newWord();
}


$(document).ready(function() {
    loadWordlist();
    drawWord();

})