class Producto {
    id;
    marca;
    precio;
    imagen; // URL
    activo; // booleano: true/false

    constructor(id, marca, precio, imagen, activo) {
        this.id = id;
        this.marca = marca;
        this.precio = precio;
        this.imagen = imagen;
        this.activo = activo;
    }
}

class Celular extends Producto {
    modelo;
    color;
    almacenamiento; // en GB
    ram; // en GB

    constructor(id, marca, precio, imagen, activo, marca, modelo, color, almacenamiento, ram) {
        super(id, marca, precio, imagen, activo);
        this.modelo = modelo;
        this.color = color;
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }
}

class Accesorio extends Producto {
    tipo; // ej: "Funda", "Auricular", "Cargador"
    compatibilidad; // ej: "iPhone 13", "Universal", etc.

    constructor(id, marca, precio, imagen, activo, tipo, compatibilidad) {
        super(id, marca, precio, imagen, activo);
        this.tipo = tipo;
        this.compatibilidad = compatibilidad;
    }
}

class Modelo{
    Productos; // Array de productos
    constructor(){}
}

export { Producto, Celular, Accesorio, Modelo };