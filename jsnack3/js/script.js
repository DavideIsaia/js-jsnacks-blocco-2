// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// chiedo all'utente di inserire un numero N
let userNumber = parseInt(prompt("Inserisci un numero"));
console.log(userNumber);

// creo un ciclo che va da 1 a N
i = 1;

let cube = 0;

while (i < userNumber) {

    // all'interno del cilo faccio il cubo **3 di tutti i numeri da 1 a N
    cube = userNumber*userNumber*userNumber; 
    i++;
}

// stampo il risultato
console.log(cube);