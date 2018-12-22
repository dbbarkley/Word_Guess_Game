// global var's
var possibleWords = ["voyager", "vulcan", "picard", "spock", "grups", "khan", "phaser", "romulans"];
var rightLetter = [];
var wrongLetter = [];
var underScore = [];
var randomNumber = [Math.floor(Math.random() * possibleWords.length)];
var randomWord = possibleWords[randomNumber]
var wins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var loses = [10, 9, 8, ,7, 6, 5, 4, 3, 2, 1, 0];
var remainingGuesses = [10, 9, 8, ,7, 6, 5, 4, 3, 2, 1, 0];

var generateUnderScore = document.getElementById("word");
var generateWrongLetter = document.getElementById("wrongletters");
var winGame = document.getElementById("wins");
//testing
console.log(randomWord);

// creates the underscores needed for word length
var newUnderScore = () => {
    for(var i = 0; i < randomWord.length; i++) {
        underScore.push("_ ");  
    }   console.log(generateUnderScore);
    generateUnderScore.innerHTML = underScore.join(" ");
    return underScore;
}


// testing
console.log(newUnderScore());

// capture users guess and logs them into the correct array
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    if(randomWord.indexOf(keyword) > -1 ) {
        rightLetter.push(keyword);
        underScore[randomWord.indexOf(keyword)] = keyword.toUpperCase();
        generateUnderScore.innerHTML = underScore.join(" ");
           }else(wrongLetter.push(keyword.toUpperCase())); {
            document.getElementById("wrongletters").innerHTML = wrongLetter; 
        }
    });
  
    /*
    underScore.join(" ") == randomWord && keyword;
    for(var k = 0; k > wins.length; k--);
    winGame.innerHTML = wins[k]; 
    alert("you win");*/



    
        


          




                


    






    




