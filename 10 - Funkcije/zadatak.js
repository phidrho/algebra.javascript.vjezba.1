// ZADATAK 1 - najduža riječ iz popisa

function najduzaRijecIBrojSlova(popis) {
    let brojSlova = 0;
    let najduzaRijec = "";
    let duljinaPopisa = popis.length; // ovo je svojstvo - property - pa ne treba zagrade za poziv
    for (i = 0; i < duljinaPopisa; i++) {
        if (popis[i].length > najduzaRijec.length) {
            najduzaRijec = popis[i];
        }
    }

    brojSlova = najduzaRijec.length;
    return [najduzaRijec, brojSlova];
}


mojPopis = ["Jabuka", "Kruška", "Šljiva", "Lubenica", "Jabukova"];
console.log("Najduza rijec je:", najduzaRijecIBrojSlova(mojPopis)[0], "i ima ukupno", najduzaRijecIBrojSlova(mojPopis)[1], "slova.");

// ZADATAK 2 - provjera radi li se o email adresi

function checkEmail(emailAdresa) {
    var ostatakTeksta = "";
    var mankiPostoji = 0;
    var tockaPostoji = 0;


    if (emailAdresa.indexOf("@") === -1) {
        mankiPostoji = 0;
        console.log("manki ne postoji");
    } else {
        mankiPostoji = 1;
        console.log("manki postoji");
        ostatakTeksta = emailAdresa.slice(emailAdresa.indexOf("@") + 1);
        if (ostatakTeksta.indexOf(".") === -1) {
            console.log("tocka ne postoji");
            tockaPostoji = 0;
        } else {
            console.log("tocka postoji");
            tockaPostoji = 1;
        }
    }

    if (mankiPostoji && tockaPostoji) {
        return true;
    } else {
        return false;
    }
}

var isEmailOk = checkEmail("mojeime@emailcom");
console.log("email ok = " + isEmailOk);