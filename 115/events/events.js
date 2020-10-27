let button = document.querySelector("button");

// Make an array of things the button will say.


// Define how the button should change.
// Pick a random string from the array and display it.
// Increase the click count, track it, and display milestones!
function changeButton() {
	button.innerHTML = "hi";
}

// Only execute the changes when the button is clicked.
button.addEventListener("click", changeButton);
