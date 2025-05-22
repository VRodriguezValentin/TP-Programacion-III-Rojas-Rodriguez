class ControlLoginAdmin{
    Modelo;
    VistaLoginAdmin;
    constructor(a_vista, a_modelo){
        this.Modelo = a_modelo;
        this.VistaLoginAdmin = a_vista;
        
        this.VistaLoginAdmin.loginAdmin.btnCreate.addEventListener("click", (e) => {
            e.preventDefault();
            alert("gello");
        })
    }

    inputNewPassword () {
        
    }
}

export { ControlLoginAdmin };