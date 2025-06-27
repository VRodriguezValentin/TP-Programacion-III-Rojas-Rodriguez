class VistaCarrito{
    navbar;
    carrito;
    modal;
    btnTema;
    constructor(){
        this.navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carritoSpan: this.$("carritoSpan")
        }

        this.carrito = {
            carritoVacio:     this.$("carrito-vacio"),
            productosCarrito: this.$("productos-carrito"),
            finCarrito:       this.$("fin-carrito"),
            total:            this.$("totalCarrito"),
            btnCancelar:      this.$("btnCancelar"),
            btnFinalizar:     this.$("btnFinalizar")
            }
        
        this.modal = {
            modalDiv: this.$("modalConfirmacion"),
            btnCancelarModal: this.$("btnCancelarModal"),
            btnConfirmarModal: this.$("btnConfirmarModal")
        }

        this.btnTema = this.$("btnTema");
    }

    $(id){
        return document.getElementById(id);
    }
}

export { VistaCarrito };