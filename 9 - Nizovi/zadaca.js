
var names = ["John", "Jane", "Bob", "Mike"];


console.log("Zadatak 1");
// zadatak 1
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("Zadatak 2");


// zadatak 2
names[-1] = 'Vedran';
console.log(names);


console.log("Zadatak 3");
// zadatak 3
for (var i = 0; i < names.length; i++) {
    if (names[i] === "Jane") {
        break;
    }
    console.log(names[i]);
}

console.log("Zadatak 4");


// zadatak 4
var names = ["John", undefined, "Bob", "Mike"];

for (var i = 0; i < names.length; i++) {
    if (names[i] === undefined) {
        names.splice(i, 1);
    } else {
        console.log(names[i]);
    }
}
console.log(names);