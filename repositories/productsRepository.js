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

    async findAllWithPagination(tipo, offset) {
        const sql = `SELECT * FROM productos WHERE activo = true AND tipo_producto = ? LIMIT 4 OFFSET ?`;

        try {
            const result = await executeQuery(sql, [tipo, offset]);
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
        const sql = 'INSERT INTO productos (marca, precio, imagen, activo, modelo, color, almacenamiento, ram, tipo, compatibilidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const params = [productData.marca, productData.precio, productData.imagen, productData.activo, productData.modelo, productData.color, productData.almacenamiento, productData.ram, productData.tipo, productData.compatibilidad];

        try {
            const result = await executeQuery(sql, params);
            return result;
        } catch (error) {
            console.error('Error en ProductRepository.create:', error.message);
            throw new Error('No se pudo crear el producto. Intente de nuevo más tarde.');
        }
    }

    async update(productData) {
        const sql = 'UPDATE productos SET (marca, precio, imagen, activo, modelo, color, almacenamiento, ram, tipo, compatibilidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) WHERE id = ?';
        const params = [productData.marca, productData.precio, productData.imagen, productData.activo, productData.modelo, productData.color, productData.almacenamiento, productData.ram, productData.tipo, productData.compatibilidad, productData.id];

        try {
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