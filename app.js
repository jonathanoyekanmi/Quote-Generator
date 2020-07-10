var quotes = [
	"Get Wisdom in all your gettings, Don't be arrogantly ignorant",
	"There's no mistake in silence that respect silence",
	"Always be coding! - Danny",
	"Always be building! - Danny",
	"Code Code Code!! - Danny",
	"Habits are built daily",
	"Make time your ally",
	"Time magnifies the difference between success and failure",
	"Fall in love with boredom, that's your pass to greatness",
	"Always be prepared!",
	"You can make it",
	"it might not look like it now, don't give up. Keep working",
	"You are closer than ever, don't give up!",
	"Get your hands dirty"
]

function getQuote() {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById("newQuoteSection").innerHTML = quotes[randomNumber];
}
	
