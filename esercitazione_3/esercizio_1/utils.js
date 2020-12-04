"use strict"

let inserisciIntero = (x) => {
    do {
        x = +prompt("Inserisci un valore pari: ")
    } while(x%2!=0)
    alert(`Il numero ${x} è pari`)
}