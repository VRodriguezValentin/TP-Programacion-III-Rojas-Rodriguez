class VistaTicket{
    navbar;
    ticket;
    constructor(){
        this.navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carrito: this.$("carritoNav")
        }

        this.ticket = {
            cabeceraTicket: this.$("cabeceraTicket"),
            nombreUsuario : this.$("nombreUsuario"),
            fechaOperacion: this.$("fechaOperacion"),
            detalleTicket:  this.$("detalleTicket"),
            finTicket:      this.$("finTicket"),
            total:          this.$("totalTicket"),
            btnPdf:         this.$("btnPdf"),
            btnSalir:       this.$("btnSalir")
        }

    }
    $(id){
        return document.getElementById(id);
    }
}

export { VistaTicket };