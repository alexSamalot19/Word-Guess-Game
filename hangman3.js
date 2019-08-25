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

    wordlist = ['one', 'two', 'three'];
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
 
    document.getElementById("targetWord").innerHTML=obfuscateWord();
}

function drawGuesses() {
    guesses.sort();
    document.getElementById("previousGuesses").innerHTML=guesses.join(', ');
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


document.addEventListener("onkeydown", function(){
    loadWordlist();
    drawWord();
    drawGuesses();
  
    
        var x = event.keyCode;               
        var y = String.fromCharCode(x);
            
        
            var uniqueGuesses = [];
            for (i=0; i<guesses.length; i++) {
                if( uniqueGuesses.indexOf(y.toLowerCase) === -1){
                    uniqueGuesses.push(y.toLowerCase);
                }
                }
                guesses = uniqueGuesses;
        
        
                document.getElementById("guess").innerHTML='';
        
                console.log(y.toLowerCase)
        
        
        
        


        guessVar = document.getElementById("guess");
        guessVar.onkeyup = update;

        drawWord();
    drawGuesses();
    reviewLives();
    checkIfWon();


});