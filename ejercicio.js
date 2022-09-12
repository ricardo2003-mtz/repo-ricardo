//uso de variables
var Nombre = 'Ricardo';
console.log(Nombre);
console.log(typeof(Nombre));

var edad = 34;
console.log(edad);
console.log(typeof(edad));

edad = 'seis'
console.log(edad)
console.log(typeof(edad))


var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestodetrabajo;
console.log(puestodetrabajo);

puestodetrabajo = null;
console.log(puestodetrabajo);

/************* 
 * operadores matematicos +, -, * ,/
 */
var edadRichi, edadMaria, diferenciaEdad;
var sumaEdades, yearRichi, yearMaria, yearActul;

edadRichi = 18;
edadMaria = 28;
yearActul = 2022;

diferenciaEdad = edadMaria - edadRichi;
sumaEdades = edadRichi + edadMaria;

yearRichi = yearActul - edadRichi;
yearMaria = yearActul - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('año en que nacio Richi', yearRichi);
console.log('año en que naio maria', yearMaria);

/*Operadores logicos,unarios de asignacion
 */
//Logicos <> <= >= ==

var edadRichi, edadJohan;
edadRichi = 18;
edadJohan = 17;

var MayorRichi = edadRichi > edadJohan;
console.log(MayorRichi);

//Unarios,++Incremento, --Decremento

edadRichi++;
console.log(edadRichi);

//Asignacion, +=, -=, *=, /=, %=
var a = 12;
var b = 5;

var c = a % 5;
console.logc(c);