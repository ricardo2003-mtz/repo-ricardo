var V =Math.round(Math.random()*100000)
var E =Math.round(Math.random()*6)
console.log(V)
switch (E) {
    case 1:
        V = V*0.50
        break;
    case 2:
        V = V*0.40
        break;
    case 3:
        V = V*0.30
        break;
    case 4:
        V = V*0.20
        break;
    case 5:
        V = V*0.10
        break;
    case 6:
        V = V*0.05
        break;}
console.log("su estrato es: "+E+" despues del descuento el valor total es de: "+V)