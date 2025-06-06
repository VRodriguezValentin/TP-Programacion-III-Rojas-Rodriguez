const { executeQuery } = require('../config/db');

class UserRepository {
    async create(userData) {
        const sql = `INSERT INTO usuarios (username, email, pass) VALUES (?, ?, ?)`;
        const params = [userData.username, userData.email, userData.password];

        try {
            const result = await executeQuery(sql, params);
            res.status(200).send({ status: "Registro insertado correctamente.", result });
        } catch (error) {
            res.status(500).send({ error: 'Error al crear usuario', detalles: error.message });
        }
    }

    async findAll() {
        const sql = `SELECT * FROM usuarios`;

        try {
            const result = await executeQuery(sql);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send({ error: 'Error al obtener usuarios', detalles: error.message });
        }
    }

    async findById(id) {
        const sql = `SELECT * FROM usuarios WHERE id = ?`;

        try {
            const result = await executeQuery(sql, [id]);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send({ error: 'Usuario no encontrado', detalles: error.message });
        }
    }

    async update(id, newData) {
        const sql = 'UPDATE usuarios SET username = ?, email = ?, password = ? WHERE id = ?';

        try {
            const result = await executeQuery(sql, newData.username, newData.email, newData.password, [id]);
            res.status(200).send({ status: "Registro modificado correctamente.", result });
        } catch (error) {
            res.status(500).send({ error: 'Error al actualizar usuario', detalles: error.message });
        }
    }

    async delete(id) {
        const sql = `DELETE FROM users WHERE id = ?`;

        try {
            const result = await executeQuery(sql, [id]);
            res.status(200).send({ status: "Registro eliminado correctamente.", result });
        } catch (error) {
            res.status(500).send({ error: 'Error al eliminar el usuario', detalles: error.message });
        }
    }
}

module.exports = new UserRepository();