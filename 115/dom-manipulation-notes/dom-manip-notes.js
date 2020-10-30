
// GENERAL STUFF
const div = document.createElement("div"); // This creates a whole new element.

div.style.color = "green"; // applies indicated style

div.style.cssText = "color: green; font-size: 16px"; // applies multiple styles

div.setAttribute("style", "color: green; font-size: 16px"); // does same as line 5 but with different syntax

// For accessing CSS rules from JS, you need to use either...
div.style.backgroundColor // camelCase or...
div.style["background-color"] // bracket notation.


// ATTRIBUTES
div.setAttribute("id", "theDiv"); /* If "id" already exists, update its value to "theDiv"
If "id" doesn't already exist, create it, and set its value to "theDiv" */

div.getAttribute("id"); // Returns the value of "id," which is "theDiv"

div.removeAttribute("id"); // Removes the attribute altogether


// CLASSES
div.classList.add("cool-kids-club"); // Adds "cool-kids-club" class to div

div.classList.remove("cool-kids-club"); // Removes "cool-kids-club" class

div.classList.toggle("active"); // If div doesn't have "active" class, add it. If it does have "active," remove it.


// TEXT CONTENT AND INNER HTML
div.textContent("I breathe air and walk on leg"); // creates text node containing a string and then inserts it into div

div.innerHTML = "<span>I breathe air and walk on leg</span>"; // renders the HTML inside the div
