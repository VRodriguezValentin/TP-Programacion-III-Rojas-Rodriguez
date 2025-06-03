import { Producto } from "./producto.js";

class Celular extends Producto {
    modelo;
    color;
    almacenamiento; // en GB
    ram; // en GB

    constructor(id, marca, precio, imagen, activo, modelo, color, almacenamiento, ram) {
        super(id, marca, precio, imagen, activo);
        this.modelo = modelo;
        this.color = color;
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }
}

export { Celular };