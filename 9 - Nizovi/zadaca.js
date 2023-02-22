// zadatak 1
console.log("====== Zadatak 1 ======");
var names = ["John", "Jane", "Bob", "Mike"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}



// zadatak 2
console.log("====== Zadatak 2 ======");
names[-1] = 'Vedran';
console.log(names);



// zadatak 3
console.log("====== Zadatak 3 ======");
for (var i = 0; i < names.length; i++) {
    if (names[i] === "Jane") {
        break;
    }
    console.log(names[i]);
}



// zadatak 4
console.log("====== Zadatak 4 ======");

var names = ["John", undefined, "Bob", "Mike"];

for (var i = 0; i < names.length; i++) {
    if (names[i] === undefined) {
        names.splice(i, 1);
    } else {
        console.log(names[i]);
    }
}
console.log(names);
