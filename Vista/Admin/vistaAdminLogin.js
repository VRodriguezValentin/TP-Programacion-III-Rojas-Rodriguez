class VistaAdminLogin {
    loginAdmin;
    constructor(){
        this.loginAdmin = {
            inputName:  this.$("inputName"),
            inputPass:  this.$("inputPassword"),
            newInput:   this.$("newInputContainer"),
            btnLogin:   this.$("btnLogin"),
            btnCreate:  this.$("btnCreate")
        }
    }

    $(id){
        return document.getElementById(id);
    }
}
export { VistaAdminLogin };