class VistaTicket{
    navbar;
    ticket;
    finTicket;
    constructor(){}
        navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carrito: this.$("carritoNav")
        }

        ticket = {
            /* Se arma dinamico con los productos que traiga de la BD */
        }

        finTicket = {
            total:     this.$("totalTicket"),
            btnSalir:  this.$("btnSalir")
        }

    $(id){
        return document.getElementById(id);
    }
}

export { VistaTicket };