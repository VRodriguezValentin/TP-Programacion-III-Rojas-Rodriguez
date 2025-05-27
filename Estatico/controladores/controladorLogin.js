class ControlLogin{
    Modelo;
    VistaLogin;
    constructor(p_modelo, p_vista){
        this.Modelo = p_modelo;
        this.VistaLogin = p_vista;
        this.registrarControlador();
    }

    registrarControlador(){
        this.VistaLogin.loginCliente.btnContinuar.addEventListener("click", (e) => {
            e.preventDefault();
            const nombreCliente = this.VistaLogin.loginCliente.inputNombre;
            const nombreValido = this.validarNombre(nombreCliente);

            if (nombreValido){
                nombreCliente.style.border = "";
                this.mostrarMensaje("");

                window.location.href='./index.html';
            }
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

    mostrarMensaje(mensaje) {
        let mensajeDiv = document.getElementById("mensaje-error");

        if (!mensajeDiv) {
            mensajeDiv = document.createElement("div");
            mensajeDiv.id = "mensaje-error";
            mensajeDiv.style.color = "red";
            mensajeDiv.style.marginTop = "10px";
            this.VistaLogin.loginCliente.inputNombre.parentNode.appendChild(mensajeDiv);
        }
        
        mensajeDiv.textContent = mensaje;
    }

    validarNombre(nombreCliente){
        if (nombreCliente.value === null || nombreCliente.value === undefined || nombreCliente.value === ''){
            
            nombreCliente.style.border = "2px solid red";
            this.mostrarMensaje("Ingrese un nombre valido.");
            return false;

        } else if (nombreCliente.value.length > 50){
            
            nombreCliente.style.border = "2px solid red";
            this.mostrarMensaje("El nombre no puede exceder los 50 caracteres.");
            return false;
        }
        // Si es válido, quita el borde rojo y mensaje
        nombreCliente.style.border = "";
        this.mostrarMensaje("");
        return true;
    }
}

export { ControlLogin };