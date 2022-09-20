class Carrito {
    constructor(Codigo_producto,Nombre_producto,Precio,Categoria,Cantidad_producto,Codigo_carrito){
        this._Codigo_producto=Codigo_producto;
        this._Nombre_producto=Nombre_producto;
        this._Precio=Precio;
        this._Categoria=Categoria;
        this._Cantidad=Cantidad_producto;
        this._Codigo_carrito=Codigo_carrito;
    }

    get Codigo_producto(){
        return this._Codigo_producto
    }
    get Nombre_producto(){
        return this._Nombre_producto
    }
    get Precio(){
        return this._Precio
    }
    get Categoria(){
        return this._Categoria
    }
    get Cantidad_producto(){
        return this.Cantidad_producto
    }
    get Codigo_carrito(){
        return this.#Codigo_carrito
    }
    set Codigo_producto(Codigo_producto){
        this.Codigo_producto=Codigo_producto
    }
    set Nombre_producto(Nombre_producto){
        this.Nombre_producto=Nombre_producto
    }
    set Precio(Precio){
        this._Precio=Precio
    }
    set Categoria(Categoria){
        this._Categoria=Categoria
    }
    set Cantidad_producto(Cantidad_producto){
        this.Cantidad_producto=Cantidad_producto
    }
    set Codigo_carrito(Codigo_carrito){
        this.#Codigo_carrito=Codigo_carrito
    }
}
module.exports=Carrito