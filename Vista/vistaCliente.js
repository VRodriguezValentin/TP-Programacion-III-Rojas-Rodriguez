class VistaLogin{
    login;
    constructor(){}
        contenedor = {
            inputNombre:  this.$("navbar"),
            btnContinuar: this.$("btnContinuar")
        }

    $(id){
        return document.getElementById(id);
    }
}

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

class VistaCarrito{
    navbar;
    productos;
    finCarrito;
    constructor(){}
        navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carrito: this.$("carritoNav")
        }

        productos = {
            /* Se arma dinamico con los productos que traiga de la BD */
        }

        finCarrito = {
            total:        this.$("totalCarrito"),
            btnCancelar:  this.$("btnCancelar"),
            btnFinalizar: this.$("btnFinalizar")
        }

    $(id){
        return document.getElementById(id);
    }
}

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
            total:        this.$("totalTicket"),
            btnSalir:  this.$("btnSalir")
        }

    $(id){
        return document.getElementById(id);
    }
}

export { VistaLogin, VistaPrincipal, VistaCarrito, VistaTicket };
