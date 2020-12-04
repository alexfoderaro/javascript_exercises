"use strict"

let inserisciValori = (text, min, max) => {
    let x = +prompt(text)
    while(x<min || x>max){
        x = +prompt(text)
    }
    return x
}

let divisori = (k) => {

    let counter = 0
    for(let i=1; i<=k; i++){
        if(k%i===0){
            counter+=1
        }
    }
    alert(`Il numero di divisori positivi è ${counter}`)
    return counter
}

let isPrimo = (n) =>{
    if(divisori(n)<=2){
        alert(`Il numero ${n} è primo`)
    }
    else{
        alert("Il numero non è primo")
    }
}