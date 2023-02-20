let brojac = 3;
while (brojac <= 20) {
    if (brojac % 9 == 0) {
        brojac++;
        continue;
    }
    console.log(brojac);
    brojac++;
}

var varOne = 0;
for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
        varOne++;
    }
}
console.log("varOne: " + varOne);