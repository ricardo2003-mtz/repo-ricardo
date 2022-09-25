//determinar los divisores de un numero 
function divisor (num){
    for (let i= 0; i<num; i++) {
        if (num % i == 0) { 
            console.log (+num ,'Es divisible para: ' ,+i)
    }
}
}
divisor (78)
//----------------------------------------------------------------------------------
function mostrar_nota (nota){
    if (nota==10) {
        console.log('su nota es:'+nota, 'excelente')
    }
    else if (nota >= 7) {
        console.log('su nota es:'+nota, 'buena')
    }
    else console.log('su nota es insuficiente')
}
mostrar_nota(6)

//----------------------------------------------------------------------------------------

function medio (a, b, c){
    if (a<c && c>a) {
        console.log(+b,'es el de la mitad')
    }
}
medio (4,10,300)

//----------------------------------------------------------------------------------------
function primos (num){
    var cprimos=0 
    for (let i= 0; i<num; i++) {
        if (num % i == 0) { 
            var cprimos= cprimos+1
            //console.log (+num,'Es divisible para: ')
        }  
    }
     if (cprimos>2){
        console.log('El numero',+num, 'NO es primo')
     }else {
        console.log('El numero',+num, 'Es primo')
    
     }  
         
}

primos (9)
