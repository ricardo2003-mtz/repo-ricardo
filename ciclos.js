/*1. Determinar los divisores de un número introducido por
teclado */
var cdivisor=0
var num= Math.round(Math.random() * 80)
console.log(num)
for (let i= 0; i<num; i++) {
    if (num % i == 0) { 
        console.log (+num ,'Es divisible para: ' ,+i)
        var cdivisor= cdivisor+1
        //console.log (+num,'Es divisible para: ')
    }   
   
}
console.log ('los numeros divisibles para ' , +num , ' son: ' , +cdivisor)

/*Determinar si un numero es o no es primo*/
/*Un numero primo es el cual solo tiene dos divisores unicamente*/
var cprimos=0
var num= Math.round(Math.random() * 80)
console.log(num) 
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
 

 /*3. Determinar si un número es o no es perfecto. Un numero es
 perfecto si la suma de sus divisores sin incluir el propio
 número es igual a este*/

 var divisor=1
 var suma=0
var num= Math.round(Math.random() * 8)
console.log(num) 
while (divisor < num) {
    if (num %divisor==0) {
        var suma=suma+divisor
    }
     divisor=divisor+1 
}

if (suma!=num) {
    console.log (+num,'NO es un numero perfecto')

}else{
    console.log (+num,'Es un numero perfecto')
}




