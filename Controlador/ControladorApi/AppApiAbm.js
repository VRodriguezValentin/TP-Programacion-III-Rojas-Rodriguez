/*
Requiere:
npm install express cors mysql2
*/

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const port = 3036;

app.use(express.json());
app.use(cors());

// Funci�n para obtener conexi�n a la base de datos
async function conectDbProductos() {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'productos'
        });
        return db;

    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        throw new Error('No se pudo conectar a la base de datos');
    }
}


// Obtener todos los productos http://localhost:3036/api/productos
app.get('/api/productos', async (req, res) => {
    const db = await conectDbProductos();
    try {
        const [rows] = await db.execute('SELECT * FROM productos');
        res.status(200).send(rows);
        
    } catch (error) {
        res.status(500).send({ error: 'Error al obtener productos', detalles: error.message });

    } finally {
        await db.end();
    }
});

// Obtener producto por ID http://localhost:3036/api/productos/1
app.get('/api/productos/:id', async (req, res) => {
    const db = await conectDbProductos();
    const id = req.params.id;
    try {
        const [rows] = await db.execute('SELECT * FROM productos WHERE id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).send({ error: 'Producto no encontrado' });
        } else {
            res.status(200).send(rows[0]);
        }
    } catch (error) {
        res.status(500).send({ error: 'Error al obtener producto', detalles: error.message });
    } finally {
        await db.end();
    }
});

// Insertar producto http://localhost:3036/api/productos
app.post('/api/productos', async (req, res) => {
    const db = await conectDbProductos();
    const datos = req.body;
    try {
        let resultado;
        if (datos.modelo === null || datos.modelo === undefined) {
            const qry = 'INSERT INTO productos (marca, precio, imagen, activo, tipo, compatibilidad) VALUES (?, ?, ?, ?, ?, ?)';
            resultado = await db.execute(qry, [datos.marca, datos.precio, datos.imagen, datos.activo, datos.tipo, datos.compatibilidad]);
        } else {
            const qry = 'INSERT INTO productos (marca, precio, imagen, activo, modelo, color, almacenamiento, ram) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            resultado = await db.execute(qry, [datos.marca, datos.precio, datos.imagen, datos.activo, datos.modelo, datos.color, datos.almacenamiento, datos.ram]);
        }
        res.status(200).send({ status: "Registro insertado correctamente.", resultado });

    } catch (error) {
        res.status(500).send({ error: 'Error al insertar producto', detalles: error.message });

    } finally {
        await db.end();
    }
});

// Actualizar producto http://localhost:3036/api/productos
app.put('/api/productos', async (req, res) => {
    const db = await conectDbProductos();
    const datos = req.body;
    try {
        let resultado;
        if (datos.modelo === null || datos.modelo === undefined) {
            const qry = 'UPDATE productos SET marca = ?, precio = ?, imagen = ?, activo = ?, tipo = ?, compatibilidad = ? WHERE id = ?';
            resultado = await db.execute(qry, [datos.marca, datos.precio, datos.imagen, datos.activo, datos.tipo, datos.compatibilidad, datos.id]);
        } else {
            const qry = 'UPDATE productos SET marca = ?, precio = ?, imagen = ?, activo = ?, modelo = ?, color = ?, almacenamiento = ?, ram = ? WHERE id = ?';
            resultado = await db.execute(qry, [datos.marca, datos.precio, datos.imagen, datos.activo, datos.modelo, datos.color, datos.almacenamiento, datos.ram, datos.id]);
        }
        res.status(200).send({ status: "Registro actualizado correctamente.", resultado });

    } catch (error) {
        res.status(500).send({ error: 'Error al actualizar producto', detalles: error.message });

    } finally {
        await db.end();
    }
});

// Eliminar producto http://localhost:3036/api/productos
app.delete('/api/productos', async (req, res) => {
    const db = await conectDbProductos();
    const datos = req.body;
    try {
        const qry = 'DELETE FROM productos WHERE id = ?';
        const resultado = await db.execute(qry, [datos.id]);
        res.status(200).send({ status: "Registro eliminado correctamente.", resultado });

    } catch (error) {
        res.status(500).send({ error: 'Error al eliminar producto', detalles: error.message });

    } finally {
        await db.end();
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
