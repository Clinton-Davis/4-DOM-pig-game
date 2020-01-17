/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//document.querySelector("#current-" + activePlayer).textContent = dice;
//var x = (document.querySelector("#current-" + activePlayer).textContent = dice);

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function() {
	//1. Random number
	var dice = Math.floor(Math.random() * 6) + 1;

	//2. Display the result
	var diceDom = document.querySelector(".dice");
	diceDom.style.dislay = ".block";
	diceDom.src = "dice-" + dice + ".png";
	//3. Update the round score IF 1 is NOT rolled
	if (dice !== 1) {
		//add score
		roundScore += dice;
		document.querySelector("#current-" + activePlayer).textContent = roundScore;
	} else {
		//Next player. using the turnery operator
		nextPlayer();
	}
});

document.querySelector(".btn-hold").addEventListener("click", function() {
	// add current score to global score
	scores[activePlayer] += roundScore;

	//update the UI
	document.querySelector("#score-" + activePlayer).textContent =
		scores[activePlayer];
	// Check if player has wone
	if (scores[activePlayer] >= 100) {
		document.querySelector("#name-" + activePlayer).textContent = "WINNER";
		document.querySelector(".dice").style.dislay = "none";
		document
			.querySelector(".player-" + activePlayer + "-panel")
			.classList.add("winner");
		document
			.querySelector(".player-" + activePlayer + "-panel")
			.classList.remove("active");
	} else {
		//Next player
		nextPlayer();
	}
});

function nextPlayer() {
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
	roundScore = 0;
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	//document.querySelector(".player-0-panel").classList.remove("active");
	//we can use add and remove but need more lines of code so use toggle

	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");
}
