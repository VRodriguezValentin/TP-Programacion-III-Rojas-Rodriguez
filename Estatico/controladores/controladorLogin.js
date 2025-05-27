class ControlLogin{
    Modelo;
    VistaLogin;
    constructor(p_vista, p_modelo){
        this.Modelo = p_modelo;
        this.VistaLogin = p_vista;
        this.registrarControlador();
    }

    registrarControlador(){
        this.VistaLogin.loginCliente.btnContinuar.addEventListener("click", (e) => {
            /* Valida que el nombre ingresado no sea cualquier pavada */
            window.location.href='./index.html';
        });

        this.VistaLogin.loginCliente.btnTema.addEventListener("click", (e) => {
        if (document.body.classList.contains("bright")) {
            document.body.classList.remove("bright");
        } else {
            document.body.classList.add("bright");
        }
        console.log("Cambio de tema");
});
    }

}

export { ControlLogin };