var menu = Math.trunc(Math.random() * (7 - 1) + 1);
var array = ['blue','black','yellow','green']
console.log(`opcion ${menu}`)
/*
while (menu != 6) {
    if (menu == 1) {
        console.log(`opcion 1`)
        array.push('cyan')
        console.log(array)
        

    } else if (menu == 2){
        console.log(`opcion 2`)
        array.pop()
        console.log(array)
        

    } else if (menu == 3){
        console.log(`opcion 3`)
        array.sort()
        console.log(array)
        

    } else if (menu == 4){
        console.log(`opcion 4`)
        array[0] = 'pink'
        array.splice(4,0,'orange','gray')
        console.log(array)
        

    } else if (menu == 5){
        console.log(`opcion 5`)
        buscar = array.indexOf('black')
        console.log(buscar)
        
    }

    menu = Math.trunc(Math.random() * (7 - 1) + 1);
}
console.log(`opcion 6`)
console.log('El programa a terminado')*/





/*determinar los divisores de un numero 
function divisor (num){
    for (let i= 0; i<num; i++) {
        if (num % i == 0) { 
            console.log (+num ,'Es divisible para: ' ,+i)
    }
}
}
divisor (78)

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



function medio (a, b, c){
    if (a<c && c>a) {
        console.log(+b,'es el de la mitad')
    }
}
medio (4,10,300)


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

primos (9)*/



/*funciones flecha

const saludar =()=>{
  return 'hola soacha'
}
console.log(saludar());

const saludar2 =()=> 'hola soacha'
console.log(saludar2())

const saludar3 =nombre=> `hola ${nombre}bienvenido a soacha`
console.log(saludar3('ricardo'))*/

/*funcion anonima

const miFuncion=(c1,c2)=>Maht.sqrt(Math.pow(c1,2)+Math.pow(c2,2)
console.log(miFuncion(7,9))*/


/*const mostrar_nota=(num)=> {
    if (nota==10) {
        console.log('su nota es:'+nota, 'excelente')
    }
    else if (nota >= 7) {
        console.log('su nota es:'+nota, 'buena')
    }
    else console.log('su nota es insuficiente')
}
mostrar_nota(10)*/
/*
function perfecto(num){
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
   
}

console.log(perfecto(5))*/
