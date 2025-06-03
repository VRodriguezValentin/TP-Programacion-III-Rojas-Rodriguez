class VistaTicket{
    navbar;
    ticket;
    finTicket;
    constructor(){
        this.navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carrito: this.$("carritoNav")
        }

        this.ticket = {
            /* Se arma dinamico con los productos que traiga de la BD */
        }

        this.finTicket = {
            total:     this.$("totalTicket"),
            btnSalir:  this.$("btnSalir")
        }
    }
    $(id){
        return document.getElementById(id);
    }
}

export { VistaTicket };