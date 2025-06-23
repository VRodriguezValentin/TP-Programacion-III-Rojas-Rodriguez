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

    try {
        const productFinded = await productService.getProductByID(productId);
        res.render('gestion', {seccionActual: 'Gestion', mode: 'M', product: productFinded[0]});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.editProduct = async (req, res) => {
    const product = req.body;

    if (product.flag == 1) {
        product.modelo = null;
    }
    
    product.imagen = '/nadaporahora';

    try {
        const productFinded = await productService.updateProduct(product);
        res.redirect('/dashboard');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}