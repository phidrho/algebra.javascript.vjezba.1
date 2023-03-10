var character = {
  name: 'Eleven',
  show: 'Stranger Things',
  portrayedBy: 'Millie Bobby Brown',
}

const quotes = [
	'I\'m going to my friends. I\'m going home.', 
	'Pure fuel! PURE FUEL! WOO!', 
	'See? Zoomer.', 
	'Bitchin.'
];

// zadatak 2
var prototip = Object.getPrototypeOf(character);

console.log(prototip);

var prototip2 = Object.getPrototypeOf(prototip);
console.log(prototip2);


// zadatak 3
character.prototype = function(){
	//return quotes[parseInt(Math.random() * 10) % 4];
	return quotes[parseInt(Math.random() * 10) % quotes.length];
}

console.log(Object.getPrototypeOf(character));
console.log(character.prototype);
console.log(character.prototype());
