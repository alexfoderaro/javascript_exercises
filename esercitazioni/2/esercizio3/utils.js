"use strict"

function valori(a,b,k){
    a = +prompt("Inserisci il valore A ")
    b = +prompt("Inserisci il valore B ")
    k = +prompt("Inserisci il valore K ")   
    
    maggiore(a,b,k)
    minore(a,b,k)
    sumAtoB(a,b)
    multiplyAtoB(a,b,k)
    multipli(a,b,2)
}

function maggiore(a,b,k){
    let lista = [a,b,k]
    let max = Math.max.apply(null, lista);
    alert(`Il massimo è ${max}`)

}
function minore(a,b,k){
    let lista = [a,b,k]
    let min = Math.min.apply(null, lista);
    alert(`e il minimo è ${min}`)
}

function sumAtoB(a, b){
    let somma = 0
    while (a<=b){
        somma += a
        a += 1
    }
    alert(`La somma del valore a = ${a} fino al valore b = ${b} è: ${somma}`)

}
function multiplyAtoB(a, b){
    let risultato = 1 
    let counter
    for (let counter = a; counter<b; counter++){
        if (counter===0){
            counter++
        }
        if ((counter%2)===0){
            risultato = counter*risultato
        }
    }
    alert(`Il prodotto di a = ${a} dei numeri pari fino a b = ${b} è ${risultato}`)
}
function multipli(a,b,k){
    let lista_multipli = []
    let counter_2
    for (counter_2 = a; counter_2<b; counter_2++){
        if ((counter_2%k)===0){
            lista_multipli.push(counter_2)
        }
    }
    alert(`multipli di k: ${k} compresi tra ${a} e ${b} sono: `+lista_multipli)
}
