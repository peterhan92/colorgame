// hard coding colors for now
var colorsList = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]
var correctColor = randomColor();
var CorrectColorDisplay = document.getElementById("correct-color")
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");

CorrectColorDisplay.textContent = correctColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colorsList[i];

	squares[i].addEventListener("click", function() {
		var selectedColor = this.style.background;
		if (selectedColor === correctColor) {
			messageDisplay.textContent = "Correct!"
			changeColor(correctColor);
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

function randomColor() {
	var random = Math.floor(Math.random() * colorsList.length);
	return colorsList[random];
}

