function najduzaRijecIBrojSlova(popis) {
    let brojSlova = 0;
    let najduzaRijec = "";
    let duljinaPopisa = popis.length; // ovo je možda "anonymous" funkcija ili je to je svojstvo - property - pa ne treba zagrade za poziv
    for (i = 0; i < duljinaPopisa; i++) {
        if (popis[i].length == najduzaRijec.length) {
            najduzaRijec = popis[i] + ", " + najduzaRijec;
        } else {
            najduzaRijec = popis[i];
        }
        if (popis[i].length > brojSlova) {
            brojSlova = popis[i].length;

        }
    }
    return [najduzaRijec, brojSlova];
}


mojPopis = ["Jabuka", "Kruška", "Šljiva", "Lubenica", "Jabukova"];
console.log("Najduza/e rijec/i je:", najduzaRijecIBrojSlova(mojPopis)[0], "i ima ukupno", najduzaRijecIBrojSlova(mojPopis)[1], "slova.");
