const ventaService = require('../services/ventaService');

exports.findAll = async (req, res) => {
    try {
        const getventas = await ventaService.getAllVentas();
        res.status(200).send(getventas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.controllerCreate = async (req, res) => {
    const ventaData = req.body;

    // VALIDACIONES BASICAS

    try {
        const newVenta = await ventaService.createVenta(ventaData);
        res.status(201).json({ message: 'Venta cargada exitosamente', venta: newVenta });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}