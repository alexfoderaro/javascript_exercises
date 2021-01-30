"use strict"

let randomNum = (min, max) => {
    return Math.floor(Math.random() * (max+1))
}

let guess = (x) => {
  
    let input = +prompt(`Indovina il numero compreso tra 0 e 1000 `)
    while(input != x){
        if(input>x){
            +prompt("Ritenta... il numero è minore ")
        }
        else{
            +prompt("Ritenta... il numero è maggiore ")
        }
    }
    alert(`Hai indovinato il numero ${input}` )
}
    