/**
 * The main gamme function that is loaded when the html loads
 */
document.addEventListener("DOMContentLoaded", function userOptions(){

   let buttons = document.getElementsByTagName("button");
   
   for(let button of buttons) {
    button.addEventListener("click", function commitedUserOption(){
        
       let user = this.getAttribute("data-type");
       getBotOption();
       console.log(user);
       console.log(getBotOption(commitedUserOption));
    //    return user;

    })
   }

})

/**
 * This is the bot player it gets a random number and asings it a value of 
 * rock, paper, scissors, lizard, spock.  
 */
function getBotOption() {

    let bot = Math.floor(Math.random() * 5) + 1;
    let comittedBotOption;

    if (bot === 1) {
        comittedBotOption = "botRock";
    } else if (bot === 2) {
        comittedBotOption = "botPaper";
    } else if (bot === 3) {
        comittedBotOption = "botScissors";
    } else if (bot === 4) {
        comittedBotOption = "botLizzard";
    } else if (bot === 5) {
        comittedBotOption = "botSpock";
    }
    else {
        alert("Something went wrong");
    }

    return comittedBotOption;
}








 
