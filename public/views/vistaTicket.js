class VistaTicket{
    navbar;
    ticket;
    btnTema;
    constructor(){
        this.navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carrito: this.$("carritoNav"),
            carritoSpan: this.$("carritoSpan")
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

        this.btnTema = this.$("btnTema");
    }
    $(id){
        return document.getElementById(id);
    }
}

export { VistaTicket };