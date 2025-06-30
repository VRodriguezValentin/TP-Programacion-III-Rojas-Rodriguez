-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS pocket_store;
USE pocket_store;

-- Tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    marca VARCHAR(50) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    imagen VARCHAR(2000) NOT NULL,
    activo BOOL DEFAULT TRUE,
    modelo VARCHAR(50) NULL,
    color VARCHAR(50) NULL,
    almacenamiento INT NULL,
    ram INT NULL,
    tipo VARCHAR(50) NULL,
    compatibilidad VARCHAR(200) NULL,
    tipo_producto VARCHAR(50) NOT NULL
);

-- Tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    pass VARCHAR(200) NOT NULL
);

-- Tabla ventas
CREATE TABLE IF NOT EXISTS ventas (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    total FLOAT NOT NULL,
    fecha_proceso DATETIME DEFAULT current_timestamp
);

-- Tabla detalle_venta
CREATE TABLE IF NOT EXISTS detalle_venta (
    id_venta INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL DEFAULT 1,
    precio_unitario INT NOT NULL,
    FOREIGN KEY (id_venta) REFERENCES ventas(id) ON DELETE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES productos(id) ON DELETE CASCADE
);

-- Insertar celulares
INSERT INTO productos (marca, precio, imagen, activo, modelo, color, almacenamiento, ram, tipo, compatibilidad, tipo_producto)
VALUES 
('Samsung', 1500000, 'imagen-1751072325395.avif', true, 'Galaxy S21', 'Blanco', 128, 8, NULL, NULL, 'celular'),
('Apple', 2300000, 'imagen-1751072435232.png', true, 'iPhone 13', 'Negro', 540, 4, NULL, NULL, 'celular'),
('Xiaomi', 890000, 'imagen-1751072531139.png', true, 'Redmi Note 11', 'Azul', 128, 6, NULL, NULL, 'celular'),
('Motorola', 1100100, 'imagen-1751072701095.png', true, 'Moto G82', 'Negro', 246, 6, NULL, NULL, 'celular'),
('Samsung', 950000, 'imagen-1751141756187.avif', true, 'Galaxy A15', 'Amarillo', 518, 8, NULL, NULL, 'celular');

-- Insertar accesorios
INSERT INTO productos (marca, precio, imagen, activo, modelo, color, almacenamiento, ram, tipo, compatibilidad, tipo_producto)
VALUES 
('Samsung', 50000, 'imagen-1751073991553.png', true, NULL, NULL, NULL, NULL, 'Cargador', 'USB-C', 'accesorio'),
('Apple', 150000, 'imagen-1751074105178.png', true, NULL, NULL, NULL, NULL, 'Funda', 'iPhone 13', 'accesorio'),
('JBL', 350000, 'imagen-1751074411154.png', true, NULL, NULL, NULL, NULL, 'Auriculares', 'Bluetooth', 'accesorio'),
('Huawei', 40000, 'imagen-1751074741276.png', true, NULL, NULL, NULL, NULL, 'Smartwatch', 'Android', 'accesorio'),
('Samsung', 125000, 'imagen-1751141821463.png', true, NULL, NULL, NULL, NULL, 'Funda', 'Galaxy A15', 'accesorio');

-- Insertar usuario admin
INSERT INTO usuarios (username, email, pass)
VALUES ('admin', 'admin@pocketstore.com', '$2b$10$eWCVNOK9JclGT5XMG0Ohr.V8qk0TXfKTNC2.0kXIhOcuHQfdkTGEy'); -- Contraseña: admin123