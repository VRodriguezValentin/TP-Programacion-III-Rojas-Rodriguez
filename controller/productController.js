const productService = require('../services/productService');

exports.findAll = async (req, res) => {
    try {
        const getProducts = await productService.getAllProducts();
        res.status(200).send(getProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.findAllWithPagination = async (req, res) => {
    try {
        const getProduct = await productService.getAllProductsWithPagination(req.params.tipo, req.params.offset);
        res.status(200).send(getProduct);
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

exports.controllerCreateSeq = async (req, res) => {
    const productData = req.body;

    if (req.file !== undefined) {
        productData.imagen = req.file.filename;
    }

    try {
        await productService.createProductSeq(productData);
        res.redirect('/dashboard');
    } catch (error) {
        res.render('gestion', {seccionActual: 'Gestion', errorMessage: error.message, mode: 'C', product: null});
    }
}

exports.enableProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        await productService.updateStatus(productId, true);
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
        await productService.updateStatus(productId, false);
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
        var productFinded = await productService.getProductByID(productId);
        res.render('gestion', {seccionActual: 'Gestion', errorMessage: null, mode: 'M', product: productFinded[0]});
    } catch (error) {
        res.render('gestion', {seccionActual: 'Gestion', errorMessage: error.message, mode: 'M', product: productFinded[0]});
    }
}

exports.editProduct = async (req, res) => {
    const product = req.body;

    if (req.file) {
        product.imagen = req.file.filename;
    } else {
        product.imagen = product.imagen_existente;
    }

    if (product.flag == 1) {
        product.modelo = null;
        product.color = null;
        product.almacenamiento = null;
        product.ram = null;
        product.tipo_producto = 'accesorio';
    } else {
        product.tipo = null;
        product.compatibilidad = null;
        product.tipo_producto = 'celular';
    }

    console.log(product);

    try {
        const productFinded = await productService.updateProduct(product);
        res.redirect('/dashboard');
    } catch (error) {
        res.render('gestion', {seccionActual: 'Gestion', errorMessage: error.message, mode: 'M', product: product});
    }
}