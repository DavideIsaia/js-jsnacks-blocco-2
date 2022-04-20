// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let somma = 0;
let i = 0;

while (i < 5) {
    const userNumber = parseInt(prompt("Inserisci un numero"));
    console.log(userNumber);
     somma += userNumber;
    i++;
}

// stampo il risultato
console.log(somma);
document.getElementById('message').innerHTML = `la somma di tutti i numeri inseriti è: ${somma}`;