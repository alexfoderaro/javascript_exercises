"use strict"

function inserisci_intero(stringa, min, max){
    
    do{
        let range_value = +prompt("inserisci "+stringa+" "+min+" e "+max)
    } while(range_value <= min || range_value >=max)
}