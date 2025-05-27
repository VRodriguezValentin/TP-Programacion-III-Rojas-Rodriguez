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

        this.panelDerecho = {
            /* Se arma dinamico con los productos que traiga de la BD */
        }
    }
    $(id){
        return document.getElementById(id);
    }
}

export { VistaPrincipal };