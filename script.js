var sqCount = 6;
var colorsList = generateRandomColor(sqCount);
var correctColor = pickColor();
var correctColorDisplay = document.getElementById("correct-color")
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
	setupModeButtons();
	setupSquares();
	resetColors();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? sqCount = 3 : sqCount = 6;
			resetColors();
		})
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click", function() {
			// grabs color of selected square
			var selectedColor = this.style.background;
			// compares selected color to the correct
			if (selectedColor === correctColor) {
				messageDisplay.textContent = "Correct!";
				changeColor(correctColor);
				h1.style.background = correctColor;
				reset.textContent = "Play Again?"
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function resetColors() {
	colorsList = generateRandomColor(sqCount);
	// change new correct color and display
	correctColor = pickColor();
	correctColorDisplay.textContent = correctColor;
	reset.textContent = "New Colors"
	messageDisplay.textContent = "";
	// new colors for each square
	for (var i = 0; i < squares.length; i++) {
		if (colorsList[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colorsList[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	// change h1 background to default background
	h1.style.background = "steelblue";
}

reset.addEventListener("click", function() {
	resetColors();
})

function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	};
}

function pickColor() {
	var random = Math.floor(Math.random() * colorsList.length);
	return colorsList[random];
}

function generateRandomColor(num) {
	var array = [];
	for (i = 0; i < num; i++) {
		array.push(randomColor());
	}
	return array;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}
