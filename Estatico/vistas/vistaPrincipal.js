class VistaPrincipal{
    navbar;
    panelIzquierdo;
    panelDerecho;
    constructor(){}
        navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carrito: this.$("carritoNav")
        }

        panelIzquierdo = {
            imgCelular: this.$("imgCelular"),
            imgAccesorio: this.$("imgAccesorio")
        }

        panelDerecho = {
            /* Se arma dinamico con los productos que traiga de la BD */
        }

    $(id){
        return document.getElementById(id);
    }
}

export { VistaPrincipal };