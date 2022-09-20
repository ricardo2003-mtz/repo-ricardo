function base (){
    return new Promise ((resolve, reject)=>{
        resolve();
        setTimeout(() => {
            console.log('linea de codigo dentro de la funcion promesa')
        }, 500);
    })
}

base ()
    .then(()=>{
        console.log('en el .then');
    })

    .then(auxiliar)

    function auxiliar(){
        console.log('En el auxiliar')
    }


    function base (){
        return new Promise ((resolve, reject)=>{
            if(true){
                resolve();
                setTimeout(() => {
                    console.log('linea de codigo dentro de la funcion promesa')
                }, 500);
    }else{
        reject()
    }
});
    }
    
    base ()
        .then(()=>{
            console.log('en el .then');
            return 'then1'
        })
        .then((dato)=>{
            console.log('tiene dos datos',dato)
        })
    
        .then(auxiliar)
        .catch(error=>console.log('.........',error))
        function auxiliar(){
            console.log('En el auxiliar')
        }