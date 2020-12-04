"use strict"


let age

do{
    age = prompt("Quanti hanni hai? ")
}while (age<0 || age >100)

if (age>=18){
    alert("bella bro sei maggiorenne")
}
else {
    alert("Enniente non puoi bere la birra")
}