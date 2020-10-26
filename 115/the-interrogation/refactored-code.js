// I felt like having a separate function for each scene was a bit tedious. I want to just make an array of all the scenes, make one function that calls one scene and integrates its choices (or maybe have a separate function for choices?) and just call that function using those different array elements.

/*
NEED:
	- Array of written scenes
	- Choices for each scene

So.... Maybe have an object for each scene, and make properties for each object. One property is the scene's written desc., another is the series (array) of choices.

	- Conditional statements for each(?) scene
	- Scene progression dependent on previous choices
*/

// Global variable for user choices.
let userChoice = "";

//Prompt user for name.
let username = "";
do {
	username = prompt("ENTER YOUR NAME: ");
} while (!username);

// Create an array for each scene. Each element of the array must be an object:
	// PROPERTY: Written scene
	// PROPERTY: Array of choices
let sceneList = [
	{ // instructions
		writtenScene: (`Welcome, `+username+`.
	How to play:

	Choices will be denoted by >> symbols.

	Select your path by typing the capitalized word in that choice. (e.g., WALK into the room).`),
		choices: ["START"],
	},

	{ // START/opening scene
		choiceID: "START",
		writtenScene: (`

	-- -- --

	The room is small. No windows. Grey walls. The lights in the ceiling are harsh and cold. You are sitting in a small, uncomfortable chair at a nondescript black table.

	There is a young man seated across from you, regarding you with a look that is both intense and completely unreadable.

	"`+username+`," he says, and it sounds inexplicably wrong, the way his voice crawls over your name like a spider studying its prey. Your jaw tightens a little.

	His expression does not change, which somehow makes everything worse.

	Your head aches dully.

	"Who sent you?" he asks.`),
		choices: ["ASK what's going on.", "'NO ONE sent me.'", "Stay SILENT.",],
	},

	{ // ASK what's going on
		choiceID: "ASK",
		writtenScene: (`

	-- -- --

	"Don't play with me," the man says coolly. "You know full well what's going on." He leans forward slightly, and you have an immediate urge to recoil, but you fight it down.

	But he seems to notice. He narrows his eyes. "You may have gotten past the gate guards," he says softly, "but you will not get past me."

	The headache has not worsened, but it still lingers.

	"I've seen others like you," the man continues, his eyes cold as they search yours. "Funnily enough, they all say the same shit at first. They don't know what happened, they don't remember anything, they don't think they're the right person."

	An unpleasant smile spreads slowly across his face. It does not reach his eyes. "I'll ask you again. Who. Sent. You."

	A sharp stab of pain lances through your head, and you wince, but it's gone as soon as it arrives.`),
		choices: ["'NO ONE sent me.'", "'I don't know WHAT you're talking about!",],
	},

	{ // NO ONE sent me
		choiceID: "NO ONE",
		writtenScene: (`

	-- -- --

	"Am I supposed to believe you came of your own volition?" The man narrows his eyes. "No instructions, no overseer, no purpose?" He leans forward, forcing you to hold his gaze.`),
		choices: ["'YES.'", "'TELL ME what's going on.",],
	},

	{ // Stay SILENT
		choiceID: "SILENT",
		writtenScene: (`

	-- -- --

	The man watches you, and the more he stares, the more uncomfortable it becomes. His eyes bore holes into your skull, and it almost hurts to hold his gaze, but you do it anyway.

	Your headache is getting worse.

	The man smirks horribly, and you flinch.

	"Your type normally can't shut up," he murmurs. "I'm impressed."`),
		choices: ["'My... TYPE?'",],
	},

	{ // TELL ME
		choiceID: "TELL ME",
		writtenScene: (`

	-- -- --

	The man's eyebrows shoot up, and he gives a surprised bark of a laugh. "Really?" He's grinning.

	You swallow.

	He scoffs. "You sure change tacks fast for how convincing everyone says you are." He leans forward a little. "You're not even trying, are you?"

	"I don't know what you're talking about."

	"Oh, yes, you do." The man's smirk makes your skin crawl. "You were there."`),
		choices: ["'WHERE?'",],
	},

	{ // The reveal
		choiceID: "WHAT",
		writtenScene: (`

	-- -- --

	The man does not respond. Instead, he pulls out a tablet. Hits play on a video.

	It looks like a security feed from the top of a building. It's night time there, and there are cars driving by in the street. You don't recognize this town.

	And then something changes--the air looks like it's rippling, and then you appear on the sidewalk.

	You stand among the milling crowd of people, eyes vacant as though you're in a trance. You stand like this for so long that people glance back at you as they pass, but you do not move. You do not register your surroundings.

	But then you do move. You cut through a group of people and step off the curb, walking into the middle of the lane. A large truck blares its horn as it approaches, unable to brake quickly enough, but instead of jumping out of the way, you turn to face it.

	The truck vanishes. It's like it drives through an invisible barrier, and then it's just... gone.

	Someone screams. Your head snaps toward the sound, and you can swear your face is rippling, and then the feed is obliterated in a flash of white.

	But the light doesn't stop. It grows brighter, brighter than any digital screen could handle, and the light bores into your eyes, into your skull, and then everything is gone.

	END`),
		//choices: ,
	},

	{ // My TYPE
		choiceID: "TYPE",
		writtenScene: (`

	-- -- --

	The man crosses his arms over his chest. "I've dealt with a lot of you before. Acting confused. Saying they don't remember what happened." His smirk widens. "Insisting they're the wrong person."

	"Maybe there's truth to those claims."

	The smirk vanishes. "Or maybe you're not as clever as you think."

	It happens in less than a second--He reaches for his belt, draws out a gun.

	You don't even have time to blink before the bullet enters your skull.

	END`),
		//choices: ,
	},

	{ // get shot
		choiceID: "YES",
		writtenScene: (`

	-- -- --

	The man does not respond. His glare hardens into ice. It's almost like the room itself has gotten colder.

	And then his expression suddenly shifts--it softens. He leans back in his chair, crossing his arms over his chest. His brow is furrowed, but now it's more from contemplation than impatience.

	"You came out of the bar," he says. "You spoke with her, and you told her she had to leave."

	Despite having no idea what he's talking about, you nod.

	"So you were helping her. Is that right?"

	What?

	"Yes," you reply. "I wanted her to be safe." You don't know where the words are coming from, but he seems to buy into them.

	"So...." The man finally breaks eye contact. He seems to be in deep thought. "So it wasn't you."

	Shit, did you kill someone?

	"...No."

	Slowly, the man turns his head back toward you. He stares. You stare back.

	The man smirks. "You're clever."

	It is not a compliment. Not when he says it that way, his eyes darkening with fury even as his grin widens. It's a horrendous thing to watch, and time seems to slow to a crawl as though wanting to draw out the torture.

	Your head throbs.

	The man pulls out a gun, his expression vanishing into an eerie blankness.

	As he aims at your forehead, your whole face pulses, like something is pressing out from within your sinuses, your eyes, your skull--something struggling to escape.

	Something flashes across the man's eyes. Fear. He is afraid. His finger spasms around the trigger, pulling tight.

	The bullet bores into your brain as the thing escapes through your eyes, and you die in a flash of blinding light.

	END`),
		//choices: ,
	},
];

// Call each scene by its INDEX number. Use one function for written scene and choice display.
const showScene = function(index) {
	console.log(sceneList[index].writtenScene);
	for (let element of sceneList[index].choices) {
		console.log(">> " + element);
	}
	userChoice = prompt("");
};

// One function for taking user to new scene
const newScene = function(userChoice) {
	for (let scene of sceneList) {
		if (scene.choiceID == userChoice) {
			showScene(sceneList.indexOf(scene));
		}
	}
};

showScene(0);
newScene("START");
