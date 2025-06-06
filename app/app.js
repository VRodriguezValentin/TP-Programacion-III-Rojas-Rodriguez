const express = require('express');
const cors = require('cors');
const { executeQuery } = require('../config/db');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const api = {
    // Obtener todos los productos http://localhost:3000/api/productos
    getProducts: app.get('/api/productos', async (req, res) => {
        try {
            const sql = 'SELECT * FROM productos';
            const rows = await executeQuery(sql);
            res.status(200).send(rows);
        } catch (error) {
            res.status(500).send({ error: 'Error al obtener productos', detalles: error.message });
        }
    }),

    // Obtener producto por ID http://localhost:3000/api/productos/1
    getProductById: app.get('/api/productos/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const sql = 'SELECT * FROM productos WHERE id = ?';
            const [row] = await executeQuery(sql, [id]); 
            
            if (!row) {
                res.status(404).send({ error: 'Producto no encontrado' });
            } else {
                res.status(200).send(row);
            }
        } catch (error) {
            res.status(500).send({ error: 'Error al obtener producto', detalles: error.message });
        }
    }),

    // Insertar producto http://localhost:3000/api/productos
    postProduct: app.post('/api/productos', async (req, res) => {
        const datos = req.body;
        let sql;
        let params;
        try {
            if (datos.modelo === null || datos.modelo === undefined) {
                sql = 'INSERT INTO productos (marca, precio, imagen, activo, tipo, compatibilidad) VALUES (?, ?, ?, ?, ?, ?)';
                params = [datos.marca, datos.precio, datos.imagen, datos.activo, datos.tipo, datos.compatibilidad];
            } else {
                sql = 'INSERT INTO productos (marca, precio, imagen, activo, modelo, color, almacenamiento, ram) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
                params = [datos.marca, datos.precio, datos.imagen, datos.activo, datos.modelo, datos.color, datos.almacenamiento, datos.ram];
            }

            const resultado = await executeQuery(sql, params); 
            res.status(200).send({ status: "Registro insertado correctamente.", resultado });

        } catch (error) {
            res.status(500).send({ error: 'Error al insertar producto', detalles: error.message });
        }
    }),

    // Actualizar producto http://localhost:3000/api/productos
    putProduct: app.put('/api/productos', async (req, res) => {
        const datos = req.body;
        let sql;
        let params;
        try {
            if (datos.modelo === null || datos.modelo === undefined) {
                sql = 'UPDATE productos SET marca = ?, precio = ?, imagen = ?, activo = ?, tipo = ?, compatibilidad = ? WHERE id = ?';
                params = [datos.marca, datos.precio, datos.imagen, datos.activo, datos.tipo, datos.compatibilidad, datos.id];
            } else {
                sql = 'UPDATE productos SET marca = ?, precio = ?, imagen = ?, activo = ?, modelo = ?, color = ?, almacenamiento = ?, ram = ? WHERE id = ?';
                params = [datos.marca, datos.precio, datos.imagen, datos.activo, datos.modelo, datos.color, datos.almacenamiento, datos.ram, datos.id];
            }

            const resultado = await executeQuery(sql, params);
            res.status(200).send({ status: "Registro actualizado correctamente.", resultado });

        } catch (error) {
            res.status(500).send({ error: 'Error al actualizar producto', detalles: error.message });

        } finally {
            if (db) await db.end();
        }
    }),

    // Eliminar producto http://localhost:3000/api/productos
    deleteProduct: app.delete('/api/productos', async (req, res) => {
        const datos = req.body;
        try {
            const sql = 'DELETE FROM productos WHERE id = ?';
            const resultado = await executeQuery(sql, [datos.id]);
            res.status(200).send({ status: "Registro eliminado correctamente.", resultado });
        } catch (error) {
            res.status(500).send({ error: 'Error al eliminar producto', detalles: error.message });
        } 
    })
}

module.exports = api;