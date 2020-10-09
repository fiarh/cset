**The tools and techniques for web development have changed a lot over the years. How will you personally try to keep up with those changes and where can you look to find them?**<br/>
I already have a folder in bookmarks called "references," which I use if I forget something. I've got MDN, Interneting Is Hard, Can I Use, W3, Style Stage, and even "The World's Worst Website Ever."<br/>
So I'll look things up online, but I'd also make sure to ask classmates and/or co-workers for their advice. I might even attend conferences, too, if there's something I'm really invested in.<br/>
<br/>

**The lecture and readings discussed the limitations of using floats for layout. What are some of these limitations? Provide an example.**<br/>
Flexboxes can handle multiple items, and it can also align items both horizontally *and* vertically. Floats can only be aligned horizontally.<br/>
Floats can't rotate like flexboxes, either; they're just straight up-and-down, left-to-right, and that can't be changed easily.<br/>
Flexboxes can also contain child boxes of their own, which can in turn have their own items and style rules.<br/>
<br/>

**Flexbox is built to be language agnostic, so it uses generic terminology like the "Main" or "Cross" axis. Choose a flex property that affects one of these axes on a flex container and explain how it is used. Show how the result can change based on different flex directions and different writing modes.**<br/>
The "main" axis, in terms of English writing, is vertical, and it runs from top to bottom. The "cross" axis runs a*cross* the page from left to right.<br/>
`flex-direction` determines the directions of the main and cross axes; if you flip the box, you also flip the axes, which you have to keep in mind if you're going to manipulate the box further.<br/>
So if I wanted to write in traditional Japanese, I'd have to flip the box:<br/>
In English, I would just leave `flex-direction` as `row`, but in Japanese, I'd have to change it to `flex-direction: column;`. Since traditional Japanese is also written right-to-left, I'd need to push the text up against the right edge of the page. I can't use `justify-content` for this because since the box is flipped, the main axis is also flipped. I'd have to use `align-items: flex-end;` to get the text where I want it to be.<br/>
I'd need to make each word into its own flex item (contained in another parent div), too, in order for this to work.
