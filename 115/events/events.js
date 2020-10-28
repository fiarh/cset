let button = document.querySelector("button");
let clickCountDisplay = document.querySelector("p.counter");


// Make an array of things the button will say.
let buttonResponses = [
	"CLICK ME",
	"WEE WOO",
	"click click click click",
	"We're all just clicking through the hyperlinks of life",
	"What--doth--life?",
	"If the computer virus is infecting people, then I need to get a human virus to infecticide--the computer--",
	"That's the spice",
	"It's clicking time",
	"Hello and welcome to the Mountain Dort Report",
	"Give me your money, and I'll predict your future",
];

let clickCount = 0;

// Define how the button should change.
function changeButtonText() {
	// Pick a random string from the array and display it.
	let randomNumber = Math.floor((Math.random()*10));
	//let randomString = buttonResponses
	button.innerHTML = buttonResponses[randomNumber];
}

// Increase the click count, track it, and display milestones!
function clickCounter () {
	clickCount += 1;
	if (clickCount === 1) {
		clickCountDisplay.innerHTML = (clickCount + " click");
	} else {
		clickCountDisplay.innerHTML = (clickCount + " clicks");
	}
}

// This is a sort-of-mathematical way to change the button colors randomly.
function changeButtonColor() {

	let lightColor;
	let darkColor;

	let colorArray = [];

	// Setting background color
	for (index = 0; index < 3; index++) { // sets each value of red, green, and blue
		colorArray.push(Math.floor((Math.random() * (255 - 120) + 120)));
		}
	lightColor = "rgb(" + colorArray[0] + ", " + colorArray[1] + ", " + colorArray[2] + ")";
	button.style.background = lightColor;

	// Whichever value is biggest, take that one, bump it down to 140 it for the dark color, and set the other two values to zero.
	if ((colorArray[0] > colorArray[1]) && (colorArray[0] > colorArray[2])) {
		darkColor = "rgb(140,0,0)";
	} else if ((colorArray[2] > colorArray[1]) && (colorArray[2] > colorArray[0])) {
		darkColor = "rgb(0,0,140)";
	} else if ((colorArray[1] > colorArray[2]) && (colorArray[1] > colorArray[0])) {
		darkColor = "rgb(0,140,0)";
	} else {
		darkColor = "black";
	}

	// Dark color for button border and text
	button.style.color = darkColor;
	button.style.border = "2px solid " + darkColor;

}

// Only execute these changes when the button is clicked.
button.addEventListener("click", changeButtonText);
button.addEventListener("click", changeButtonColor);
button.addEventListener("click", clickCounter);
