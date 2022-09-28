
let arreglo = []
for (let i = 0 ; i<20; i++) {
   arreglo [i]= (Math.round(Math.random()* 25-5)+5)
}
console.log(arreglo)


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

