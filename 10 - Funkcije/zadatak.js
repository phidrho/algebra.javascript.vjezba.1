function najduzaRijecIBrojSlova(popis) {
    let brojSlova = 0;
    let najduzaRijec = "";
    let duljinaPopisa = popis.length;
    for (i = 0; i < duljinaPopisa; i++) {
        if (popis[i].length > brojSlova) {
            brojSlova = popis[i].length;
            najduzaRijec = popis[i]; 
        }
    }
    return [najduzaRijec, brojSlova];
}


mojPopis = ["Jabuka", "Kruška", "Šljiva", "Lubenica"];
console.log("Najduza rijec je:", najduzaRijecIBrojSlova(mojPopis)[0], "i ima ukupno", najduzaRijecIBrojSlova(mojPopis)[1], "slova.");
