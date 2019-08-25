// FUNCTION DEFINITION 



//  WORD DEFINITION
var words =["western", "cowboy", "indian"];

var word = words[Math.floor(math.random()*words.length)];

var answerArray = [];


// GENERATING THE VISUAL QUEUE FOR USER TO KNOW NUMLETTERS
for (i=0; i<word.length; i++) {
    answerArray[i] = "_";
}




var remainingLetters = word.length



// BEFORE A CONDITION IS ESTABLISHED: BEFORE WORD IS WRITTEN 
while (remainingLetters>0) {
    alert(answerArray.join(""));  
    // PLACEHOLDER GAME GENERATOR JUST DISPLAYS IN THE ALERT (OBVIOUS WHEN RUNNING)
    // document.onkeyup = function(event) { NEED TO CALL FUNCTION HERE
}



// USER INPUT
var guess = prompt("Enter your Guess - Empty Guess/Cancel will end game")
    if (guess==null) {
        break;
    } elseif (guess.length !== 1) {
        alert("One guess at a time!")
    } else {
        for (j=0; j<word.length; j++) {
            if (word[j]==guess) {
                answerArray[j] = guess;
                reminingLetters--;

            }
        }
    }


    // SUCCESS CONDITION
    alert(answerArray.join(" "));