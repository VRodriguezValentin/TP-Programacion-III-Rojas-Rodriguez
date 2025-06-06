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

    async getUserByID() {
        try {
            const user = await userRepository.findById();
            return user;
        } catch (error) {
            console.error('Error en UserService.getAllUsers:', error.message);
            throw new Error('No se pudieron obtener los usuarios. Intente de nuevo más tarde.');
        }
    }

    async createUser(userData) {
        if (!userData.username || userData.email || userData.password) {
            throw new Error('Faltan datos obligatorios para crear el usuario (username, email, password).');
        }

        if (userData.username.length < 3) {
            throw new Error('El nombre de usuario debe tener mas de 3 caracteres.');
        }
        if (userData.username.length > 15) {
            throw new Error('El nombre de usuario no puede ser tan largo (max. 15 caracteres).');
        }

        // implementar bcrypt para hashear contraseñas
        // continuar validaciones
    }

    // async authenticateUser(email, password) { ... }
    // async resetPassword(email) { ... }
    // async assignRoleToUser(userId, roleId) { ... }
}
