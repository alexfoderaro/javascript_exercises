"use strict"


let askVoto = (grade) => {
    //filling array with 10 0

    let voti = []
    for(let i=0; i<10; i++){
        voti.push(0)
    }

    grade = +prompt("Inserisci il voto ")
    do {
        voti[grade-1]+=1
        grade = +prompt("Inserisci il voto ")
    }
    while(grade!=0)

    let moda = 0
    for (let i=0; i<10; i++){
        if(voti[i]>moda){
            moda = i+1
        }
    }
    alert(`Moda = ${moda}`)
    return moda

}