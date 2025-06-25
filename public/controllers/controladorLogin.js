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

                window.location.href='./home.html';
            }
        });

        if (localStorage.getItem("tema") === "oscuro") {
            document.body.classList.remove("bright");
        } else if (localStorage.getItem("tema") === "claro") {
            document.body.classList.add("bright");
        }

        this.VistaLogin.loginCliente.btnTema.addEventListener("click", (e) => {
            e.preventDefault();

            if (document.body.classList.contains("bright")) {
                document.body.classList.remove("bright");
                localStorage.setItem("tema", "oscuro");
            } else {
                document.body.classList.add("bright");
                localStorage.setItem("tema", "claro");
            }
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

        } else if (nombreCliente.value.length > 15){
            
            nombreCliente.style.border = "2px solid red";
            this.mostrarMensaje("El nombre no puede exceder los 15 caracteres.");
            return false;
        } else if (nombreCliente.value.length < 3){
            
            nombreCliente.style.border = "2px solid red";
            this.mostrarMensaje("El nombre no puede ser menor a 3 caracteres.");
            return false;
        } else if (nombreCliente.value.length != nombreCliente.value.trim().length) {
            
            nombreCliente.style.border = "2px solid red";
            this.mostrarMensaje("El nombre no puede tener espacios en blanco.");
            return false;
        }
    
        const regex = /^[a-zA-Z_]+$/;

        if (!regex.test(nombreCliente.value)) {
            nombreCliente.style.border = "2px solid red";
            this.mostrarMensaje("El nombre solo puede contener letras y guiones bajos.");
            return false;
        }

        nombreCliente.style.border = "";
        this.mostrarMensaje("");

        localStorage.removeItem('nombreCliente');
        localStorage.setItem('nombreCliente', nombreCliente.value);
        return true;
    }
}

export { ControlLogin };