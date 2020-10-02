**Pick your favorite CSS property so far. Explain what it's used for and all the potential values or units it can take. Why do you like it?**<br/>
I love box-shadow because even with so few values, you can do so many different things with it.<br/>
It's used to add shadows under boxes/borders to give them a three-dimensional effect.<br/>
FORMAT:
```
box-shadow: (horizontal offset (px)) (vertical offset (px)) (blur spread (px)) (color);
```
I love the way box-shadow is used in Inès K.'s "Retro Cyberpunk" theme; it looks like a neon sign, so of course I immediately had to learn how to recreate it, which was actually way easier than I'd expected it to be. I added inset shadows to make it look like a radiating light, and I made the actual box border very pale so it looked like a light source. It was fun messing around with the numbers and colors.
<br/>
<br/>

**Imagine you are making a website for a restaurant and you need to style the menu options to show that some are spicy or vegetarian or gluten-free. If all the menu options are using the same HTML elements, what CSS selector(s) could you use and why? Show an example.**<br/>
I'd make class selectors and then add them to the elements; if all options use the same type of element, class would be the only way as of now for me to distinguish them from each other.
```
.spicy {
  color: var(--whats-a-spicy-color);
}
.gluten-free {
  color: var(--whats-a-gluten-free-color);
}
.vegetarian {
  color: var(--whats-a-vegetarian-color);
}
etc.
```
<br/>

**Style rules sometimes conflict with each other, especially in large projects. Explain the difference between cascade, inheritance, and specificity and how you can use these concepts to organize your CSS.**<br/>
Cascade: The browser reads the document from top to bottom, applying styles to the page in the order it reads them. If p {color: red;} comes *after* p {color:blue;}, a paragraph in the HTML page will end up red.<br/>
Inheritance: Some properties are passed down from parent to child elements while others are not, so if I wanted to make one word in a paragraph a different color or font from the rest of the text, I could use the span tag within the HTML document itself.<br/>
Specificity: If there's more than one selector for the same element, the browser will always apply the property that is more specific. In my tribute page, I was confused for a while as to why some text was different from what was specified in the div, and then I realized it was because I'd specified the p element *inside* the div's class selector.<br/>
