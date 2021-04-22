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
		quote: 'It’s not my fault.',
		source: 'Han Solo',
		citation: 'Return of the Jedi',
		year: 1983,
	},
	{
		quote: 'So this is how liberty dies … with thunderous applause.',
		source: 'Padme',
		citation: 'Revenge of the Sith',
		year: 2005,
	},
	{
		quote: 'It’s a trap!',
		source: 'Admiral Ackbar',
		citation: 'Return of the Jedi',
		year: 1983,
	},
	{
		quote: 'Never tell me the odds.',
		source: 'Han Solo',
		citation: 'Empire Strikes Back',
		year: 1980,
	},
	{
		quote: 'Stay on target.',
		source: 'Gold Five',
		citation: 'A New Hope',
		year: 1977,
	},
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote(arr) {
	return Math.floor(Math.random() * arr.length);
} // returns a random number but will not go above the length of the array.

/***
 * `printQuote` function
 ***/

function printQuote() {
	let number = getRandomQuote(quotes); // gets a number to be used for selecting quote out of array
	console.log(number);
	let html = `<div id="quote-box" class="quote-box">
  <p class="quote">${quotes[number].quote}</p>
  <p class="source">${quotes[number].source}<span class="citation">${quotes[number].citation}</span><span class="year">${quotes[number].year}</span></p>
</div>`;
	document.querySelector('.container').innerHTML = html;
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById('load-quote')
	.addEventListener('click', printQuote, false);
