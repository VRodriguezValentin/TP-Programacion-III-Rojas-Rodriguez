const mysql = require('mysql2/promise');

// Funcion para obtener conexion a la base de datos
async function conectDbProductos() {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'pocket_store'
        });
        return db;

    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        throw new Error('No se pudo conectar a la base de datos');
    }
}

module.exports = conectDbProductos;