const { executeQuery } = require('../config/db');

class ProductRepository {
    async findAll() {
        const sql = `SELECT * FROM productos`;

        try {
            const result = await executeQuery(sql);
            return result;
        } catch (error) {
            console.error('Error en ProductRepository.findAll:', error.message);
            throw new Error('No se pudieron encontrar los productos. Intente de nuevo más tarde.');
        }
    }

    async findById(id) {
        const sql = `SELECT * FROM productos WHERE id = ?`;

        try {
            const result = await executeQuery(sql, [id]);
            return result;
        } catch (error) {
            console.error('Error en ProductRepository.findById:', error.message);
            throw new Error('No se pudo encontrar el producto. Intente de nuevo más tarde.');
        }
    }

    async create(productData) {
        let sql;
        let params;

        try {
            if (productData.modelo === null || productData.modelo === undefined) {
                sql = 'INSERT INTO productos (marca, precio, imagen, activo, tipo, compatibilidad) VALUES (?, ?, ?, ?, ?, ?)';
                params = [productData.marca, productData.precio, productData.imagen, productData.activo, productData.tipo, productData.compatibilidad];
            } else {
                sql = 'INSERT INTO productos (marca, precio, imagen, activo, modelo, color, almacenamiento, ram) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
                params = [productData.marca, productData.precio, productData.imagen, productData.activo, productData.modelo, productData.color, productData.almacenamiento, productData.ram];
            }
            const result = await executeQuery(sql, params);
            return result;
        } catch (error) {
            console.error('Error en ProductRepository.create:', error.message);
            throw new Error('No se pudo crear el producto. Intente de nuevo más tarde.');
        }
    }

    async update(productData) {
        let sql;
        let params;

        try {
            if (productData.modelo === null || productData.modelo === undefined) {
                sql = 'UPDATE productos SET marca = ?, precio = ?, imagen = ?, activo = ?, tipo = ?, compatibilidad = ? WHERE id = ?';
                params = [productData.marca, productData.precio, productData.imagen, productData.activo, productData.tipo, productData.compatibilidad, productData.id];
            } else {
                sql = 'UPDATE productos SET marca = ?, precio = ?, imagen = ?, activo = ?, modelo = ?, color = ?, almacenamiento = ?, ram = ? WHERE id = ?';
                params = [productData.marca, productData.precio, productData.imagen, productData.activo, productData.modelo, productData.color, productData.almacenamiento, productData.ram, productData.id];
            }
            const result = await executeQuery(sql, params); 
            return result;
        } catch (error) {
            console.error('Error en ProductRepository.update:', error.message);
            throw new Error('No se pudo modificar el producto. Intente de nuevo más tarde.');
        }
    }

    async updateStatusBd(id, newStatus) {
        const sql = 'UPDATE productos SET activo = ? WHERE id = ?'

        try {
            const result = await executeQuery(sql, [newStatus, id]);
            return result;
        } catch (error) {
            console.error('Error en ProductRepository.updateStatusBd:', error.message);
            throw new Error('No se pudo modificar el producto. Intente de nuevo más tarde.');
        }
    }

    async delete(productData) {
        const sql = 'DELETE FROM productos WHERE id = ?';

        try {
            const result = await executeQuery(sql, [productData.id]);
            return result;
        } catch (error) {
            console.error('Error en ProductRepository.delete:', error.message);
            throw new Error('No se pudo eliminar el producto. Intente de nuevo más tarde.');
        }
    }
}

module.exports = new ProductRepository();