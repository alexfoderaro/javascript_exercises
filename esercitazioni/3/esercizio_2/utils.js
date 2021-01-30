"use strict"

let inserisciValori = (text, min, max) => {
    let x = prompt(text)
    while(x<min || x>max){
        x = prompt(text)
    }
    return x
}

let divisori = (k) => {

    let counter = 0
    for(let i=0; i<k; i++){
        if(i%2==0){
            counter+=1
        }
    }
    alert(`Il numero di divisori positivi è ${counter}`)
}