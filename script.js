// hard coding colors
var colorsList = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]
var correctColor = colorsList[3];
var CorrectColorDisplay = document.getElementById("correct-color")
var square = document.querySelectorAll(".square");

CorrectColorDisplay.textContent = correctColor;
for (var i = 0; i <= square.length; i++) {
	square[i].style.background = colorsList[i];

	square[i].addEventListener("click", function() {
		var selectedColor = this.style.background;
		if (selectedColor === correctColor) {
			alert("correct!");
		} else {
			alert("wrong!");
		}
	});
}

