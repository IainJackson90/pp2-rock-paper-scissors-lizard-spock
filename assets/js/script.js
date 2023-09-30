/**
 * The main gamme function that is loaded when the html loads
 */
document.addEventListener("DOMContentLoaded", function userOptions() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function commitedUserOption() {

            let user = this.getAttribute("data-type");
           const botOption =  getBotOption(); /* stores the value now*/
           /*let  reulst = rules(user, botOption) */
           let winningResult = rules(user, botOption);
            console.log(user);
            console.log(botOption);
            console.log(winningResult);
            //    return user;
            

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
         return lose;

        } else if (bot === "spock") {
            return lose;
       
        } else if (bot === "scissors"){
            return win;

        } else if (bot === "lizard"){
            return win;
        }

    } else if (user === "lizard") {

        if (bot === "rock") {
            return lose;

        } else if (bot === "spock") {
            return win;

        } else if (bot === "scissors") {
            return lose;

        } else if (bot === "paper") {
            return win;
        }

    } else if (user === "scissors") {

        if (bot === "paper") {
            return win;

        } else if (bot === "spock") {
            return lose;

        } else if (bot === "rock") {
            return lose;

        } else if (bot === "lizard") {
            return win;
        }

    } else if (user === "spock") {

        if (bot === "paper") {
            return lose;

        } else if (bot === "lizard") {
            return lose;

        } else if (bot === "scissors") {
            return win;

        } else if (bot === "rock") {
            return win;
        }

    } else if (user === "paper") {

        if (bot === "spock") {
            return win;

        } else if (bot === "lizard") {
            return lose;

        } else if (bot === "scissors") {
            return lose;

        } else if (bot === "rock") {
            return win;
        }

    } else {
        alert('Something went wrong');
        console.log("Something went wrong from the rules function");
    }


}






