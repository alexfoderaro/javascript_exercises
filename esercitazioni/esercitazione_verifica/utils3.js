
let askVoto = (numero) => {
    //filling array with 10 0

    let array_n = []
    for(let i=0; i<10; i++){
        array_n.push(0)
    }

    numero = +prompt("Inserisci il numero ")
    do {
        array_n[numero-1]+=1
        numero = +prompt("Inserisci il numero ")
    }
    while(numero!=0)

    let divisori = []
    let somma = 0

    for (let k=1; k<array_n.length; k++) {
        if (array_n[k]%k===0){divisori.push(array_n[k])}
        for (let f=1; f<divisori.length; f++) {
            somma+=divisori[f]
            if(somma===numero){alert(`Il numero ${numero} è perfetto`)}
        }
    
    }
    
}