"use strict"

const isPari = (number) => {
    if(number % 2 === 0){return true}
    else {return false}
}

const isPrimo = number => {
    let divisori = 0
    let i
    for(i=1; i<=number; i++){
        if(number%i === 0){divisori++}
    }
    if(divisori>2){return false}
    else {return true}
}

const input_numbers = (n, min,max) =>{
    let counter_disp = 0
    let counter_primo = 0
    let array_n = []
    let value = +prompt(`Inserisci un valore compreso tra ${min} e ${max}`)
    while(value<min || value>max) {
        value = +prompt(`Inserisci un valore compreso tra ${min} e ${max} 😡`)
    }
    for (let i=0; i<n; i++){
        value = +prompt(`Inserisci un valore compreso tra ${min} e ${max}`)
        array_n.push(value)
    }
    for (let k=0; k< array_n.length; k++) {
        if(isPari(array_n[k]===false)){counter_disp++} 
        if(isPrimo(array_n[k]===true)){counter_primo++}
    }    
    alert(`I numeri dispari sono ${counter_disp} mentre quelli primi ${counter_primo}`) 
}