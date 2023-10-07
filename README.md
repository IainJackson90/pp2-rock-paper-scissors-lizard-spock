# Rock Paper Scissors Lizard Spock

## [Click here to view website](https://iainjackson90.github.io/pp2-rock-paper-scissors-lizard-spock/)

Rock Paper Scissors Lizard Spock is a game created that is simple to play.
It is desingend for people that hass a few moments to spare while on a break, or 
in general just want to pass time for a bit.

![Am I Responsive](./assets/docs/responsive.png)

# UX

## Strategy

This game was created with the intent to catch the atention of anyone who comes across this game.
The targeted audiance of this game is to evryone and all ages looking for a fun strategy game that has some time to pass weather it is a quick lunch break or a brather just wanting to rellax.
It is a simple game and esaly understandible 

## Scope 

The Game will:

-  Acept a user input
-  Create a random choise from the bot
-  Compare the values
-  Evaluate who won the round
-  Incroment the score of the winner of the round
-  Evaluate who won the best of five games
-  Reset the score after five games 
  
## Structure

The game will be structuerd with user expeariance in mind, it will be displayed 
on a single page with no overflow.
Whether it is a large screen or mobile divce it should fit all on the screen not destarcting the user with any scroling effects, not breaking the users atention of the game. 

## Skeleton

Some feuters of the wireframe has change as the development of the game went on, as I felt some features would be better incorperated innto the disng than others

This is the original wireframe desing

### Wireframe

![Wireframe ](./assets/docs/wireframe.png)

## Surface

When desinging the serface I went for a cartoon look and coulerfull with a fun text font to match the the game 

### Font

the font I used was Shantell Sans

![Font](./assets/docs/font.png)

### Color pallet of the webpage

![Font](./assets/docs/color-palet.png)

# Features

The features was created with the mindset of diplsaying clearly what option was selected and have a clean layout for easy user experiance with ey capturing pictures and colors to grab the user atention.

## Existing Features

![Main Page ](./assets/docs/entir-game.png)

The rules PupUp will display all the rules when it is clicked on displayed on a limegreen background. When you hover over the rules on desktop it will have a shadow of red and on mobile it will have a shadow after clicking on it.

![Rules PopUp](./assets/docs/rules-popup.png)

The user choice will have a green shadow when you hover over the image on desctop and on mobile it will have a green background if you selected a option.

![User Choise](./assets/docs/user-choise.png)

The Bot will have a rando choise and it will besplayed with a red shadow 

![Bot Choise](./assets/docs/bot-choise.png)

The green text displayes the uoutcome of who won the round

![Result of the round](./assets/docs/result-of-round.png)

The red text will only apear at the end of the fith round displaying who won the best of the five games 

![Result of the game](./assets/docs/result-of-game.png)

the score will incroment dependant on who won and reset after 5 rounds 

![Score](./assets/docs/score.png)

# Testing

I did verious test to insure to get the results that was intended.

Manual testing was done by playing the game, testing if the results that was given is the corect ones comparing it with the rules and doublechecking the score board and making sure after five rounds it rsets the score back to zero.

Validattor testing was dont for HTML, CSS and JavaScript to ensure the code conforms to the standards. All code passed at the end with no errors, there was ome warnings in HTM and CSS becouse of my coments I created to make code readability more easy and navigating trough the code.

Lighthouse testing was done to try and improve on performance score as much as I could the biggest drawback of performance is my main function in JavaScript whitch is a loop and I am sure there must be a difrent way of doing it but not without the cost of having to redo most of the code, it is not a bad idia but for the perpose of this game and my current knowladge I will have to do more resarch to improve the code to gain more performance.

## Manual Testing

| What was tested | Result | Outcome |
|:---:|:---:|:---:|
|The game rules pop down up| Pop up with the rules | Works as intended|
|Each button of the user was cliked| Changes the shadow color to green | works as intended|
|Bot choice|Change the shadow to red of chosen choise| works as intended|
|Random bot choise|The bot will have a random choice evrytime the game runs|Works as intended
|Display message in green |Display the choise of the user and the bot and who won the round|Works as intended|
|Display message in red |Display only after five rounds Stating who won the best of the five rounds|Works as intended|
|Score|Score incroments dependant on who won the round and resets after five rounds|Works as intended|

# Validator Testing

I put the game trough a series of validators to make sure it conforms to a valid 
standard here ate the test and results

## [HTML Validator](https://validator.w3.org/)

This was the inital html test it had some errors

![HTML Validator](./assets/docs/html-errors.png)

I worked trough the errors fixing all od them and left with warnings becouse of, 
the coments I have in the html code to label sections of the code to make readability
and navigation trough the code easier.

![HTML Validator](./assets/docs/html-no-errors.png)

## [CSS Validator](https://jigsaw.w3.org/css-validator/)

This was the inital test it had a error 

![CSS Validator](./assets/docs/csse-erors.png)

I fixed the error but made a consious desition to leave the coments that describes
the sections of the code for navigation perposes and readablility of the code

