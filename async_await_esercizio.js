// Esercizio: "Gestione Utenti Asincrona"

// Descrizione dell'Esercizio:
// Immaginiamo di dover gestire una lista di utenti da un server remoto. Utilizzeremo async/await per semplificare il processo asincrono.

// Istruzioni:

// 1. Funzione per Recupero Utenti:

// Creare una funzione asincrona recuperaUtenti che simula il recupero di utenti da un server remoto.
// Utilizzare un setTimeout per simulare un ritardo di rete.
// Risolvere la promessa con un array di oggetti utente, ognuno con le proprietà id e nome.

// 2. Funzione per Recupero Dettagli Utente:

// Creare una funzione asincrona recuperaDettagliUtente che accetti un id utente e simuli il recupero dei dettagli di quell'utente.
// Utilizzare un setTimeout per simulare un ritardo di rete.
// Risolvere la promessa con un oggetto contenente le informazioni dettagliate dell'utente, ad esempio id, nome, e email.

// 3. Chiamate Asincrone:

// Chiamare la funzione recuperaUtenti e memorizzare l'array di utenti.
// Per ogni utente nell'array, chiamare recuperaDettagliUtente utilizzando async/await.
// Stampare i dettagli di ciascun utente.

// 4. Gestione degli Errori:

// Introdurre la possibilità di errori, ad esempio, se il recupero degli utenti fallisce o se i dettagli di un utente non possono essere recuperati.
// Gestire gli errori in modo appropriato utilizzando il blocco try/catch.


async function recuperaUtenti() {
   //...
  }
  
  async function recuperaDettagliUtente(id) {
    //...
  }
  
  async function gestisciUtenti() {
    //...
  }
  
  // Esegui la gestione degli utenti
  gestisciUtenti();
  