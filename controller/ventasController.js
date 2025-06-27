const ventaService = require('../services/ventaService');

exports.findAll = async (req, res) => {
    try {
        const getventas = await ventaService.getAllVentas();
        res.status(200).send(getventas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.findDetById = async (req, res) => {
    try {
        const getventas = await ventaService.getDetalleVenta(req.params.id);
        res.status(200).send(getventas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.controllerCreate = async (req, res) => {
    const ventaData = req.body;

    if (!ventaData.nombreUsuario || !ventaData.total) {
        res.status(400).json({ message: 'El cliente y el monto son obligatorios.' });
    }

    try {
        const newVenta = await ventaService.createVenta(ventaData);
        res.status(201).json({ message: 'Venta cargada exitosamente', venta: newVenta });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}