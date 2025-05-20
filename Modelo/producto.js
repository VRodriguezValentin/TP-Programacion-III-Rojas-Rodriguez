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

export { Producto };
