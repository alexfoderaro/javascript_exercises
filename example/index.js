let anni = [18, 20, 13, 8, 29, 3, 47, 34]
let anniAumentati
let sommaAnni

/* Funzione map che crea una lista con gli anni aumentati di 10 */
anniAumentati = anni.map(e => {
    e += 10
    return e
})
// che è uguale a:
anniAumentati = anni.map(e => e += 10)

/* la callback di .map accetta, oltre all'elemento e della lista, un parametro 
opzionale i rappresentante l'indice ed un parametro opzionale arr rappresentante l'array.
Questa cosa vale anche per .reduce, .filter e .forEach */

//Esempio:
let indiceAnniAumentati = anni.map((e, i, arr) => i += 1)
//Restituisce un nuovo array contenente gli indici degli anni aumentati di uno


/* Funzione filter che crea una lista con gli anni maggiorenni */
let anniMaggiorenni = anni.filter(e => e >= 18) 
//Se la condizione nella callback restituisce true, l'elemento viene aggiunto nell'array

/* Funzione forEach per printare gli anni */
anni.forEach(e => console.log(e))
//forEach, a differenza delle altre 3 funzioni, non restituisce nulla

/* Funzione reduce per sommare tutti gli anni partendo da 25 come valore di partenza */
sommaAnni = anni.reduce((acc, e) => {
    return acc += e
}, 25)
//Che è uguale a:
sommaAnni = anni.reduce((acc, e) => acc += e, 25)
/* Reduce, a differenza delle altre tre funzioni, accetta, oltre alla callback, il
valore opzionale dell'accumulatore (in questo caso è 25). Se non lo si mette, assumerà
di default il valore 0. Nella signature della callback, inoltre, va riportato anche l'accumulatore.
Si avrà quindi una signature del tipo (acc, e, i, arr) => {ecc} */
console.log(sommaAnni)

//esempio promise

const fetch = require('node-fetch')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      let array_id = json.map(e => e.id)
      array_id.forEach(e => console.log(e))
    })