// Teoria
// Le promise (Promise) in JavaScript sono un modo di gestire le operazioni asincrone in modo più ordinato e leggibile. 
// Sono un oggetto che rappresenta il completamento o il fallimento di un'operazione asincrona,
// permettono di scrivere codice più strutturato e gestibile rispetto alle callback annidate.

// Ecco una spiegazione chiara e semplice dei costrutti principali delle promise:

// Resolve e Reject:

// Resolve: È una funzione che viene chiamata quando un'operazione asincrona ha successo (si completa con successo). Restituisce il risultato desiderato.

// Reject: È una funzione che viene chiamata quando un'operazione asincrona fallisce. Restituisce un motivo (errore) che spiega il motivo del fallimento.

// esempio:

// const promise = new Promise((resolve, reject) => {
//     // Esegui l'operazione asincrona
//     if (operazioneAsincronaRiuscita) {
//       resolve('Operazione completata con successo');
//     } else {
//       reject('Qualcosa è andato storto');
//     }
//   });
  
//   Then e Catch:

//   Then: Viene utilizzato per gestire il successo di una promise. 
//   Accetta una funzione che verrà eseguita quando la promessa viene risolta con successo. Restituisce una nuova promessa, consentendo la catena di operazioni asincrone.

//   Catch: Viene utilizzato per gestire il fallimento di una promise.
//  Accetta una funzione che verrà eseguita quando la promessa viene rigettata. Anche questa restituisce una nuova promessa.
  
// esempio:
// promise
//   .then((risultato) => {
//     console.log('Successo:', risultato);
//     return 'Nuovo risultato';  Opzionale: permette la catena di operazioni
//   })
// Questa parte del codice viene eseguita quando la promessa ha successo (è risolta con successo).
// risultato contiene il valore restituito dalla funzione resolve all'interno della promessa.
// Qui, viene stampato a console il messaggio "Successo:" insieme al valore di risultato.
// La clausola return 'Nuovo risultato'; è opzionale ma consente la catena di operazioni. Questo valore può essere utilizzato nel prossimo blocco .then.
  
// .catch((motivo) => {
//     console.error('Errore:', motivo);
//     throw new Error('Nuovo errore');  Opzionale: permette la catena di operazioni
//   })

//   Questa parte viene eseguita quando la promessa fallisce (è rigettata).
//   motivo contiene il valore restituito dalla funzione reject all'interno della promessa o l'errore sollevato.
//   Qui, viene stampato a console il messaggio "Errore:" insieme al valore di motivo.
//   La clausola throw new Error('Nuovo errore'); è opzionale ma consente la catena di operazioni. 
//   Questo errore può essere catturato nel blocco successivo .catch o gestito da un blocco .then successivo.

//   .then((nuovoRisultato) => {
//     console.log('Nuovo risultato dopo errore:', nuovoRisultato);
//   });

//   Questa parte viene eseguita se la promessa originale ha successo o se la promessa è stata gestita con successo nel blocco .catch.
//   nuovoRisultato contiene il valore restituito dal blocco .then precedente.
//   Qui, viene stampato a console il messaggio "Nuovo risultato dopo errore:" insieme al valore di nuovoRisultato.




// NB: L'oggetto Error in JavaScript ha alcune proprietà predefinite. Le proprietà più comuni sono:

// name: Restituisce il nome dell'errore. Di solito, il valore è "Error". Può essere personalizzato quando si crea un nuovo oggetto Error.

// message: Restituisce una stringa che descrive l'errore.

// stack: Restituisce una stringa che rappresenta la traccia dello stack dell'errore, ossia la sequenza di chiamate di funzione che ha portato all'errore. 
// Questa proprietà è particolarmente utile per il debugging.




// ESERCIZIO

// Creare una funzione generateNumber che restituisce una promessa. La promessa genera un numero casuale tra 1 e 10, lo somma a un valore fornito come argomento x, 
// e risolve la promessa solo se il numero casuale generato è maggiore di 5.
// Se il numero casuale è 5 o inferiore, la promessa viene rigettata con un messaggio di errore.

function generateNumber(x){
  //...
    }
    
    generateNumber(8)
        .then((result) => {
        console.log(`Promise risolta con il valore: ${result}`);
    })
        .catch((error) => {
        console.error(`Promise rigettata con errore: ${error}`);
    });