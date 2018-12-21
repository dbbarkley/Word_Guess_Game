// global var's
var possibleWords = ["enterprise", "vulcan", "klingon", "spock", "james-kirk", "khan"];
var rightLetter = [];
var wrongLetter = [];
var randomNumber = [Math.floor(Math.random() * possibleWords.length)];
var randomWord = possibleWords[randomNumber]

var generateUnderScore = document.getElementsByClassName("word");
 
//testing
console.log(randomWord);

// creates the underscores needed for word length
function newUnderScore () {
    var underScore = [];
    for(var i = 0; i < randomWord.length; i++) {
        underScore.push("_ ");  
    }   console.log(generateUnderScore);
    generateUnderScore.text = underScore.join(" ");
    return underScore;
}


// testing
console.log(newUnderScore());

// capture users guess and logs them into the correct array
document.onkeypress = function(evt) {
    var evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var lettersGuessed = String.fromCharCode(charCode);
        if(randomWord.indexOf(lettersGuessed) > -1) {
            rightLetter.push(lettersGuessed);
            console.log(rightLetter);
        } else(wrongLetter.push(lettersGuessed));
            document.getElementById("guessedletters").innerHTML = wrongLetter;        
          console.log(wrongLetter);
    }
    
        


          




                


    






    




