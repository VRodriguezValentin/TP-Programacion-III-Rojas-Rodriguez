class VistaPrincipal{
    navbar;
    panelIzquierdo;
    panelDerecho;
    constructor(){
        this.navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carrito: this.$("carritoNav")
        }

        this.panelIzquierdo = {
            imgCelular: this.$("imgCelular"),
            imgAccesorio: this.$("imgAccesorio")
        }
    }
    $(id){
        return document.getElementById(id);
    }
}

export { VistaPrincipal };