"use strict"

let a
let b
let c
let sol1
let sol2

do{
    a = prompt("inserisci il termine di secondo grado")
} while (a === 0)
b = prompt("inserisci il termine b")
c = prompt("inserisci il termine c")

let delta = Math.pow(b, 2)-4*a*c
alert("Il delta è: "+delta)
if (delta>=0){
    sol1 = (-b+Math.sqrt(delta))/(2*a)
    sol2 = (-b-Math.sqrt(delta))/(2*a)
    alert("soluzione1 = "+sol1)
    alert("soluzione2 = "+sol2)
}
else{
    alert("soluzioni complesse")
}
