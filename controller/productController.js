const productService = require('../services/productService');

exports.findAll = async (req, res) => {
    try {
        const getProducts = await productService.getAllProducts();
        res.status(200).send(getProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.findById = async (req, res) => {
    try {
        const getProduct = await productService.getProductByID(req.params.id);
        res.status(200).send(getProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.controllerCreate = async (req, res) => {
    const productData = req.body;

    // VALIDACIONES BASICAS

    try {
        const newProduct = await productService.createProduct(productData);
        res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.controllerUpdate = async (req, res) => {
    const productData = req.body;

    // VALIDACIONES BASICAS

    try {
        const newProduct = await productService.updateProduct(productData);
        res.status(201).json({ message: 'Producto modificado exitosamente', product: newProduct });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.enableProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await productService.updateStatus(productId, true);
        console.log(`Producto ${productId} habilitado.`);
        res.redirect('/dashboard');
    } catch (error) {
        console.error(`Error al habilitar el producto ${productId}:`, error);
        res.status(500).send('Error al habilitar el producto.');
    }
}

exports.disableProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await productService.updateStatus(productId, false);
        console.log(`Producto ${productId} habilitado.`);
        res.redirect('/dashboard');
    } catch (error) {
        console.error(`Error al deshabilitar el producto ${productId}:`, error);
        res.status(500).send('Error al deshabilitar el producto.');
    }
}

exports.getEditProductPage = async (req, res) => {
    const productId = req.params.id;

    //Generar toda la logica en gestion para poder cargar todos los datos del producto con el id solicitado.

    try {
        res.render('gestion', {seccionActual: 'Gestion', name:productId});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}