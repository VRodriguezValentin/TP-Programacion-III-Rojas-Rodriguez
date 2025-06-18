const bcrypt = require('bcrypt');

const userRepository = require('../repositories/userRepository');
const Admin = require('../model/Admin');

class UserService {
    //get, create, update, delete
    async getAllUsers() {
        try {
            const users = await userRepository.findAll();
            return users;
        } catch (error) {
            console.error('Error en UserService.getAllUsers:', error.message);
            throw new Error('No se pudieron obtener los usuarios. Intente de nuevo más tarde.');
        }
    }

    async getUserByID(id) {
        try {
            const user = await userRepository.findById(id);
            return user;
        } catch (error) {
            console.error('Error en UserService.getUserByID:', error.message);
            throw new Error('No se pudo obtener el usuario. Intente de nuevo más tarde.');
        }
    }

    async createUser(userData) {
        if (!userData.username || !userData.email || !userData.password) {
            throw new Error('Faltan datos obligatorios para crear el usuario (username, email, password).');
        }

        try {
            await this.validateUsername(userData.username);
            await this.validateEmail(userData.email);
            await this.validatePassword(userData.password);
        } catch (validationError) {
            console.error('Error de validación en UserService.createUser:', validationError.message);
            throw validationError;
        }
        
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(userData.password, salt);
            const newAdmin = new Admin(userData.username, userData.email, hash);
            const user = await userRepository.create(newAdmin);

            return user;
        } catch (dbError) {
            console.error('Error al guardar usuario en la base de datos:', dbError.message);
            throw new Error('Error al crear el usuario. Intente de nuevo más tarde o contacte soporte.');
        }
    }

    async validateUsername(username) {
        const regex = /^[a-zA-Z0-9_]+$/;
        const usernameLength = username.length;
        const usersArray = await this.getAllUsers();

        if (usernameLength < 3) {
            throw new Error('El nombre de usuario debe tener mas de 3 caracteres.');
        }
        if (usernameLength > 15) {
            throw new Error('El nombre de usuario no puede ser tan largo (max. 15 caracteres).');
        }

        if(usernameLength !== username.trim().length) {
            throw new Error('No deben ingresarse espacios en blanco.');
        }

        if(!regex.test(username)) {
            throw new Error('No deben ingresarse caracteres especiales.');
        }

        const userExists = usersArray.some(u => u.username === username);
        if (userExists) {
            throw new Error('Ya existe este nombre de usuario, intente con uno diferente.');
        }

        return true;
    }

    async validatePassword(password) {
        const passwordLength = password.length;

        if (passwordLength < 6) {
            throw new Error('La contraseña debe tener mas de 6 caracteres.');
        }
        if (passwordLength > 25) {
            throw new Error('La contraseña no puede ser tan largo (max. 25 caracteres).');
        }

        if(passwordLength !== password.trim().length) {
            throw new Error('No deben ingresarse espacios en blanco.');
        }

        return true;
    }

    async validateEmail(email) {
        const usersArray = await this.getAllUsers();

        const userExists = usersArray.some(u => u.email === email);
        if (userExists) {
            throw new Error('Este email ya esta registrado. Intente iniciar sesion.');
        }

        return true;
    }

    async validateLogin(loginData) {
        const usersArray = await this.getAllUsers();
        let userFinded;

        usersArray.forEach((u) => {
            if (u.username === loginData.username) {
                userFinded = u;
            }
        });

        if (userFinded === undefined) {
            throw new Error('Usuario no encontrado.');
        }

        const compare = await bcrypt.compare(loginData.password, userFinded.pass);

        if (compare) {
            return loginData;
        } else {
            throw new Error('Contraseña incorrecta.');
        }
    }
}

module.exports = new UserService();