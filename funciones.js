function perfecto (num) {
let num = 0
for (let i = 1; i < num; i++){
  if (num%i==0) {
    suma=suma+i
  }
}
if (suma==num){
    return (+num,'es perfecto')
}
else {
    return +num, 'no es perfecto'
}
}
console.log(perfecto(25));

/*escriba una funcion que dados los 3 lados de un triangulo diga de que tipo es*/

function triangulo (a, b, c){
if (a!=b && b!=c) {
    conosle.log('escaleno');
} else if (a==b && b==c){
    console.log('equilatero');
} else {
    conosle.log('isoseles');
}
}
triangulo(3, 5, 3);

/*pitagoras*/
function pitagoras (c1,c2){
    return Math.sqrt(Math.pow(c1,2)+Math.pow(c2,2));
  }
  
  console.log(pitagoras(6,10));