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

    async findDetById(id) {
        const sql = `SELECT * FROM detalle_venta where id_venta = ? ORDER BY id_producto`;

        try {
            const result = await executeQuery(sql, [id]);
            return result;
        } catch (error) {
            console.error('Error en VentaRepository.findDetById:', error.message);
            throw new Error('No se pudo encontrar el detalle de la venta. Intente de nuevo más tarde.');
        }
    }

    async create(ventaData) {
        let sql;
        let params;

        try {
            sql = 'INSERT INTO ventas (usuario, total) VALUES (?, ?)';
            params = [ventaData.nombreUsuario, ventaData.total];
            const result = await executeQuery(sql, params);
            
            sql = 'INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)';
            const productos = ventaData.productos;
            if (!Array.isArray(productos) || productos.length === 0) {
                throw new Error('No hay productos para la venta.');
            }
            for (const producto of productos) {
                const detalleParams = [result.insertId, producto.id_producto, producto.cantidad, producto.precio_unitario];
                await executeQuery(sql, detalleParams);
            }
            console.log('Venta creada exitosamente:', result);
            return result;
        } catch (error) {
            console.error('Error en VentaRepository.create:', error.message);
            throw new Error('No se pudo crear la venta. Intente de nuevo más tarde.');
        }
    }
}

module.exports = new VentaRepository();