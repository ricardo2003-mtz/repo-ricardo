class persona{
    constructor(nombre,documento){
        this._nombre=nombre;
        this._documento=documento;
    }
    set nombre (nombre){
        this._nombre=nombre
    }
    set documento(documento){
    this._documento=documento;
} 

    get nombre(){
        return this._nombre;
    }
    
    get nombre(){
        return this._nombre;
    }
}


class aprendiz extends persona{
    constructor(nombre, documento,ficha){
        super(nombre,documento);
        this._ficha=ficha;
    }
    set ficha(ficha){
        this._ficha=ficha;
    }
    get ficha(){
        return this._ficha=this._ficha;
    }
    imprimirtodo(){
        console.log('El nombre de la Persona es:',ob1._nombre);
        console.log('El documento de la Persona es',ob1._documento);
        console.log('El nombre del Aprendiz es:',ob2._nombre);
        console.log('El documento del Aprendiz es:',ob2._documento);
        console.log('La ficha del Aprendiz es:',ob2._ficha);
    }
}
let ob1=new persona('Maria Gomez',12312);
let ob2=new aprendiz('Mike Gonzales', 1231231, 'ADSI');
console.log(ob1)
console.log(ob2)
ob1._nombre='laura';
console.log(ob1.nombre);
console.log(ob1)
ob2._nombre='manuel';
console.log(ob2.ficha);
console.log(ob2)
ob2.imprimirtodo();

class Publicacion{
    constructor(Titulo,Precio){
    this._Titulo=Titulo;
    this._Precio=Precio;
    }

    set Titulo(Titulo){
        this._Titulo=Titulo
    }

    get Titulo(){
        return this._Titulo= this._Titulo
    }

    get Titulo(){
        return this._Titulo= this._Titulo
    }

}

class Libro extends Publicacion{
    constructor(Titulo,Precio,NumPaguinas){
        super(Titulo,Precio);
        this._NumPaguinas=NumPaguinas;
    }

    set NumPaguinas(NumPaguinas){
        this._NumPaguinas=NumPaguinas
    }

    get NumPaguinas(){
        return this._NumPaguinas=this._NumPaguinas
    }

    get NumPaguinas(){
        return this._NumPaguinas=this._NumPaguinas
    }
}

class CD extends Publicacion{
    constructor(Titulo,Precio,NumPaguinas,TiempoRepro){
    super(Titulo,Precio,NumPaguinas);
    this._TiempoRepro=TiempoRepro;
    }

    set TiempoRepro(TiempoRepro){
        this._TiempoRepro=TiempoRepro
    }

    get TiempoRepro(){
        return this._TiempoRepro=this._TiempoRepro
    }

    get TiempoRepro(){
        return this._TiempoRepro=this._TiempoRepro
    }

    TotalResultado(){
        console.log('El Titulo del libro es:',ob3._Titulo);
        console.log('El Precio del libro es: ',ob3._Precio);
        console.log('El Titulo del 2° libro es:',ob4._Titulo);
        console.log('El Precio del 2° libro es:',ob4._Precio);
        console.log('El Numero de paginas del 2° libro es:',ob4._NumPaguinas);
        console.log('El Titulo del 3° libro es: ',ob5._Titulo);
        console.log('El Precio del 3° libro es: ',ob5._Precio);
        console.log('El Numero de las paguinas del 3° libro es: ',ob5._NumPaguinas);
        console.log('El Tiempo de reproduccion del 3° libro es: ',ob5._TiempoRepro);
    }
}

let ob3=new Publicacion ('El hijo del diablo',100000);
let ob4=new Libro ('Con el demonio dentro',200000,100);
let ob5=new CD ('Funkint',150000,60,15000);
ob5.TotalResultado();

class autos {
    constructor(nserie, marca, año, precio) {
            this._nserie = nserie;
            this._marca = marca;
            this._año = año;
            this._precio = precio;
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        //Precio
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
        precio = this.precio
    }
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
    }
}

