class VistaLogin{
    login;
    constructor(){}
        contenedor = {
            inputNombre:  this.$("inputNombre"),
            btnContinuar: this.$("btnContinuar")
        }

    $(id){
        return document.getElementById(id);
    }
}

export { VistaLogin };
