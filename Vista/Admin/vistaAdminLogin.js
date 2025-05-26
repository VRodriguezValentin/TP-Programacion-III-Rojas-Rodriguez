class VistaAdminLogin {
    loginAdmin;
    constructor(){
        this.loginAdmin = {
            inputName:  this.$('inputNombre'),
            inputPass:  this.$('inputContrasena'),
            newInput:   this.$('newInputContainer'),
            btnLogin:   this.$('btnLogin'),
            btnCreate:  this.$('btnCreate'),
        }
    }

    createAccountMode() {
        const form = document.getElementById('divLogin');
        const divInputs = document.createElement('div');
        
        form.innerHTML = '';
        divInputs.id = 'div-inputs';

        /*Username*/
        const labelUsername = document.createElement('label');

        labelUsername.textContent = 'Nombre de usuario:';

        const inputUsername = document.createElement('input');

        inputUsername.type = 'text';
        inputUsername.placeholder = 'Ingrese su nombre de usuario';
        inputUsername.id = 'inputUsername';

        labelUsername.setAttribute('for', 'inputUsername');

        divInputs.appendChild(labelUsername);
        divInputs.appendChild(inputUsername);
        
        /*Email*/
        const labelEmail = document.createElement('label');

        labelEmail.textContent = 'Correo electrónico:';

        const inputEmail = document.createElement('input');

        inputEmail.type = 'email';
        inputEmail.placeholder = 'example@...com';
        inputEmail.id = 'inputEmail';

        labelEmail.setAttribute('for', 'inputEmail');

        divInputs.appendChild(labelEmail);
        divInputs.appendChild(inputEmail);

        /*Password*/
        const labelPassword = document.createElement('label');

        labelPassword.textContent = 'Contraseña';

        const inputPassword = document.createElement('input');

        inputPassword.type = 'password';
        inputPassword.placeholder = 'Ingrese su contraseña';
        inputPassword.id = 'inputPassword';

        labelPassword.setAttribute('for', 'inputPassword');

        divInputs.appendChild(labelPassword);
        divInputs.appendChild(inputPassword);

        /*Password2*/
        const labelPassword2 = document.createElement('label');

        labelPassword2.textContent = 'Confirmar contraseña:';

        const inputPassword2 = document.createElement('input');

        inputPassword2.type = 'password';
        inputPassword2.placeholder = 'Repita su contraseña';
        inputPassword2.id = 'inputPassword2';

        labelPassword2.setAttribute('for', 'inputPassword2');

        divInputs.appendChild(labelPassword2);
        divInputs.appendChild(inputPassword2);

        const divBtn = document.createElement('div');

        divBtn.id = 'div-btn';

        const btnAccept = document.createElement('button');

        btnAccept.id = 'btnAccept';
        btnAccept.textContent = 'Aceptar';
        btnAccept.classList.add('button');
        
        const btnCancel = document.createElement('button');
        
        btnCancel.id = 'btnCancel';
        btnCancel.textContent = 'Cancelar';
        btnCancel.classList.add('button');

        divBtn.appendChild(btnAccept);
        divBtn.appendChild(btnCancel);
        
        form.appendChild(divInputs);
        form.appendChild(divBtn);

        this.createAccountElements = {
            inputUsername:  this.$('inputUsername'),
            inputEmail:     this.$('inputEmail'),
            inputPassword:  this.$('inputPassword'),
            inputPassword2: this.$('inputPassword2'),
            btnAccept:      this.$('btnAccept'),
            btnCancel:      this.$('btnCancel')
        };
    }

    $(id){
        return document.getElementById(id);
    }
}

export { VistaAdminLogin };