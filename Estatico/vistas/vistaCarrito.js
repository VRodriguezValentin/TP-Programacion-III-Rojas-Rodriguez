class VistaCarrito{
    navbar;
    productos;
    finCarrito;
    constructor(){
        this.navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carrito: this.$("carritoNav")
        }

        this.productos = {
            /* Se arma dinamico con los productos que traiga de la BD */
        }

        this.finCarrito = {
            total:        this.$("totalCarrito"),
            btnCancelar:  this.$("btnCancelar"),
            btnFinalizar: this.$("btnFinalizar")
        }
    }
    $(id){
        return document.getElementById(id);
    }
}

export { VistaCarrito };