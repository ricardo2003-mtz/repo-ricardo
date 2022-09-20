function Mayus (texto){
    var contar = 0
    var mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    setTimeout(()=>{
        for (var i = 0; i < mayusculas.length; i++){
            for (var x = 0; x < texto.length; x++) {
                if (texto[x]==mayusculas[i]){
                    contar+=1;
                    
                }
                
            }
        }
        console.log('Texto normal:',''+texto)
        console.log('Texto En mayusculas:',''+texto.toUpperCase());
    
        setTimeout(()=>{
            console.log('El numero de mayusculas es de:'+ contar)
        },3000)
    }, 2000);
};
function Minus (texto){
    var contar = 0
    var minusculas = 'abcdefghijklmnñopqrstuv'
    setTimeout(()=>{
        for (var i = 0; i < minusculas.length; i++){
            for (var x = 0; x < texto.length; x++) {
                if (texto[x]==minusculas[i]){
                    contar+=1;
                }
                
            }
        }
        console.log('Texto normal:',' '+texto)
        console.log('Texto en minusculas:',' '+texto.toLowerCase());
        setTimeout(()=>{
            console.log('El numero de minusculas es de:'+ contar)
        },3000)
    }, 2000);
};
function general (cb1,cb2,texto){
    cb1(texto)
    cb2(texto)
};
general(Minus,Mayus,'Hola Me llamo Ricardo y Tengo 18')