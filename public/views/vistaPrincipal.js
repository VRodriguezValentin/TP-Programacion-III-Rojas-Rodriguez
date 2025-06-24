class VistaPrincipal{
    navbar;
    panelIzquierdo;
    panelDerecho;
    btnTema;
    constructor(){
        this.navbar = {
            nav:     this.$("navbar"),
            logo:    this.$("logoNav"),
            titulo:  this.$("tituloNav"),
            carritoSpan: this.$("carritoSpan")
        }

        this.panelIzquierdo = {
            celulares: this.$("celulares"),
            accesorios: this.$("accesorios")
        }

        this.panelDerecho = {
            celulares: this.$("panel-derecho-celulares"),
            accesorios: this.$("panel-derecho-accesorios"),
            btnCelulares: this.$("btn-panel-derecho-celulares"),
            btnAccesorios: this.$("btn-panel-derecho-accesorios"),
            sigCelulares: this.$("siguientes-celulares"),
            antCelulares: this.$("anteriores-celulares"),
            sigAccesorios: this.$("siguientes-accesorios"),
            antAccesorios: this.$("anteriores-accesorios")
        }

        this.btnTema = this.$("btnTema");
    }
    $(id){
        return document.getElementById(id);
    }
}

export { VistaPrincipal };