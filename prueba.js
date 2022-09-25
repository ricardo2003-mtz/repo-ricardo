// replicar las pruebas de la evaluacion

let arreglo = []
for (let i = 0 ; i<10; i++) {
   arreglo [i]= Math.round(Math.random()* 10)
}
console.log(arreglo)

function calcularModa (arreglo){
    moda =[0,0]
    for (let i = 0; i < arreglo.length; i++) {
       repeticion = 0
       for (let j = 0; j < arreglo.length; j++) {
        if (arreglo[j]==arreglo[i]) {
            repeticion++
        }
        
       }
       if (repeticion > moda[1]) {
        moda [0] = arreglo[1]
        moda[1] = repeticion  
    
        return moda
        
    }
    }

}

calcularModa(arreglo)
console.log(`El numero que mas se repite es ${moda[0]} esta rerpetido ${moda[1]} veces `)



