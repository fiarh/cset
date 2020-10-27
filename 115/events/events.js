let button = document.querySelector("button");
let clickCountDisplay = document.querySelector("p.counter");


// Make an array of things the button will say.
let buttonResponses = [
	"CLICK ME",
	"harder ( ͡° ͜ʖ ͡°)",
	"click click click click",
	"We're all just clicking through the hyperlinks of life",
	"what--doth--life?",
	"If the computer virus is infecting people, then I need to get a human virus to infecticide--the computer--",
	"That's the spice",
	"It's clicking time",
	"Hello and welcome to the Mountain Dort Report",
	"Give me money, and I'll predict your future",
];

let clickCount = 0;

// Define how the button should change.
function changeButton() {
	// Pick a random string from the array and display it.
	let randomNumber = Math.floor((Math.random()*10));
	//let randomString = buttonResponses
	button.innerHTML = buttonResponses[randomNumber];
	// Increase the click count, track it, and display milestones!
	clickCount += 1;
	if (clickCount === 1) {
		clickCountDisplay.innerHTML = (clickCount + " click");
	} else {
		clickCountDisplay.innerHTML = (clickCount + " clicks");
	}
}

// At intervals of 10, change the button to a random color--borders, text, and all.



// Only execute the changes when the button is clicked.
button.addEventListener("click", changeButton);
