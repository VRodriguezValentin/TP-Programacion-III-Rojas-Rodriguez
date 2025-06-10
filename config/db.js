const mysql = require('mysql2/promise');

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'pocket_store',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

async function executeQuery(sql, params) {
    let connection;
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.execute(sql, params);
        return rows;
    } catch (error) {
        console.error('Error al ejecutar consulta SQL:', error.message);
        throw error;
    } finally {
        if (connection) {
            connection.release(); 
        }
    }
}

async function testDbConnection() {
    try {
        const connection = await pool.getConnection(); // Obtiene una conexión para probar
        console.log('Conexión a la base de datos "pocket_store" establecida correctamente.');
        connection.release();
    } catch (error) {
        console.error('Error crítico al conectar a la base de datos. La aplicación no puede iniciar.', error.message);
        process.exit(1); 
    }
}

module.exports = {
    executeQuery,
    testDbConnection,
};