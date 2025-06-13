class VistaPrincipal{
    navbar;
    panelIzquierdo;
    btnTema;
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

        this.btnTema = this.$("btnTema");
    }
    $(id){
        return document.getElementById(id);
    }
}

export { VistaPrincipal };