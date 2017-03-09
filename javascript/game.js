var guessesLeft = 3;
var wins = 0;
var losses = 0;

var letters = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];

var computerChoice = letters[Math.floor(Math.random() * letters.length)];

    console.log(computerChoice)






document.onkeyup = function(event) {
    var lettersGuessed = [];
   
    var userGuess = event.key;
        lettersGuessed.push(userGuess);
    
    var string = "";
    
    console.log(lettersGuessed)
    for (var i = 0; i < lettersGuessed.length; i++) {
       string += lettersGuessed[i] + ",";
        
    };
    
    var pOne = document.getElementById("lettersGuessed");
    
    var pTwo = document.createElement("text");
    pTwo.innerHTML = string;
    pOne.appendChild(pTwo);
    

    if(userGuess === computerChoice){
        wins++;
        guessesLeft = 3;
        computerChoice = letters[Math.floor(Math.random() * letters.length)];
      
    pOne.replaceChild(pTwo);
   
    
    console.log(computerChoice)

    }

    else{
        guessesLeft--;
        
    
    }

    if(guessesLeft === 0){
        losses++;
        guessesLeft = 3;
        computerChoice = letters[Math.floor(Math.random() * letters.length)];
         
    pOne.replaceChild(pTwo);
    

    console.log(computerChoice)

    }

    




	document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesLeft;
    
    
};

