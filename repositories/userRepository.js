const { executeQuery } = require('../config/db');

class UserRepository {
    async findAll() {
        const sql = `SELECT * FROM usuarios`;

        try {
            const result = await executeQuery(sql);
            return result;
        } catch (error) {
            console.error('Error en UserRepository.findAll:', error.message);
            throw new Error('No se pudieron encontrar los usuarios. Intente de nuevo más tarde.');
        }
    }

    async findById(id) {
        const sql = `SELECT * FROM usuarios WHERE id = ?`;

        try {
            const result = await executeQuery(sql, [id]);
            return result;
        } catch (error) {
            console.error('Error en UserRepository.findById:', error.message);
            throw new Error('No se pudo encontrar el usuario. Intente de nuevo más tarde.');
        }
    }

    async create(userData) {
        const sql = `INSERT INTO usuarios (username, email, pass) VALUES (?, ?, ?)`;
        const params = [userData.username, userData.email, userData.password];

        try {
            const result = await executeQuery(sql, params);
            return result;
        } catch (error) {
            console.error('Error en UserRepository.create:', error.message);
            throw new Error('No se pudo crear el usuario. Intente de nuevo más tarde.');
        }
    }

    async update(id, newData) {
        const sql = 'UPDATE usuarios SET username = ?, email = ?, password = ? WHERE id = ?';

        try {
            const result = await executeQuery(sql, newData.username, newData.email, newData.password, [id]);
            return result;
        } catch (error) {
            console.error('Error en UserRepository.update:', error.message);
            throw new Error('No se pudo modificar el usuario. Intente de nuevo más tarde.');
        }
    }

    async delete(id) {
        const sql = `DELETE FROM users WHERE id = ?`;

        try {
            const result = await executeQuery(sql, [id]);
            return result;
        } catch (error) {
            console.error('Error en UserRepository.delete:', error.message);
            throw new Error('No se pudo eliminar el usuario. Intente de nuevo más tarde.');
        }
    }
}

module.exports = new UserRepository();