class VistaCarrito{
    navbar;
    productos;
    finCarrito;
    constructor(){}
        navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carrito: this.$("carritoNav")
        }

        productos = {
            /* Se arma dinamico con los productos que traiga de la BD */
        }

        finCarrito = {
            total:        this.$("totalCarrito"),
            btnCancelar:  this.$("btnCancelar"),
            btnFinalizar: this.$("btnFinalizar")
        }

    $(id){
        return document.getElementById(id);
    }
}

export { VistaCarrito };