![CSS Validator](./assets/docs/css-no-erros.png)

## [Color Validator](https://color.a11y.com/)

I tested the contras and tin was the result

![JS Validator](./assets/docs/contras-validate.png)

## [JS Validator](https://jshint.com/)

This was the innital test for the Java Script code it has no error only warnigs.
The mojority of warnings is from the loop function I created as my main function.

![JS Validator](./assets/docs/js-warnings.png)

My popUpFunction is caled in directly in the HTML 

![JS Validator](./assets/docs/js-function.png)
![JS Validator](./assets/docs/js-functionIn-html.png)

## Lighthouse testing for desktop

I used Lihgthouse to test the peoformanse for desctop and mobile 
this was the performince I got for desctop and mobile on the first test 

### Desktop test one

![JS Validator](./assets/docs/light-house-desctop-test-one.png)

### Desctop test two

I improved the accesibility by working on the contrass for the rules and changing
the rules from a h3 html tag to a h2 html tag to conform with the rules

![JS Validator](./assets/docs/light-house-desctop-test-two.png)

### Mobile test one

![JS Validator](./assets/docs/light-house-mobile-test-one.png)

### Mobile test two 

I resized all the images to smaller sizes using tiiny.png to improve performance 
but still take a big hit on performance due to the main function in javascript being a loop

![JS Validator](./assets/docs/light-house-mobile-test-two.png)

# Deployment

This site was deployed to GitHub and these are the steps that was taken to do so:

1. Log into GitHub
2. Navigate to repository (Left top corner)
3. Select the project  (The top let corner)
4. Settings (Nav bar at the top)
5. Pages (Left side menu)
6. Branch(Select main and folder as Root)
7. Save

Wait a while for it GitHub to deploy the webpage, when it is done it wil show
the link at the top

![Deployment](./assets/docs/deployment.png)

- ## _Cloning the GitHub repository_

This will download a full copy to your desktop

1. Log into GitHub
2. Find the repository you wish to clone
3. Find the green code button top right corner
4. Select "Local", copy the HTTPS URL
5. Go to Codeanywhere and navigate to "New Workspace"
6. Paste the URL into the space provided
7. Click "Create"

![Cloning github](./assets/docs/github-cloning.png)
![Cloning codeanywhere](./assets/docs/codeanywhere-cloning.png)

- ## _Forking the GitHub repository_

Will allow you to create a copy of the repository so changes can be made that will not affect the original repository.

1. Log into GitHub
2. Find the repository you wish to fork
3. Find the "Fork" drop down in the top right corner second from last
4. Select "Create"  

![Forking](./assets/docs/forking.png)


# Technologies Used

- Html
- Css
- JavaScript
- [Google Fonts](https://fonts.google.com/)
- Chrome dev tools
- [TinyPNG](https://tinypng.com/)
- [Font Awsome](https://fontawesome.com/)
- [Codeanywhere](https://codeanywhere.com/)
- [GitHub](https://github.com/)
- [Color Pelet](https://www.color-hex.com/color-palette/94134)
- [Color Contrast Accessibility Validator](https://color.a11y.com/)
- [W3C Markup Validation](https://validator.w3.org/)
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/)
- [FREEFORMATTER](https://www.freeformatter.com/)  For HTM and CSS
- [JSHint](https://jshint.com/)
- [Am I Responsive](https://ui.dev/amiresponsive)
- [Google Docs](https://docs.google.com/document/u/0/)
- [imagecolorpicker](https://imagecolorpicker.com/)
- Microsoft Paint
- Snipping Tool

# Credits

- Code Institute for the learning content provided
- Harry Dhillon my assigned mentor to give advise on the project
- Nicole Jackson my wife a student at code institute for constructive criticism
- Slack community
- [w3schools](https://www.w3schools.com/) 
- [stackoverflow](https://stackoverflow.com/) 


## Content

- [Color Pelet](https://www.color-hex.com/color-palette/94134) insperation from color-hex
- [Box-Shadow](https://www.shecodes.io/athena/21966-how-to-add-a-shadow-to-a-button-in-css#:~:text=To%20add%20a%20shadow%20to%20a%20button%20in%20CSS%2C%20you,use%20the%20box%2Dshadow%20property.&text=The%20box%2Dshadow%20property%20takes,moves%20it%20to%20the%20left.) SheCodes for guidence
- [Box-Shadow in JavasSript](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_boxshadow) w3schools for guidence
- [Text-Shadow](https://www.w3schools.com/cssref/tryit.php?filename=trycss3_text-shadow_blur
) w3schools For guidence
- [transform: Translate("value%","value%")](https://www.w3.org/wiki/CSS3_2D_Transforms) w3schools For guidence
- [PopUp](https://www.w3schools.com/howto/howto_js_popup.asp) w3schools For guidence
- [Rules of game](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock) bigbangtheory Rules of the game

## Media

- [PNG Images](https://www.clipartmax.com/) From clipartmax
