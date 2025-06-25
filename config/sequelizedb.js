const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME || 'pocket_store',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || 'root',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

const Product = sequelize.define('Product', {
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },

    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },

    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },

    modelo: {
        type: DataTypes.STRING,
        allowNull: true
    },

    color: {
        type: DataTypes.STRING,
        allowNull: true
    },

    almacenamiento: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    ram: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    tipo: {
        type: DataTypes.STRING,
        allowNull: true
    },

    compatibilidad: {
        type: DataTypes.STRING,
        allowNull: true
    },

    tipo_producto: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, { tableName: 'productos', timestamps: false} );

module.exports = {
    sequelize,
    Product
};