// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// array di nomi e cognomi
const nomi = ["Carlo", "Daniele", "Fabrizio", "Zefiro", "Davide", "Taha", "Stefano", "Sara"];
const cognomi = ["Armillotta", "Baglietto", "Corona", "Slima", "Tarquini", "Isaia"];

// array che andrò a riempire con nomi e cognomi casuali
const personeInventate = [];

// ciclo per creare 3 persone casuali
for (let i = 0; i < 3; i++) {

    // prendo un numero casuale tra 0 e la lunghezza massima dell'array
    const nomeCasualeIndice = Math.floor(Math.random() * nomi.length);
    const cognomeCasualeIndice = Math.floor(Math.random() * cognomi.length);
    console.log("indice nome", nomeCasualeIndice, "indice cognome", cognomeCasualeIndice);

    // vado sull'elemento corrispondente a quell'indice prelevato in precedenza
    const nomeCasuale = nomi[nomeCasualeIndice];
    const cognomeCasuale = cognomi[cognomeCasualeIndice];
    console.log("nome casuale", nomeCasuale, "cognome casuale", cognomeCasuale);

    // unisco i 2 elementi casuali
    const personaCasuale = ` ${nomeCasuale} ${cognomeCasuale}`;

    // inserisco il nome cognome generato mio array di nomi inventati
    personeInventate.push(personaCasuale);
}

// stampo il risultato
console.log(personeInventate);
document.getElementById('message').innerHTML = `${personeInventate}`