**We learned Web Development because it is a standard way to create user interfaces across platforms, but then we learned all of the non-standard aspects that we have to look out for. What does that tell you about building other platform specific user interfaces?**<br/>
There's a lot to pay attention to.... In my project, I just put all the desktop-layout stuff in the global CSS area, which probably wasn't such a good idea. I should've put it all in its own desktop media query, but I honestly just didn't feel like it.... So it tells me I'm going to need to plan things out a lot more thoroughly. I need to sit down and design each layout *before* coding it and just go, "Okay, so this goes here in this layout, so I've got to put it under this media query." I've got to think that all through.
<br/>
<br/>
**Show two examples of CSS Media Queries that use different Media Features. Explain how the user agent will decide to use those rulesets or not.**<br/>
```
@media only screen and (max-width: 400px) {
  body {
    background-color: #F09A9D; /* Red */
  }
}
```
This is taken directly from one of the lessons. It turns the screen red at the width 400px, and the user agent basically looks at the width of the screen and goes, "Oh, okay, so it's this wide, so I've got to switch this up a little. I'm gonna go look here in this box because this is all the stuff I have to do.... Okay, I've gotta turn the screen red. Cool. Done."
```
@media only screen and (min-width: 961px) {
  .header {
    height: 400px;
  }
}
```
This bit is also taken from lesson.<br/>
Once again, the browser is looking at the size of the screen, and then it's digging through the media query "box" to find what it needs.<br/>
"Ooh, now the screen is bigger than or equal to 961px, so I'm gonna go over here to this box.... I'm going to make the header 400px tall.... Cool. Done. I've got to remember to change it back if the screen gets smaller, but we'll get there when we get there."
<br/>
<br/>
**Do you think it is better to define Breakpoints using standard device sizes or using the specific content on your site? Why?**<br/>
Specific content on my site. Each device is gonna be a little different from others, and I don't really want to sit there and define every single possible device size. That's going to take way too much time.
