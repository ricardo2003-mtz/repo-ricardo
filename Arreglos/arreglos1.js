var arreglo_1, arreglo_2, arreglo_3

areglo_1=[]
areglo_2=[]
areglo_3=[]


for (let i = 0; i < 20; i++) {
    arreglo_1[i]=Math.round(Math.random()(5-5)*20)
    arreglo_2[i]=Math.round(Math.random()(5-5)*20)
    arreglo_3[i]=Math.round(Math.random()(5-5)*20)
   
}
console.log(arreglo_1)
console.log(arreglo_2)
console.log(arreglo_3)

let arregloprueba = [];
let arregloprueba_1 = [];
let arregloprueba_2 = [];
var aleatorio_1=Math.round(Math.random()*20);
var aleatorio_2=Math.round(Math.random()*20);
var aleatorio_3=Math.round(Math.random()*20);
for (let i = 0; i < aleatorio_1; i++) {
   arregloprueba[i]=Math.floor(Math.random(5)*(21))
}
for (let j = 0; j < aleatorio_2; j++) {
    arregloprueba_1[j]=Math.floor(Math.random(5)*(21))
 }
 for (let a = 0; a < aleatorio_3; a++) {
    arregloprueba_2[a]=Math.floor(Math.random(5)*(21))
 }

console.log('ARRAY_1',arregloprueba)
console.log('ARRAY_2',arregloprueba_1)
console.log('ARRAY_3',arregloprueba_2)


var mayor_1 = 0
for (let b = 0; b < arregloprueba.length; b++) {
    if (mayor_1<arregloprueba[b]) {
        mayor_1 = arregloprueba[b]
    }
    
}
console.log( 'arrglo1 es: ', mayor_1)


var mayor_2 = 0
for (let c = 0; c < arregloprueba_1.length; c++) {
    if (mayor_2<arregloprueba_1[c]) {
        mayor_2 = arregloprueba_1[c]
    }
    
}
console.log('arreglo2 es: ', mayor_2)



//Array 3
var mayor_3 = 0
for (let d = 0; d < arregloprueba_2.length; d++) {
    if (mayor_3<arregloprueba_2[d]) {
        mayor_3 = arregloprueba_2[d]
    }
    
}
console.log('arreglo3 es: ', mayor_3)



var sumap, sumai
sumap=1
sumai=1

for (let e = 0; e < arregloprueba.length; e++) {
    if(arregloprueba%2==0){
        sumap=sumap+1

    }else{
        sumai=sumai+1
    }
    
}
console.log('La cantidad de numeros pares son: ', sumap)
console.log('La cantidad de numeros impares son: ', sumai)