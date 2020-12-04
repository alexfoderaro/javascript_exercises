"use strict"

let n
let k
let massimoboldi = 0
let sommanegativo = 0
let media = 0.0
let somma = 0
let lista = []
do {
    n = +prompt("Quanti valori vuoi")
}
while (n===0)

for (k = 0; k < n; k++){
    let jj = +prompt("dimmi il valore")
    lista.push(jj)
}

for(k =0; k<n; k++){
    if (lista[k]>massimoboldi){
        massimoboldi = lista[k]
    }
}
for(k =0; k<n; k++){
    if (lista[k]<0){
        sommanegativo+=lista[k]
    }
}
for(k =0; k<n; k++){
    somma += lista[k]
    media = somma/n
}
alert("il massimo e' "+massimoboldi)
alert("la media e' "+media)
alert("la somma dei negativi e' "+sommanegativo)

