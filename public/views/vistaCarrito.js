class VistaCarrito{
    navbar;
    productos;
    carrito;
    constructor(){
        this.navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carrito: this.$("carritoNav")
        }

        this.carrito = {
            carritoVacio: this.$("carrito-vacio"),
            finCarrito: {
            total:        this.$("totalCarrito"),
            btnCancelar:  this.$("btnCancelar"),
            btnFinalizar: this.$("btnFinalizar")
            }
        }
    }
    $(id){
        return document.getElementById(id);
    }
}

export { VistaCarrito };