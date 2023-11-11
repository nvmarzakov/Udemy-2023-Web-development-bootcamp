// funcion return random number between 1 to 6 
function randomNumber () {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

// random numbers for players
var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();

// change path to images with refreshing page
document.querySelector("img.img1").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelector("img.img2").setAttribute("src", `images/dice${randomNumber2}.png`);


// if player one win
if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").textContent = "🚩Player 1 Wins!"
// if player two win
} else if (randomNumber1 < randomNumber2) {

    document.querySelector("h1").textContent = "Player 2 Wins!🚩"
// if draw
} else {
    document.querySelector("h1").textContent = "Draw!"
} 