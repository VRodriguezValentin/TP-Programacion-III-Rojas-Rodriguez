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

    async createProductSeq(productData) {

        if (productData.flag == 1) {
            productData.modelo = null;
            productData.color = null;
            productData.almacenamiento = null;
            productData.ram = null;
            productData.tipo_producto = 'accesorio';
        } else {
            productData.tipo = null;
            productData.compatibilidad = null;
            productData.tipo_producto = 'celular';
        }

        try {
            await this.validateProduct(productData);
        } catch (error) {
            console.error('Error de validación en ProductService.createProductSeq:', error.message);
            throw error;
        }

        try {
            const products = await productRepository.createSeq(productData);
            return products;
        } catch (error) {
            console.error('Error en ProductService.createProduct:', error.message);
            throw new Error('No se pudo crear el producto. Intente de nuevo más tarde.');
        }

    }

    async updateProduct(productData) {

        try {
            await this.validateProduct(productData);
        } catch (error) {
            console.error('Error de validación en ProductService.updateProduct:', error.message);
            throw error;
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

    async validateProduct(productData) {
        if (productData.marca.length < 1 || productData.marca.length > 50) {
            throw new Error('Marca invalida.');
        }

        if (productData.precio < 0) {
            throw new Error('El precio no puede ser negativo.');
        }

        if (productData.imagen === undefined) {
            throw new Error('Debe ingresar una imagen para el producto.');
        }

        if (productData.tipo_producto === 'celular') {
            if (productData.modelo.length < 1 || productData.modelo.length > 50) {
                throw new Error('Ingrese un modelo valido.');
            }
            if (productData.color.length < 1 || productData.color.length > 50) {
                throw new Error('Ingrese un color valido.');
            }
            if (productData.almacenamiento < 1) {
                throw new Error('Ingrese un almacenamiento valido.');
            }
            if (productData.ram < 1) {
                throw new Error('Ingrese una ram valida.');
            }
        }

        if (productData.tipo_producto === 'accesorio') {
            if (productData.tipo.length < 1 || productData.tipo.length > 50) {
                throw new Error('Ingrese un tipo valido.');
            }
            if (productData.compatibilidad.length < 1 || productData.compatibilidad.length > 50) {
                throw new Error('Ingrese una compatibilidad valida.');
            }
        }

        return true;
    }
}

module.exports = new ProductService();