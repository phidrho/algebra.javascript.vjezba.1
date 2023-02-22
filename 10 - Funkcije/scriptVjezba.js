// PRIMJERI ZA FUNKCIJE

function ispisiIme(ime) {
    console.log(ime);
}

ispisiIme("John Doe");


ispisiIme("Josipa");

for (let i = 1; i <= 5; i++) {
    ispisiIme("Josipa " + i);
}

function myFunc1(a, b) {
    if (!b) {
        b = 1;
    }
    return a + b;
}

console.log(myFunc1(1)); // radi u JavaScriptu, iako baš nema smisla > 2
console.log(myFunc1(1, 2)); // > 3

function myFunc2(a, b) {
    b = b || 1;
    return a + b;
}

console.log(myFunc2(1)); // radi u JavaScriptu, iako baš nema smisla > 2
console.log(myFunc2(1, 2)); // > 3


function myFunc3(a, b = 1) { // opcionalni parametri od ES6 standarda
    return a + b;
}

console.log(myFunc3(1)); // > 2
console.log(myFunc3(1, 2)); // > 3


// sprema se funkcija u varijablu - ne koristiti iako radi za definiciju funkcije!
var addOne = function(value) {
    return value + 1;
}

console.log(addOne(1));

var myVar = addOne(1);
console.log(myVar);
