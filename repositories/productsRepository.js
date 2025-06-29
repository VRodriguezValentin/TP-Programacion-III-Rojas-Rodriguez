const { executeQuery } = require('../config/db');
const { Product } = require('../config/sequelizedb');

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

    async createSeq(productData) {
        try {
            const result = await Product.create({
                marca:  productData.marca,
                precio: productData.precio,
                imagen: productData.imagen,
                activo: true,
                modelo: productData.modelo,
                color:  productData.color,
                almacenamiento: productData.almacenamiento,
                ram:    productData.ram,
                tipo:   productData.tipo,
                compatibilidad: productData.compatibilidad,
                tipo_producto:  productData.tipo_producto});
            return result;
        } catch (error) {
            console.error('Error en ProductRepository.createSeq:', error.message);
            throw new Error('No se pudo crear el producto. Intente de nuevo más tarde.');
        }
    }

    async update(productData) {
        const sql = `
        UPDATE productos SET marca = ?, precio = ?, imagen = ?, activo = ?, modelo = ?, color = ?, almacenamiento = ?, ram = ?, tipo = ?, compatibilidad = ?, tipo_producto = ?
        WHERE id = ?`;
        
        const params = [
            productData.marca,
            productData.precio,
            productData.imagen,
            productData.activo,
            productData.modelo,
            productData.color,
            productData.almacenamiento,
            productData.ram,
            productData.tipo,
            productData.compatibilidad,
            productData.tipo_producto,
            productData.id
        ];

        console.log(productData);
        

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