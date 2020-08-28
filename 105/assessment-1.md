**In your opinion, what is the most important thing you learned this week? Why?**

I learned where the backtick key is! And I learned how important it is in a coding context.
Template literals--the whole "doing an operation inside a string" thing, the easy newlines--are pretty cool.

And the second-years had cool stories and great advice. When I first joined the Slack group, I was a little intimidated by all the tech and hardware talk going on. I didn't understand it, and I didn't care enough to look the stuff up.
But a lot of students are coming at this class the same way I am--with little or no prior programming knowledge. It's nice to know I'm not alone in that.

--

**Describe the general idea of high and low level programming languages using the concept of abstraction.**

The "high" or "low" levels refer to levels of abstraction; if a programming language is highly-abstracted (i.e., high-level), a lot of code details are hidden in order to make it easier to understand. Low-level languages, by contrast, don't hide as much information. Those languages are "closer" to binary--or the computer's actual hardware.

--

**JavaScript was designed to be flexible with values and types, often jumping back and forth between them. Compare some pros and cons of this decision. How might it help you? How might it get in the way?**

If you wanted to make sure a user actually entered something as input, you could use the comparison operators to do it (by comparing the string to a boolean value); an empty string would return `false`, and a filled string would return `true`.
If a user failed to enter anything at all and you wanted to do a math operation on it, it would still work with `null` because it's in the place of 0.

But if you wanted to take user input--a string reading "6"--and add it to a preset integer, 12, it will not work as a math operation. `console.log("6" + 12)` or `console.log(6+"12")` would output `612` because the program read the input number as a string and decided to concatenate it instead of adding it. In order for the code to work as intended, you'd need to manually cast the string as an integer/number.
