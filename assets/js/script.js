/**
 * The main gamme function that is loaded when the html loads
 */
document.addEventListener("DOMContentLoaded", function userOptions() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function commitedUserOption() {

            let user = this.getAttribute("data-type");
            const botOption = getBotOption(); /* stores the value now*/
            /*let  reulst = rules(user, botOption) */
            let winningResult = rules(user, botOption);
            console.log(user);
            console.log(botOption);
            console.log(winningResult);
            //    return user;
            document.getElementById("outcome").innerText = winningResult;

            botStyling(botOption);
            bestOutOfFive();
        });
    }

});

/**
 * This is the bot player it gets a random number and asings it a value of 
 * rock, paper, scissors, lizard, spock. 
 * @returns the value of the comittedBotOption 
 */
function getBotOption() {

    let bot = Math.floor(Math.random() * 5) + 1;
    let comittedBotOption;
    
    if (bot === 1) {
        comittedBotOption = "rock";

    } else if (bot === 2) {
        comittedBotOption = "paper";

    } else if (bot === 3) {
        comittedBotOption = "scissors";

    } else if (bot === 4) {
        comittedBotOption = "lizard";

    } else if (bot === 5) {
        comittedBotOption = "spock";
    }
    else {
        alert("Something went wrong");
        console.log("Something went wrong in the getBotOption function");
    }

    return comittedBotOption;
}

/**
 * This function evaluates who won 
 * @param {this is the user value chosen} user 
 * @param {*this is the bots value chosen} bot 
 * @returns a string that states who won and the the options that was chosen
 */

function rules(user, bot) {

    let win = `You chose ${user} and the bot chose ${bot}, You win!`;
    let lose = `You chose ${user} and the bot chose ${bot}, You Lose!`;

    if (user === bot) {
        return `You chose ${user} and the bot chose ${bot}, Draw!`;

    } else if (user === "rock") {

        if (bot === "paper") {
            botScore();
            return lose;

        } else if (bot === "spock") {
            botScore();
            return lose;

        } else if (bot === "scissors") {
            playerScore();
            return win;

        } else if (bot === "lizard") {
            playerScore();
            return win;
        }

    } else if (user === "lizard") {

        if (bot === "rock") {
            botScore();
            return lose;

        } else if (bot === "spock") {
            playerScore();
            return win;

        } else if (bot === "scissors") {
            botScore();
            return lose;

        } else if (bot === "paper") {
            playerScore();
            return win;
        }

    } else if (user === "scissors") {

        if (bot === "paper") {
            playerScore();
            return win;

        } else if (bot === "spock") {
            botScore();
            return lose;

        } else if (bot === "rock") {
            botScore();
            return lose;

        } else if (bot === "lizard") {
            playerScore();
            return win;
        }

    } else if (user === "spock") {

        if (bot === "paper") {
            botScore();
            return lose;

        } else if (bot === "lizard") {
            botScore();
            return lose;

        } else if (bot === "scissors") {
            playerScore();
            return win;

        } else if (bot === "rock") {
            playerScore();
            return win;
        }

    } else if (user === "paper") {

        if (bot === "spock") {
            playerScore();
            return win;

        } else if (bot === "lizard") {
            botScore();
            return lose;

        } else if (bot === "scissors") {
            botScore();
            return lose;

        } else if (bot === "rock") {
            playerScore();
            return win;
        }

    } else {
        alert('Something went wrong');
        console.log("Something went wrong from the rules function");
    }
}

/**
 * This function incroments the score of the player
 */
function playerScore() {

    let oldPlayerScore = parseInt(document.getElementById("player-score-count").innerText);
    document.getElementById("player-score-count").innerText = ++oldPlayerScore;

    console.log("From player score function");

}

/**
 * This function incroments the score of the bot
 */
function botScore() {

    let oldBotScore = parseInt(document.getElementById("bot-score-count").innerText);
    document.getElementById("bot-score-count").innerText = ++oldBotScore;

    console.log("from bot score function");

}


/**
 * this function evaluates who got the best score out of five games
 * @returns 
 */
function bestOutOfFive() {

    let botScoreCount = parseInt(document.getElementById("bot-score-count").innerText);
    let playerScoreCount = parseInt(document.getElementById("player-score-count").innerText);
    let bestOutOff = botScoreCount + playerScoreCount;

    
    if (bestOutOff === 5) {
        if (botScoreCount > playerScoreCount) {
            document.getElementById("winner").innerText = "Player won the best out of 5 games";
            
            document.getElementById("bot-score-count").innerText = 0;
            document.getElementById("player-score-count").innerText = 0;

            return console.log("bestOutOfFive function bot won");

        } else if (botScoreCount < playerScoreCount) {
            document.getElementById("winner").innerText = "Bot won the best out of 5 games";

            // alert("Player won best out of 5 Games");
            document.getElementById("bot-score-count").innerText = 0;
            document.getElementById("player-score-count").innerText = 0;

            return console.log("bestOutOfFive function player won");

        } else {
            console.log("Something went wrong with bestOutOfFive() nested if statment ");
        }
    } else {
        document.getElementById("winner").innerText = "";
    }

}

/**
 * This function will evaluate the choice of the comper and give the div of that choice 
 * a boxShadow color of red
 * @param {this parameter will be passed the argumrent of botOption} botStyle 
 */
function botStyling(botStyle) {

   
    if (botStyle === "rock") {
        document.getElementById("bot-js-rock").style.boxShadow = "4px 4px 8px red";

        document.getElementById("bot-js-paper").style.boxShadow = "none";
        document.getElementById("bot-js-scissors").style.boxShadow = "none";
        document.getElementById("bot-js-lizard").style.boxShadow = "none";
        document.getElementById("bot-js-spock").style.boxShadow = "none";

    } else if (botStyle === "paper") {
        document.getElementById("bot-js-paper").style.boxShadow = "4px 4px 8px red";

        document.getElementById("bot-js-rock").style.boxShadow = "none";
        document.getElementById("bot-js-scissors").style.boxShadow = "none";
        document.getElementById("bot-js-lizard").style.boxShadow = "none";
        document.getElementById("bot-js-spock").style.boxShadow = "none";

    } else if (botStyle === "scissors") {
        document.getElementById("bot-js-scissors").style.boxShadow = "4px 4px 8px red";

        document.getElementById("bot-js-paper").style.boxShadow = "none";
        document.getElementById("bot-js-rock").style.boxShadow = "none";
        document.getElementById("bot-js-lizard").style.boxShadow = "none";
        document.getElementById("bot-js-spock").style.boxShadow = "none";

    } else if (botStyle === "lizard") {
        document.getElementById("bot-js-lizard").style.boxShadow = "4px 4px 8px red";

        document.getElementById("bot-js-paper").style.boxShadow = "none";
        document.getElementById("bot-js-scissors").style.boxShadow = "none";
        document.getElementById("bot-js-rock").style.boxShadow = "none";
        document.getElementById("bot-js-spock").style.boxShadow = "none";

    } else if (botStyle === "spock") {
        document.getElementById("bot-js-spock").style.boxShadow = "4px 4px 8px red";

        document.getElementById("bot-js-paper").style.boxShadow = "none";
        document.getElementById("bot-js-scissors").style.boxShadow = "none";
        document.getElementById("bot-js-lizard").style.boxShadow = "none";
        document.getElementById("bot-js-rock").style.boxShadow = "none";

    } else {
        console.log("botStyling() something went wrong");
    }


    console.log("botStyling() Function");
}




