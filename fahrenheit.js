var celcius = Math.floor(Math.random()*100);
console.log(celcius);

function convertir_celcius_fahrenheit (celcius) {
    let resultado = celcius * 9 / 5.0 + 32;

    return resultado;
}

let resultado = convertir_celcius_fahrenheit(celcius);
console.log ('°C'+celcius, '='+resultado,'°F')

var a = Math.floor(Math.random()*50);
console.log('el valor de a es:'+a);
var b = Math.floor(Math.random()*50);
console.log('el valor de b es:'+b);
var c = Math.floor(Math.random()*50);
console.log('el valor de c es:'+c);

function x1(a,b,c) {
return (((-1)*b)-(Math.sqrt(Math.pow (b,2))-(4*a*c)))/(2*a);
}
//let resultado = x1(a,b,c);
//console.log('La solucion es:'+resultado);