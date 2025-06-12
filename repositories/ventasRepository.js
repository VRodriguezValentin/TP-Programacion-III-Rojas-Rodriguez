const { executeQuery } = require('../config/db');

class VentaRepository {
    async findAll() {
        const sql = `SELECT * FROM ventas`;

        try {
            const result = await executeQuery(sql);
            return result;
        } catch (error) {
            console.error('Error en VentaRepository.findAll:', error.message);
            throw new Error('No se pudieron encontrar las ventas. Intente de nuevo más tarde.');
        }
    }

    async create(ventaData) {
        let sql;
        let params;

        try {
            sql = 'INSERT INTO ventas (usuario, total) VALUES (?, ?)';
            params = [ventaData.nombreUsuario, ventaData.total];
            const result = await executeQuery(sql, params);
            return result;
        } catch (error) {
            console.error('Error en VentaRepository.create:', error.message);
            throw new Error('No se pudo crear la venta. Intente de nuevo más tarde.');
        }
    }
}

module.exports = new VentaRepository();