"use strict"



function delta(a,b,c){
    do{
        a = prompt("inserisci il termine di a secondo grado")
    } while (a === 0)
    b = prompt("inserisci il termine b")
    c = prompt("inserisci il termine c")
    let delta1 = Math.pow(b, 2)-4*a*c
    alert("Il delta è: "+delta1)  
    if (delta1>=0){
        soluzioni(a,b,delta1)
    }
    else{
        alert("soluzuzioni complesse")
    }
}

function soluzioni(a,b,delta){
    let x1 = (-b+Math.sqrt(delta))/(2*a)
    let x2 = (-b-Math.sqrt(delta))/(2*a)
    alert("soluzione1 = "+x1)
    alert("soluzione2 = "+x2)
    
}





