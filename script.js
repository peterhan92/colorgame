var colorsList = generateRandomColor(6);
var correctColor = pickColor();
var correctColorDisplay = document.getElementById("correct-color")
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

correctColorDisplay.textContent = correctColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colorsList[i];

	squares[i].addEventListener("click", function() {
		var selectedColor = this.style.background;
		if (selectedColor === correctColor) {
			messageDisplay.textContent = "Correct!"
			changeColor(correctColor);
			h1.style.background = correctColor
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color
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
