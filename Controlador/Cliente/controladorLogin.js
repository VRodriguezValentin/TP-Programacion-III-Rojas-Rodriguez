class ControlLogin{
    Modelo;
    VistaLogin;
    constructor(p_vista, p_modelo){
        this.Modelo = p_modelo;
        this.VistaLogin = p_vista;
        this.registrarControlador();
    }

    registrarControlador(){
        this.VistaLogin.contenedor.btnContinuar.addEventListener("click", (e) => {
            /* Valida que el nombre ingresado no sea cualquier pavada */
            window.location.href='./index.html';
        });

    }

}

export { ControlLogin };