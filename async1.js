var contador = 0;
function tiempo (valor) {
    return new promise (resolve =>{
        setTimeout(() => {
            contador ++;
            resolve ('x valor' + valor, 'contar' + contador)
        }, timeout);
    })
}

async function call (valor) {
    console.log('ready' + valor, 'contar' + contador )
    const res = await outputTime (valor)
    console.log(res) 
}

for (let x = 1; x < 4; x++){
    call(x)
}