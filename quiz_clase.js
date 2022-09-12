/*escriba una funcion que llene un array con n numerosn(n debe ser minimo 5 maximo 25)*/
let arreglo = []
for (let i = 0 ; i<20; i++) {
   arreglo [i]= (Math.round(Math.random()* 25-5)+5)
}
console.log(arreglo)
/*escriba una funcion que reciba el array lleno y retorne otro arreglo con la diferencia que hay entre el valor de cada elemento 
y la media del arreglo*/

function media (arreglo){
    suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i]
        
    }
    media = suma / arreglo.length
    return media
}


function diferencia(arreglo){
    diferencia=0
    for (let j = 0; j < arreglo.length; j++) {
     diferencia= arreglo [1] - arreglo [2]
    }
    diferencia= diferencia 
     return diferencia
}

console.log('la media del arreglo es:', ''+media(arreglo))
console.log('la diferencia de cada valor es:','',+diferencia(arreglo))

/*escriba una funcion que reciba el arreglo con las diferencias del punto anterior y diga de cada uno cuanto le falta o cuanto le sobra 
segun el caso con referencia a la media*/
