class Accesorio extends Producto {
    tipo; // ej: "Funda", "Auricular", "Cargador"
    compatibilidad; // ej: "iPhone 13", "Universal", etc.

    constructor(id, marca, precio, imagen, activo, tipo, compatibilidad) {
        super(id, marca, precio, imagen, activo);
        this.tipo = tipo;
        this.compatibilidad = compatibilidad;
    }
}

export { Accesorio };