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

let redValueLight;
let greenValueLight;
let blueValueLight;
let darkColor;

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
	// Generate 3 numbers between 120 and 255. Make sure there is always a maximum value!
	// Set R to one number.
	redValueLight = Math.floor((Math.random() * (255 - 120) + 120));
	// Set G to one number.
	greenValueLight = Math.floor((Math.random() * (255 - 120) + 120));
	// Set B to one number.
	blueValueLight = Math.floor((Math.random() * (255 - 120) + 120));

	//Whichever value is biggest, take that one, bump it down to 150 it for the dark color, and set the other two values to zero.
	if ((redValueLight > greenValueLight) && (redValueLight > blueValueLight)) {
		darkColor = "rgb(140,0,0)";
	} else if ((blueValueLight > greenValueLight) && (blueValueLight > redValueLight)) {
		darkColor = "rgb(0,0,140)";
	} else if ((greenValueLight > blueValueLight) && (greenValueLight > redValueLight)) {
		darkColor = "rgb(0,140,0)";
	} else {
		darkColor = "black";
	}

	// Light color for button background
	button.style.background = "rgb(" + redValueLight + "," + greenValueLight + "," + blueValueLight + ")";

	// Dark color for border and text
	button.style.color = darkColor;
	button.style.border = "2px solid " + darkColor;

}

// Only execute the changes when the button is clicked.
button.addEventListener("click", changeButtonText);
button.addEventListener("click", changeButtonColor);
