// global var's
var possibleWords = ["voyager", "vulcan", "picard", "spock", "grups", "khan", "phaser", "romulans"];
var rightLetter = [];
var wrongLetter = [];
var underScore = [];
var newScore = [];
var randomNumber = [Math.floor(Math.random() * possibleWords.length)];
var randomWord = possibleWords[randomNumber];
var wins = 0;
var loses = 0;
var lives = 10
//==============================================================================
//DOM munipulation
var generateUnderScore = document.getElementById("word");
var generateWrongLetter = document.getElementById("wrongletters");
var winGame = document.getElementById("wins");
var showLives = document.getElementById("livesLost");
var loseGame = document.getElementById("lose");
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
                winGame.innerHTML = wins += 1;
                alert("You win! You guessed " + randomWord + ".");
                console.log(winGame);     
            }
           }else(wrongLetter.push(keyword.toUpperCase())); {
            document.getElementById("wrongletters").innerHTML = wrongLetter; 
            showLives.innerHTML = lives -= 1;
                if(lives == 0) {
                    loseGame.innerHTML = loses +=1;
                    alert("Better luck next time! The correct word is " + randomWord + ".");
                }

        }
    });
    newUnderScore();
    event();


//==============================================================================
    


    
    



    
        


          




                


    






    