let car = new autos(3245, 'Renauld', '2004', 50000)



class autos_compactos extends autos {
    constructor(nserie, marca, año, precio, cantidad_de_pasajeros) {
            super(nserie, marca, año, precio)
            this._cantidad_de_pasajeros = cantidad_de_pasajeros
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        //MARCA
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        //AÑO
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        
    get cpa() {
        return this._cantidad_de_pasajeros = this._cantidad_de_pasajeros;
    }
    set cpa(cpa) {
            cpa = this._cantidad_de_pasajeros
        }
        
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._cantidad_de_pasajeros = this._cantidad_de_pasajeros)
    }
}
let vehiculo1 = new autos_compactos(14526, 'Cherolet', '2019', 60000000, 4)




class autos_lujo extends autos {
    constructor(nserie, marca, año, precio, cantidad_de_pasajeros) {
            super(nserie, marca, año, precio)
            this._cantidad_de_pasajeros = cantidad_de_pasajeros
        }
        //N SERIE
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        
    get cpa() {
        return this._cantidad_de_pasajeros = this._cantidad_de_pasajeros;
    }
    set cpa(cpa) {
            cpa = this._cantidad_de_pasajeros
        }
        
    completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._cantidad_de_pasajeros = this._cantidad_de_pasajeros)
    }
}

let vehicle1 = new autos_lujo(123456, 'LAamborjini', '2020', 100000000, 2)



class camionetas extends autos {
    constructor(nserie, marca, año, precio, capacidad_carga, cantidad_ejes, cantidad_rodadas) {
            super(nserie, marca, año, precio)
            this._capacidad_carga = capacidad_carga;
            this._cantidad_ejes = cantidad_ejes;
            this._cantidad_rodadas = cantidad_rodadas
        }
            get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
        
    get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        
    get cc() {
        return this._capacidad_carga = this._capacidad_carga;
    }
    set cc(cc) {
            cc = this._capacidad_carga
        }
            get ce() {
        return this._capacidad_ejes = this._capacidad_ejes;
    }
    set ce(ce) {
            ce = this._capacidad_ejes
        }
            get cr() {
        return this._cantidad_rodadas = this._cantidad_rodadas;
    }
    set cr(cr) {
            cr = this._cantidad_rodadas
        }
           completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._capacidad_carga = this._capacidad_carga)
        console.log(this._cantidad_ejes = this._cantidad_ejes)
        console.log(this._cantidad_rodadas = this._cantidad_rodadas)
    }
}

let camioneta1 = new camionetas(2563214, 'Toyota', '2022', 80000000, 1400, 'Cuatro', 1000)



class vagoneta extends autos {
    constructor(nserie, marca, año, precio, cantidad_de_pasajeros) {
            super(nserie, marca, año, precio)
            this._cantidad_de_pasajeros = cantidad_de_pasajeros
        }
        
    get nserie() {
        return this._nserie = this._nserie;
    }
    set nserie(noserie) {
            nserie = this._naserie
        }
        
    get brand() {
        return this._marca = this._marca;
    }
    set brand(brand) {
            brand = this._marca
        }
        
    get year() {
        return this._año = this._año;
    }
    set year(year) {
            year = this._año
        }
            get price() {
        return this._precio = this._precio;
    }
    set price(precio) {
            precio = this.precio
        }
        
    get cpa() {
        return this._cantidad_de_pasajeros = this._cantidad_de_pasajeros;
    }
    set cpa(cpa) {
            cpa = this._cantidad_de_pasajeros
        }
            completo() {
        console.log(this._nserie = this._nserie)
        console.log(this._marca = this._marca)
        console.log(this._año = this._año)
        console.log(this._precio = this._precio)
        console.log(this._cantidad_de_pasajeros = this._cantidad_de_pasajeros)
    }
}

let vagone = new vagoneta(152365, 'Volkswagen', '1995', 20000000, 8)
<<<<<<< HEAD


=======
>>>>>>> c27570fe30f8a4fe039ddbcf315cdf41bbfd88c8
