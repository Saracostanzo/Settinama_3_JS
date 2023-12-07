// Teoria

// async/await è una sintassi di JavaScript che semplifica la gestione delle promesse, 
// rendendo il codice asincrono più leggibile e facile da scrivere. Vediamolo in modo semplice e teorico:

// async Function:

// Una funzione dichiarata con la keyword async è una funzione asincrona.
// L'utilizzo di async prima della dichiarazione di una funzione indica che la funzione restituirà sempre una promessa.

// async function esempioAsincrono() {
//      ...
//   }

// La keyword await può essere utilizzata all'interno di una funzione asincrona per attendere il completamento di una promessa.
// L'esecuzione della funzione asincrona si ferma finché la promessa non viene risolta o rigettata.

// async function esempioAsincrono() {
//     const risultato = await unaPromessa;
//     Il codice qui sotto sarà eseguito dopo che la promessa si è risolta o rigettata
//   }
  
// Gestione degli Errori:

// Puoi utilizzare la sintassi try/catch per gestire gli errori quando si utilizza await.
// Se la promessa è risolta con successo, il controllo passa al blocco try. Se viene rigettata, il controllo passa al blocco catch

// async function esempioAsincrono() {
//     try {
//       const risultato = await unaPromessa;
//        Codice in caso di successo
//     } catch (errore) {
//       Codice in caso di errore
//     }
//   }

//   Async/Await con Promise.all:

// Puoi utilizzare Promise.all con async/await per eseguire in parallelo più promesse.

// async function esempioAsincrono() {
//     const [risultato1, risultato2] = await Promise.all([promessa1, promessa2]);
//     Codice da eseguire dopo che entrambe le promesse si sono risolte
//   }
  

// Differenza tra callback ed async await

// Nella programmazione asincrona tradizionale con le promesse,
//  il codice spesso coinvolge callback annidate o il chaining di .then(), il che può rendere il codice meno lineare e più complesso da seguire,
//   specialmente quando si tratta di gestire più operazioni asincrone in sequenza o in parallelo.

// Con l'utilizzo di async/await, è possibile scrivere il codice in modo più simile a quello sincrono. 

// Vediamo un esempio per illustrare la differenza:

// Senza async/await (utilizzando le promesse):

// function esempioSenzaAsyncAwait() {
//     fetchData()
//       .then((data) => {
//         return processData(data);
//       })
//       .then((result) => {
//         return performAction(result);
//       })
//       .then((finalResult) => {
//         console.log(finalResult);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
  
//   Con async/await:

//   async function esempioConAsyncAwait() {
//     try {
//       const data = await fetchData();
//       const processedData = await processData(data);
//       const finalResult = await performAction(processedData);
//       console.log(finalResult);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//  Nel secondo esempio con async/await, il flusso del codice appare più sequenziale e simile a quello sincrono.
//  La parola chiave await permette di sospendere l'esecuzione della funzione finché la promessa non si risolve o rigetta, rendendo il codice più chiaro e più facile da leggere.
//  Questa è la ragione per cui si dice che async/await rende il codice asincrono più simile a quello sincrono.

// Questa caratteristica è particolarmente utile quando si lavora con logiche complesse o con molte operazioni asincrone,
//  migliorando la manutenibilità e la comprensibilità del codice.
  