class Envios {
    constructor(Direccion,Nombre_Cliente,Fecha_Entrega,Tipo_envio,Codigo_Compra){
    this._Direccion=Direccion;
    this._Nombre_Cliente=Nombre_Cliente;
    this._Fecha_Entrega=Fecha_Entrega;
    this._Tipo_Envio=Tipo_envio;
    this._Codigo_Compra=Compra.Codigo_Compra;
}
get Direccion(){
    return this.Direccion
}
set Direccion(Direccion){
    this.Direccion=Direccion
}

get Nombre_Cliente(){
    return this._
}
set Nombre(Nombre){
    this.Nombre=Nombre
}


get Codigo_carrito(){
    return this.Carrito.Codigo_carrito
}
set Codigo_carrito(Codigo_carrito){
    this.Codigo_carrito=Codigo_carrito
}

imprimir_todo(){
    console.log(this._Nombre)
    console.log(this._Codigo_producto)
    console.log(this._Codigo_carrito)
}
}

module.exports=Envios