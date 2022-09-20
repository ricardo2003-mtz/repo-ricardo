texto1='SLddma'
contar = 0 
mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
const mayus = new Promise ((resolve, reject)=>{
        for (var i = 0; i < mayusculas.length; i++){
            for (var x = 0; x < texto1.length; x++) {
                if (texto1[x]==mayusculas[i]){
                    contar+=1;
                 
                }
            
            }
        }
        setTimeout(() => {
            resolve(contar)
        
    },2000)
    })

mayus
.then(()=>{
    console.log(texto1.toUpperCase());
    return(texto1)
})

mayus
.then(()=>{
    console.log(texto1.toLowerCase());
})
mayus
    .then((contar)=>{
        console.log('El numero de mayusculas es de:'+ contar);
    })

    contar2 = 0
    minusculas = 'abcdefghijklmnñopqrstuvwxyz'
    const minus = new Promise ((resolve, reject)=>{
            for (var i = 0; i < minusculas.length; i++){
                for (var x = 0; x < texto1.length; x++) {
                    if (texto1[x]==minusculas[i]){
                        contar2+=1;
                     
                    }
                
                }
            }
            setTimeout(() => {
                resolve(contar2)
            
        },2000)
        })

    minus
        .then((contar2)=>{
            console.log('El numero de minusculas es de:'+ contar2);
        })
    /*********************************/
async function Minus (texto){
    var contar = 0
    var minusculas = 'abcdefghijklmnñopqrstuv'
    try{
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
            console.log('La cantidad de letras minusculas es:','',contar)
        },3000);
    })
}
catch (error){
    console.log('culaquier cosita',error)   
}
}
Minus ('CaRRo')
async function Mayus (texto){
    var contar2 = 0
    var mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    try{
    setTimeout(()=>{
        for (var i = 0; i < mayusculas.length; i++){
            for (var x = 0; x < texto.length; x++) {
                if (texto[x]==mayusculas[i]){
                    contar2+=1;
                    
                }
                
            }
        }
        console.log('Texto En mayusculas:',''+texto.toUpperCase());
        console.log('La cantidad de letras mayusculas es:','',contar2)
    },2000)
}
catch(error){
console.log('culaquier cosa',error)
}
     }

Mayus ('CaRRo')


/******************************************************************/

function saySomething (x){
    return new Promise (function p (resolve){
        setTimeout((
            resolve('something'+ x)));
        },2000);
    };


async function talk (x){
    const words = await saySomething(x);
    console.log (words);
}

talk (2)
talk (4)
talk (8)

/*funcion para llenar vector*/

function llenarv(vec) {
    return new Promise((resolve, reject) => {
        if (typeof(vec)=='object') {
            for (let i = 0; i < 11; i++) {
                vec[i]=Math.round(Math.random()*100)
                
            }
            resolve (vec)
        } else {
            reject()
        }
        
    })
}
vector = []
llenarv(vector).then((result) => {
    console.log(result)
}).catch(function(error){
    console.log('error')
});


llenarvector(5).then((result) => {
    console.log(result)
}).catch(function(){
    console.log('error')
});

function sumarv (vec) {
    return new Promise((resolve, reject) => {
        total = 0
        if (typeof(vec)=='object') {
            for (let i = 0; i < 10; i++) {
                total+=vec[i]
                
            }
            resolve (total)
        } else {
            reject()
        }
    })
}

sumarv(vector).then((result) => {
    console.log(result)
}).catch(function(){
    console.log('error')
});

sumarvector('jajaj').then((result) => {
    console.log(result)
}).catch(function(){
    console.log('error')
});

function promediov (vec) {
    
    return new Promise((resolve, reject) => {
        total = 0
        if (typeof(vec)=='object') {
            for (let i = 0; i < 10; i++) {
                total+=vec[i]
                
            }
            resolve (total/vec.length)
        } else {
            reject()
        }
    })

}

promediov(vector).then((result) => {
    console.log(result)
}).catch(function(){
    console.log('error')
});

