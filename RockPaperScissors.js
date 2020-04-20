//DOM Manipulations               
const info = document.querySelector('#info');
    const score = document.createElement('scoreDisplay');        
    const final = document.createElement('final');
    score.textContent = 'Score:'
info.appendChild(score);
scoreDisplay.appendChild(final);


//Spits out rock, paper, or scissors
function computerPlay(){
    let num = Math.floor(Math.random() * 3);
        switch (true) {  
            case num == 0: 
                return "Rock" ;
                break;
            case num == 1: 
                return "Paper";
                break;
            case num == 2:
                return "Scissors"; 
                break;       
            default: 
                pick = ('Oops!! None chosen');
            }
}
//keeps score
    let playScore = 0;
    let compScore = 0;
    let champ;
    function win() {
                ++playScore
                champ = 'Computer: ' + compScore + " User: " + playScore
                score.textContent = 'Score: ' + champ 
            }
    function lose() {
                ++compScore
                champ = 'Computer: ' + compScore + " User: " + playScore
                score.textContent = 'Score: ' + champ 
                } 
    function tie() {
                champ = "Tie! Computer: " + compScore + " User: " + playScore
                score.textContent = 'Score: ' + champ 
                }                      
//Display winner           
    function endRound(){
        if(playScore < compScore){
            final.textContent = ' Computer wins!'
        }else if (playScore > compScore){
           final.textContent = ' User wins!'
        }else {
            final.textContent = " It's a tie!"
        };
    }; 
 //buttons
    const rock = document.querySelector('#rock')
    rock.addEventListener('click', function () {
        playerSelection ='Rock'
        playRound();
    });
    const paper = document.querySelector('#paper')
    paper.addEventListener('click',function() {
        playerSelection = 'Paper'
        playRound();
    });
    const scissors = document.querySelector('#scissors')
    scissors.addEventListener('click', function() {
        playerSelection = 'Scissors'
        playRound();
    });
    /*const newRound = document.querySelector('newRound')
    newRound.addEventListener('click', function(){});
    */
//Plays one round of rock paper scissors    
function playRound(){
    computerSelection = computerPlay(); 
    let wrongInput = "Wrong input you fool!!"
    //make this into it's own div, displays the player choices
        console.log('computer: ' + computerSelection + ' User: ' + playerSelection)

        if (playerSelection != "Rock" && playerSelection != "Scissors" && playerSelection != "Paper"){ 
            return wrongInput;  
        }

        if (compScore == 5|| playScore == 5){
            endRound()
            return;
        }

switch (true){
        case playerSelection == computerSelection:
            tie();
            break;

        case playerSelection == "Rock" && computerSelection == "Scissors":
            win();
            break;

        case playerSelection == "Rock" && computerSelection == "Paper":
            lose();
            break;

        case playerSelection == "Paper" && computerSelection == "Rock":
            win();
             break;

        case playerSelection == "Paper" && computerSelection == "Scissors":
            lose();
            break;

        case playerSelection == "Scissors" && computerSelection == "Paper":
            win();
            break;

        case playerSelection == "Scissors" && computerSelection == "Rock":
            lose();
        break;
    }                 
 }

 /*
 Function grave yard:
 
 
//plays five rounds of rock paper scissors and announces winner at the end
    function playGame(){
        console.log(playRound("rock"));
        console.log(playRound("paper"));
        console.log(playRound("scissors"));
        console.log(playRound("paper"));
        console.log(playRound("rock"));
        if(playScore < compScore){
            console.log('Computer wins!')
        }else if (playScore > compScore){
        console.log('User wins!')
        }else {
            console.log("It's a tie!")
        };
    }  
//Capitalizes the users choice
    function capitalize(aString) {
        let trimmedString = aString.trim();
        let lowerCaseString = trimmedString.toLowerCase();
        let firstLetter = lowerCaseString.substr(0,1);
        firstLetter = firstLetter.toUpperCase();
        let finalString = firstLetter + lowerCaseString.substr(1)
            return finalString;
        }    
//implements the capitalize string func
    playerSelection = capitalize(playerSelection);
*/