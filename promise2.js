// Simuliamo un sistema di gestione ordini online che utilizza le promesse in JavaScript. 
// L'obiettivo è creare funzioni che rappresentino operazioni asincrone, come il recupero degli articoli nel carrello, il calcolo del totale, e la conferma dell'ordine.

// Istruzioni:

// Funzione per Recupero Carrello:

// 1. Creare una funzione recuperaCarrello che restituisca una promessa.
// La promessa dovrebbe risolversi con un array di oggetti, ognuno rappresentante un prodotto nel carrello con le proprietà nome e prezzo.
// Utilizzare un setTimeout per simulare un recupero asincrono dei dati dopo 1 secondo.
// Funzione per Calcolo Totale:

// 2. Creare una funzione calcolaTotale che accetti un array di prodotti e restituisca una promessa.
// La promessa dovrebbe risolversi con il totale dei prezzi dei prodotti nel carrello.
// Utilizzare un setTimeout per simulare un calcolo asincrono del totale dopo 1 secondo.
// Funzione per Conferma Ordine:

// 3. Creare una funzione confermaOrdine che accetti il totale e restituisca una promessa.
// La promessa dovrebbe risolversi con un messaggio di conferma dell'ordine e il totale pagato.
// Utilizzare un setTimeout per simulare una conferma asincrona dell'ordine dopo 1 secondo.
// Utilizzo delle Promesse:

// 4. Chiamare recuperaCarrello per ottenere l'array di prodotti nel carrello.
// Utilizzare calcolaTotale per ottenere il totale dei prezzi dei prodotti.
// Chiamare confermaOrdine con il totale ottenuto per confermare l'ordine.


// Gestione Errori:

// 5. Introdurre la possibilità di errori, ad esempio, se il carrello è vuoto o se il totale non può essere calcolato.
// Gestire gli errori in modo appropriato utilizzando il blocco catch delle promesse.

function recuperaCarrello() {
    //...
}

function calcolaTotale(prodotti) {
     //...
}

function confermaOrdine(totale) {
   //...
}

// Utilizzo delle promise
recuperaCarrello()
    .then((prodotti) => calcolaTotale(prodotti))
    .then((totale) => confermaOrdine(totale))
    .then((messaggioConferma) => {
        console.log(messaggioConferma);
    })
    .catch((errore) => {
        console.error(`Errore: ${errore.message}`);
    });
