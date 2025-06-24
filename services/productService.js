const productRepository = require('../repositories/productsRepository');

class ProductService {
    async getAllProducts () {
        try {
            const products = await productRepository.findAll();
            return products;
        } catch (error) {
            console.error('Error en ProductService.getAllProducts:', error.message);
            throw new Error('No se pudieron obtener los productos. Intente de nuevo más tarde.');
        }
    }

    async getAllProductsWithPagination(tipo, offset) {
        try {
            const products = await productRepository.findAllWithPagination(tipo, offset);
            return products;
        } catch (error) {
            console.error('Error en ProductService.getAllProductsWithPagination:', error.message);
            throw new Error('No se pudo obtener el producto. Intente de nuevo más tarde.');
        }
    }

    async getProductByID(id) {
        try {
            const products = await productRepository.findById(id);
            return products;
        } catch (error) {
            console.error('Error en ProductService.getProductByID:', error.message);
            throw new Error('No se pudo obtener el producto. Intente de nuevo más tarde.');
        }
    }

    async createProduct(productData) {

        if (productData.marca.length < 1 || productData.marca.length > 50 ||
            productData.precio < 0 || productData.precio > 1000000 ||
            productData.imagen.length < 1 || productData.imagen.length > 200 ||
            typeof productData.activo !== 'boolean' ||
            !['celular', 'accesorio'].includes(productData.tipo_producto)) {
            throw new Error('Datos del producto no válidos.');
        }

        try {
            const products = await productRepository.create(productData);
            return products;
        } catch (error) {
            console.error('Error en ProductService.createProduct:', error.message);
            throw new Error('No se pudo crear el producto. Intente de nuevo más tarde.');
        }
    }

    async updateProduct(productData) {
        
        if (productData.marca.length < 1 || productData.marca.length > 50 ||
            productData.precio < 0 || productData.precio > 1000000 ||
            productData.imagen.length < 1 || productData.imagen.length > 200 ||
            typeof productData.activo !== 'boolean' ||
            !['celular', 'accesorio'].includes(productData.tipo_producto)) {
            throw new Error('Datos del producto no válidos.');
        }

        try {
            const products = await productRepository.update(productData);
            return products;
        } catch (error) {
            console.error('Error en ProductService.updateProduct:', error.message);
            throw new Error('No se pudo modificar el producto. Intente de nuevo más tarde.');
        }
    }

    async updateStatus(id, newStatus) {
        // VALIDACIONES - LOGICA DE NEGOCIO
        try {
            const products = await productRepository.updateStatusBd(id, newStatus);
            return products;
        } catch (error) {
            console.error('Error en ProductService.updateStatus:', error.message);
            throw new Error('No se pudo modificar el producto. Intente de nuevo más tarde.');
        }
    }

    async deleteProduct(productData) {
        // VALIDACIONES - LOGICA DE NEGOCIO
        try {
            const products = await productRepository.delete(productData);
            return products;
        } catch (error) {
            console.error('Error en ProductService.deleteProduct:', error.message);
            throw new Error('No se pudo eliminar el producto. Intente de nuevo más tarde.');
        }
    }
}

module.exports = new ProductService();