// global var's
var possibleWords = ["voyager", "vulcan", "picard", "spock", "grups", "khan", "phaser", "romulans"];
var rightLetter = [];
var wrongLetter = [];
var underScore = [];
var newScore = [];
var randomNumber = [Math.floor(Math.random() * possibleWords.length)];
var randomWord = possibleWords[randomNumber];
var wins;
var loses;
var lives = 10
//==============================================================================
//DOM munipulation
var generateUnderScore = document.getElementById("word");
var generateWrongLetter = document.getElementById("wrongletters");
var winGame = document.getElementById("wins");
var showLives = document.getElementById("lives");
//==============================================================================
//testing
console.log(randomWord);
// creates the underscores needed for word length
var newUnderScore = () => {
    for(var i = 0; i < randomWord.length; i++) {
        underScore.push("_ ");  
    }generateUnderScore.innerHTML = underScore.join(" ");
    console.log(generateUnderScore);
    return underScore;
};
//==============================================================================
// testing
console.log(newUnderScore());
// capture users guess and logs them into the correct array

document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    if(randomWord.indexOf(keyword) > -1 ) {
        rightLetter.push(keyword);
        underScore[randomWord.indexOf(keyword)] = keyword.toUpperCase();
        generateUnderScore.innerHTML = underScore.join(" ");
            if(randomWord.length == rightLetter.length) {
                for(var k = 0; k < wins.length; k++); {
                    winGame.innerHTML = winGame[k];
                }
                alert("you win! You guessed " + randomWord + ".");
                console.log(winGame);
                
            
            }
           }else(wrongLetter.push(keyword.toUpperCase())); {
            document.getElementById("wrongletters").innerHTML = wrongLetter; 

        }
        console.log(rightLetter);
        console.log(wrongLetter);
    });


//==============================================================================
    
    var display = function () { //print outs for end game
        showLives.innerHTML = "You have " + lives + " lives";
    };
    console.log(display());

    
    



    
        


          




                


    






    




