export class Zapato {
    /*
    public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;
    constructor(nombre: string = 'Tenis', marca: string = 'Nike', color: string = 'Azul', precio: number = 8.50, stock: boolean = true) {
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }*/
    constructor(
        public nombre: string = 'Tenis',
        public marca: string = 'Nike',
        public color: string = 'Azul',
        public precio: number = 75.50,
        public stock: boolean = true
    ) {

    }
}