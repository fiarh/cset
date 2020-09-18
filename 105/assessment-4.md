**After completing the first course, how would you rate yourself? Is there anything you want to do differently to start the next course?**<br>
Out of ten... I'd give myself a 7 or 8. I made a point to read the book, take notes in my notebook (during both Zoom and asynchronous classes), and ask questions or Google things if I didn't understand them.<br>
That being said, though, I definitely could have spent more time practicing the actual programming exercises, and I had some cool ideas I wanted to experiment with, but I didn't end up following through with them on my own time.<br>
And speaking of time: I haven't been managing my time as well as I could be. Lots of distracting apps and ideas and stuff. So I've taken your advice and used a notepad to write every random idea down so I can come back to it after I'm done with everything else, but even then, I still tend to get distracted by things.<br>
For the next course... I'm going to set a stricter schedule for myself, firstly, and I'll also make a point to code for fun this time.
<br><br>

**The Weresquirrel program showed many uses for JavaScript Objects and Arrays. Using variables and values from this example, explain the difference between the two data structures.**<br>
Objects hold properties whose values are bound to keys:
```
let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
];
```
One property whose key is `events` holds an array as its value. The same goes for `squirrel`, which holds a boolean value of `false`.<br>
Arrays are a little different in that they hold elements, not properties. Elements' values are bound to an index:
```
...
events: ["work", "touched tree", "pizza", "running", "television"],
...
```
`events` holds an array as its value. The elements of this array are bound to indexes, so if I wanted to get `"touched tree"`, I would tell the program to return index 1 of the array.
<br><br>

**Now explain why the author chose to use one structure over the other for each example you chose. Follow the same reasoning and explain how you could have used objects and arrays in your adventure game from last week.**<br>
For the journal, you'd need to know what had actually happened that day and whether or not the squirrel transformation happened. With object properties, you can have one key with many different values at the same time, which organizes things into tidy little boxes and allows you to compare one value to another more easily.<br>
`events` is already a property of `journal`. It's made to hold a simple list of occurrences, so there's no need to add keys when you already have what you need right in that one list.<br>
I could have made the player character into an object of its own so I could customize the game experience depending on the player's choices (e.g., use gender pronouns, note physical appearance (and subsequent changes that happen due to the freaky-deaky mind-splosion stuff).<br>
An array would be useful as an inventory--either on the player character, in the interrogation room, or both. Arrays could also keep track of the player's choices, allowing for interactions that depended specifically on those choices (and/or on possession of certain objects in their inventory).<br>
I just feel like the game was way too short, so I'm definitely going to expand on it. I would've added more scenes anyway if I hadn't procrastinated so much.
