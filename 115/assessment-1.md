**Now that you've spent a few weeks working on longer projects, how do you think you'll adapt to working in the professional world?**<br/>
I guess I have more faith in myself now, even if I'm still not perfect with keeping to set schedules and deadlines. I have a better idea of what I'm in for... and I'm in for a lot. But I want to make the best of it by doing things I enjoy and by helping other people get the results they want.<br/>
Hell, I was just talking to my mom today, and I asked her, "If you wanted me to program something for you, what would you want?" And she immediately answered with a logbook-type program. With checkmarks and categories and stuff. So I'm already kind of working for other people, which is really cool. She's going to send me a list of features, and I'm gonna do my best to make it into something functional.
<br/>
<br/>
**Imagine you are building your Choose-Your-Own-Adventure project in JavaScript for the browser. The user has clicked a button to select which room to enter, walk through how you would manipulate the page to show the next room's description. Explain the DOM methods you would use and why.**<br/>
I would have a single "box" for the scene descriptions, and the text would change depending on what the user clicked. Having 50 billion text boxes is just excessive when I could just have one.<br/>
I'd also make sure to log the player's previous actions somewhere in the script. Each choice has some kind of effect on their interactions, so the program would need to refer to that list in order to decide which scene is appropriate.
<br/>
<br/>
**Why are different data structures useful? Use the Document Object Model as an example. Would it work as any structure other than a tree?**<br/>
The thing about trees is that you can follow the whole path, and there aren't any cycles to run through. It's "choose path, go path, end path."<br/>
The whole point of the DOM is to be a tree, anyway. It organizes things into neat little paths.<br/>
I honestly don't even know what "cycle" means in the context of the DOM. Does it mean it literally runs through things more than once, or does it just mean that branches are eventually brought together like a ring or something?<br/>
I just like the tree thing. It gives a sense of order and feasibility to the code.
