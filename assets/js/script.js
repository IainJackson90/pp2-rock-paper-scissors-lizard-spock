/**
 * The main gamme function that is loaded when the html loads
 */
document.addEventListener("DOMContentLoaded", function userOptions() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function commitedUserOption() {

            let user = this.getAttribute("data-type");
            getBotOption();
            console.log(user);
            console.log(getBotOption(commitedUserOption));
            //    return user;

        });
    }

});

/**
 * This is the bot player it gets a random number and asings it a value of 
 * rock, paper, scissors, lizard, spock.  
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
        comittedBotOption = "lizzard";
    } else if (bot === 5) {
        comittedBotOption = "spock";
    }
    else {
        alert("Something went wrong");
    }

    return comittedBotOption;
}


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

    }


}






