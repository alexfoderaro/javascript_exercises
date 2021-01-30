"use strict"

const isPari = (number) => {
    if(number % 2 === 0){return true}
    else {return false}
}


const ask_values = (n, min, max) => {
    let array_n = []
    let value = +prompt(`Inserisci un valore compreso tra ${min} e ${max}`)
    while(value<min || value>max) {
        value = +prompt(`Inserisci un valore compreso tra ${min} e ${max} 😡`)
    }
    for (let i=0; i<n; i++){
        value = +prompt(`Inserisci un valore compreso tra ${min} e ${max}`)
        array_n.push(value)
    }
    let massimo = Math.max.apply(null, array_n)
    let average = (array) => array.reduce((a, b) => a + b)/array.length
    let media = average(array_n)
    alert(`Il massimo è ${massimo}, la media è ${media}`)
    //return  % of even numbers
    let pari = 0
    for(let k=0; k<n; k++){
        if(isPari(array_n[k]) === true){pari++}
    }
    alert("Il " + 100*pari/n + "% dei numeri inseriti è pari")
}


   
