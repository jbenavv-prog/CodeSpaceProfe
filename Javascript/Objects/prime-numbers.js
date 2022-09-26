function primos(x){
    let aux = 0;
    for (let i= 1;i<x +1;i++) {
        if (x % i == 0){
            aux++;
        }
    }
    if(aux == 2){
        document.write('es primo');
    }else{
        document.write('es compuesto');
    }        
    
}
primos(183323)
