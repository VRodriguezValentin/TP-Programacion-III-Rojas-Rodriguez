class ControlLoginAdmin {
    Modelo;
    VistaLoginAdmin;
    isCreateAccountMode = false;
    
    constructor(a_vista, a_modelo){
        this.Modelo = a_modelo;
        this.VistaLoginAdmin = a_vista;
        
        this.setupEventListeners();
    }

    setupEventListeners () {
        this.VistaLoginAdmin.loginAdmin.btnCreate.addEventListener('click', (e) => {
            e.preventDefault();

            if (!this.isCreateAccountMode) {
                this.VistaLoginAdmin.createAccountMode();
                this.isCreateAccountMode = true;
            }

            this.VistaLoginAdmin.createAccountElements.btnAccept.addEventListener('click', (e) => {
                e.preventDefault();
                this.createAdmin();
            })

            this.VistaLoginAdmin.createAccountElements.btnCancel.addEventListener('click', (e) => {
                location.reload();
            })
        });
    }

    createAdmin() {
        const getName = this.VistaLoginAdmin.createAccountElements.inputUsername.value;
        const getEmail = this.VistaLoginAdmin.createAccountElements.inputEmail.value;
        const getPassword = this.VistaLoginAdmin.createAccountElements.inputPassword.value;
        const getPassword2 = this.VistaLoginAdmin.createAccountElements.inputPassword2.value;

        if (getPassword !== getPassword2) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        /*Para poder instanciar un Admin se deben generar las logicas de negocio.*/
    }
}

export { ControlLoginAdmin };