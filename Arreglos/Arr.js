arreglo = []
for (let i = 0; i <6; i++) {
    
    arreglo[i] =Math.floor(Math.random() * 20) 
}


let calcular_moda =(array) =>{
    moda = [0,0]
    for (let i = 0; i < array.length; i++) {
        repeticiones = 0
        
        for (let j = 0; j < array.length; j++) {
            if (array[i]==array[j]) {
                repeticiones++;
            } 
        }
        if (repeticiones > moda[1]) {
            moda[0]=array[1]
            moda[1]=repeticiones
        }
    }
    return moda
    }
    
    moda=calcular_moda(arreglo)
    console.log(`El numero que mas se repite es ${moda[0]} esta rerpetido ${moda[1]} veces `)

let  media =(arreglo) => {
    suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i]
        
    }
    media = suma / arreglo.length
    return media
}
console.log(media(arreglo))
let desviacion_estandar =(arreglo) => {
    sumatoria = 0 
    for (let e = 0; e < arreglo.length; e++) {
        sumatoria = sumatoria +(Math.pow(arreglo[e],2))
    }

    desviacion = Math.sqrt((sumatoria / arreglo.length)-Math.pow(media(arreglo),2))
    return desviacion
}

console.log(arreglo)

let mediana = (arreglo) => {

    arregloordenado= arreglo
    for (let i = 0; i < arregloordenado.length-1; i++) {
        for (let e = 0; e < arregloordenado.length-1-(i); e++) {
            momentaneo = arregloordenado[e]
            if (arregloordenado[e]>arregloordenado[e+1]) {
                arregloordenado[e]=arregloordenado[e+1]
                arregloordenado[e+1]=momentaneo
            }
        }
    }
    console.log(arregloordenado)
    if (arregloordenado.length%2==0) {
        mediana=(arregloordenado[(Math.floor(arregloordenado.length/2))-1]+arregloordenado[(Math.floor(arregloordenado.length/2))])/2
    } else {
        mediana=(arregloordenado[Math.floor(arregloordenado.length/2)])
    }
    return mediana
}

console.log(mediana (arreglo))