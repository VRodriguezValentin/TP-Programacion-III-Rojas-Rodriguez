const ventaRepository = require('../repositories/ventasRepository');

class VentaService {
    async getAllVentas () {
        try {
            const ventas = await ventaRepository.findAll();
            return ventas;
        } catch (error) {
            console.error('Error en VentaService.getAllVentas:', error.message);
            throw new Error('No se pudieron obtener las ventass. Intente de nuevo más tarde.');
        }
    }

    async createVenta(ventaData) {
        // VALIDACIONES - LOGICA DE NEGOCIO
        try {
            const ventas = await ventaRepository.create(ventaData);
            return ventas;
        } catch (error) {
            console.error('Error en VentaService.createVenta:', error.message);
            throw new Error('No se pudo crear la venta. Intente de nuevo más tarde.');
        }
    }
}

module.exports = new VentaService();