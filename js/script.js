/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
	{
		quote:"Have no fear of perfection, you'll never reach it.",
		source:"Salvador Dali",
		tags:["inspirational", "deep"]
	},{
		quote:"Only a life lived for others is a life worthwhile.",
		source:"Albert Einstein",
		tags:["inspirational", "deep"]
	},{
		quote:"I turned myself into a pickle.",
		source:"Rick Sanchez",
		year:"2017",
		citation:"Rick and Morty: Season 3; Episode 3",
		tags:["funniest shit i've ever seen"]
	},{
		quote:"I came, I saw, I conquered",
		source:"Julius Caesar",
	},{
		quote:"The journey of a thousand miles begins with one step.",
		source:"Lao Tzu"
	}
]
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
	let randomint = Math.floor(Math.random() * quotes.length)
	return quotes[randomint];
}

/***
 * `printQuote` function
***/
let lastQuote = undefined;

function changeBackColor() {
	// Create function that gives a random number between 0-255
	let random255 = () => Math.floor(Math.random() * 256);
	//use random255 function to create a random color
	let randomColor = `rgb(${random255()},${random255()},${random255()})`;
	//set the document background to the random color.
    document.body.style.backgroundColor = randomColor;
}
		
function printQuote() {
	//Make sure the new quote is not the same as the last.
	let quote = undefined;
	do {
		quote = getRandomQuote();
	} while(lastQuote == quote);
	lastQuote = quote;
	
	//Build the htmlstring
	let HTMLString = `<p class="quote"> ${quote.quote} </p>
					<p class="source"> ${quote.source} `; 
					
	if (quote.citation) HTMLString += `<span class="citation">${quote.citation}</span>`;
	if (quote.year) HTMLString += `<span class="citation">${quote.year}</span>`;
	if (quote.tags) HTMLString += `<span class="citation">#${quote.tags.join("#")}</span>`;

	HTMLString+='</p>';
	
	//Change the color
	changeBackColor();
	
	//Update the quote box with the new quote
	document.getElementById('quote-box').innerHTML = HTMLString; 
	alreadychanged = true;
	return HTMLString;
}
alreadychanged = false;
//Set an interval so printQuote gets called every 5s. Alreadychanged makes sure it skips if you clicked the button resently. 
setInterval(() => {
		if (alreadychanged) alreadychanged = false; 
		else printQuote();
	}, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);