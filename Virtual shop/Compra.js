
class Compra {
    constructor(Nombre,Codigo_carrito, Codigo_compra){
    this._Nombre=Nombre;
    this.Codigo_carrito=Carrito.Codigo_carrito
    this.Codigo_compra=Codigo_compra
}
get Codigo_carrito(){
    return this.#Codigo_carrito
}
set Codigo_producto(Codigo_producto){
    this.Codigo_producto=Codigo_producto
}

get Nombre(){
    return this._Nombre
}
set Nombre(Nombre){
    this.Nombre=Nombre
}

imprimir_todo(){
    console.log(this._Nombre)
    console.log(this._Codigo_carrito)
}
}

module.exports=Compra




