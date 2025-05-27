class VistaLogin{
    loginCliente;
    constructor(){}
        loginCliente = {
            inputNombre:  this.$("inputNombre"),
            btnContinuar: this.$("btnContinuar"),
            btnTema:      this.$("btnTema")
        }

    $(id){
        return document.getElementById(id);
    }
}

export { VistaLogin };