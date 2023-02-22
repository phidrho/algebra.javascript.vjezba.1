// PRIMJER NIZ (array)

var names = ['John', 'Jane', 'Mike'];
console.log(names);
console.log(typeof(names));

// kreiranje niza - literal i kao objekt klase - rezultat je identičan

// kreiranje niza kao literal:
var emptyArrayLiteral = [];
var weirdArrayLiteral = [1,,3];
var namesLiteral = ['John', 'Jane', 'Mike'];

// kreiranje niza kao objekt klase:
var emptyArrayObject = new Array();
var weirdArrayObject = new Array(5);
var namesObject = new Array('John', 'Jane', 'Mike');

console.log("Primjer for:");
// primjer for petljom ispis imena
var brojImena = names.length;
for (let i = 0; i < brojImena; i++) {
    console.log(names[i]);
}

console.log("Primjer forEach:");
// primjer foreach petljom ispis imena
names.forEach(function(value){
    console.log(value);
})