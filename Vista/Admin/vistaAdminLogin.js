class VistaAdminLogin {
    loginAdmin;
    constructor(){}
        loginAdmin = {
            inputName: this.$("inputName"),
            inputPass: this.$("inputPassword"),
            btnLogin:  this.$("btnLogin")
        }

    $(id){
        return document.getElementById(id);
    }
}

export { VistaAdminLogin };