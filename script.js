var playerWin = false;
var computerWin = false;
var playerElement = ' ';
var computerElement = ' ';
var playerScore = 0;
var computerScore = 0;
var elements = ['flame', 'wind', 'water'];
var playerS = document.querySelector('.playerS');
var compS = document.querySelector('.computerS');
var img = document.createElement("img");

let button = document.querySelector('.btn');

const container = document.querySelector('div');
const h3 = document.querySelector('h3');
const h4 = document.createElement('h4');
const compChoice = document.createElement('h4');
const announce = document.querySelector('.announcebox');
const flame = document.querySelector('.flame');
const wind = document.querySelector('.wind');
const water = document.querySelector('.water');
const select = document.querySelector('.selected');

function computerPlay () {
    computerElement = elements[Math.floor(Math.random() * elements.length)];
} // Decides what the element the computer will play.

/*
function removeChildren () {
    announce.removeChild(compChoice);
    announce.removeChild(img);
    announce.removeChild(h4);
}
*/

function chooseFlame () {
    flame.style.cssText = 'background-color: rgb(255, 0, 0)!important;';
    wind.style.cssText = '';
    water.style.cssText = '';
    //removeChildren ();
} // stylizes the flame button if chosen

function chooseWind () {
    wind.style.cssText = 'background-color: rgb(0, 255, 0)!important;';
    flame.style.cssText = '';
    water.style.cssText = '';
    //removeChildren ();
} // stylizes the wind button if chosen

function chooseWater () {
    water.style.cssText = 'background-color: rgb(0, 0, 255)!important;';
    wind.style.cssText = '';
    flame.style.cssText = '';
    //removeChildren ();
} // stylizes the water button if chosen

/* function scoreChange () {
    playerS.textContent = playerScore;
    compS.textContent = computerScore;
} // changes displayed score */

function resetScore () {
    let playerScore = 0;
    let computerScore = 0;
    playerS.textContent = playerScore;
    compS.textContent = computerScore;
} // resets score

function compElement (src, alt) {
    img.src = src;
    img.alt = alt;
}

function compImage (){    
    if (computerElement == elements[0]) {
        var src = "~/flame.png";
    } else if (computerElement == elements[1]) {
        var src = "~/wind.png";
    } else if (computerElement == elements[2]) {
        var src = "~/water.png";
    }
    compElement(src, "Computer Element");
}

function gameWin () {
    playerScore++;
    compImage();
    announce.appendChild(compChoice);
    announce.appendChild(img);
    announce.appendChild(h4);
    compChoice.textContent = "Computer uses " + computerElement + "...";
    h4.textContent = "You chose " + playerElement + " and the computer chose " + computerElement + ". You win!";
    h3.textContent = "To play, choose your element.";
} // adds text and increases score if player wins

function gameTie () {
    compImage();
    announce.appendChild(compChoice);
    announce.appendChild(img);
    announce.appendChild(h4);
    compChoice.textContent = "Computer uses " + computerElement + "...";
    h4.textContent = "You chose " + playerElement + " and the computer chose " + computerElement + ". You tie!";
    h3.textContent = "To play, choose your element.";
} // adds text and does nothing with score if player ties

function gameLose () {
    computerScore++;
    compImage();
    announce.appendChild(compChoice);
    announce.appendChild(img);
    announce.appendChild(h4);
    compChoice.textContent = "Computer uses " + computerElement + "...";
    h4.textContent = "You chose " + playerElement + " and the computer chose " + computerElement + ". You lose!";
    h3.textContent = "To play, choose your element.";
} // adds text and increases comp score if player loses

function playerSelect (input) {
    playerElement = input;
    var selected = document.querySelector('.' + playerElement.toString());

    flame.classList.remove('selected');
    wind.classList.remove('selected');
    water.classList.remove('selected');

    h3.textContent = 'Confirm your element to fight with it!'
    selected.classList.add('selected');

    if (playerElement == elements[0]) {
        chooseFlame ();
    } else if (playerElement == elements[1]) {
        chooseWind ();
    } else if (playerElement == elements[2]) {
        chooseWater ();
    }

} // Changes the player's element based on what button they select.

function confirmSelect () {
    gamePlay(playerElement);
    
    if (playerWin == true) {
        playerScore++;
    } else if (computerWin == true) {
        computerScore++;
    }

    playerS.textContent = playerScore;
    compS.textContent = computerScore;
} // Confirms player element selection and plays the game.

function gamePlay (playerElement) {
    computerPlay();
    if ((   playerElement == elements[0] && computerElement == elements[1]) || 
        (   playerElement == elements[1] && computerElement == elements[2]) ||
        (   playerElement == elements[2] && computerElement == elements[0])) {
        gameWin ();
    } else if (playerElement == computerElement) {
        gameTie ();
    } else {
        gameLose ();
    }
    playerS.textContent = playerScore;
    compS.textContent = computerScore; 
}

// Plays five rounds of Elemental Forces in the console.

/* function game () {
    var rounds = 1

    while (rounds <= 5) {
        console.log('Player Score: ' + playerScore)
        console.log('Computer Score: ' + computerScore)
        var playerSelect = prompt('What element do you pick?')
        console.log(gamePlay(playerSelect))
        rounds++
    }
   
    console.log('Final Player Score: ' + playerScore)
    console.log('Final Computer Score: ' + computerScore)

    if (playerScore > computerScore) {
        console.log("You win! Congratulations!")
    } else if (playerScore == computerScore) {
        console.log("You tied.")
    } else {
        console.log("You lose! Sucks to suck.")
    }
}
*/