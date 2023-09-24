function getBotOption() {

    let bot = Math.floor(Math.random() * 5) + 1;
    let comittedBotOption;
   
    if (bot === 1){
        comittedBotOption = "botRock";
    } else if (bot ===2){
        comittedBotOption = "botPaper";
    } else if (bot === 3){
        comittedBotOption = "botScissors";
    } else if (bot === 4){
        comittedBotOption = "botLizzard"
    } else if (bot === 5){
        comittedBotOption = "botSpock";
    }
      else {
        alert("Something went wrong");
    }  

    return comittedBotOption;
}

