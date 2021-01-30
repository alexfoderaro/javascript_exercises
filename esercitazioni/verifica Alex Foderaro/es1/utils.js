"use strict"

const eta_e = (etaMin,etaMax) => {
    let e = +prompt(`Inserisci un'età compresa tra ${etaMin} e ${etaMax}`)
    while(e<etaMin || e>etaMax) {
        e = +prompt(`Inserisci un'età compresa tra ${etaMin} e ${etaMax} 😡`)
    }
}
const eta_20 = (n, vmin, vmax) =>{
    let maggiorenneTot = 0
    for (let i=0;i<n;i++){
        let value2 = +prompt(`Inserisci un'età compresa tra ${vmin} e ${vmax}`)
        while(value2<vmin || value2>vmax) {
            value2 = +prompt(`Inserisci un'età compresa tra ${vmin} e ${vmax} 😡`)
        }
        if (value2>=18){
            maggiorenneTot+=1 //contatore maggiorenne
            console.log(`se hai ${value2} anni... sei maggiorenne`)
        }
    } iMaggiorenniSono = (maggiorenneTot/n)*100
    console.log(`La % dei maggiorenni è ${iMaggiorenniSono}`) //log della % dei maggiorenni

    
}

const req1 = (val1, val2) =>{
    if(val2===val1){console.log(`Il numero ${val2} è uguale a ${val1}`)}
    else if(val2>val1){console.log(`Il numero ${val2} è maggiore a ${val1}`)} else{console.log(`Il numero ${val2} è mionore a ${val1}`)}
    //funzione oer i 20 numeri
}

const isMultiplo = (x,y) =>{
    if((y%x)===0){console.log(`L'età ${y} è multipla di ${x}`)}
} //è multipo