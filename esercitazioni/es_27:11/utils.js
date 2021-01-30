"use strict"


function InserisciIntero(print,x1,x2){
    let input
    do{
        input = +prompt(print)
    }
    while(input<x1||input> x2)
    
    return input
}

function numeri(k,min,max){
    let number_input
    let even = 0
    let somma = 0
    for (let i=0; i<k; i++){
        do{
            number_input = +prompt("Digita un numero compreso tra min e max ")           
        }
        while (number_input<min || number_input>max)
        even = evenNumber(number_input) ? even+1 : even
        somma = sumNumber(min,max,number_input) ? somma + number_input : somma
    }
    alert("Ci sono: " + even + " pari")
    alert("Il tot dei numeri = " + somma)

}

function evenNumber(n){
    if(n%2==0) {
        return true
    }
}

function sumNumber(min,max,n){
    if(n>((min+max)/2)){
        return true
    }
}
