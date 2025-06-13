const productService = require('../services/productService');

exports.getLoginPage = (req, res) => {
    res.render('login');
    // try {
    //     res.render('login');
    // } catch (error) {
    //     console.error('Error al obtener y renderizar productos:', error);
    //     res.status(500).render('error', { message: 'No se pudieron cargar los productos en este momento.' });
    // }
}

exports.getCreatePage = (req, res) => {
    res.render('createAccount');
    // try {
    //     res.render('createAccount');
    // } catch (error) {
    //     console.error('Error al obtener y renderizar productos:', error);
    //     res.status(500).render('error', { message: 'No se pudieron cargar los productos en este momento.' });
    // }
}

exports.getGestionPage = (req, res) => {
    res.render('gestion');
    // try {
    //     res.render('gestion');
    // } catch (error) {
    //     console.error('Error al obtener y renderizar productos:', error);
    //     res.status(500).render('error', { message: 'No se pudieron cargar los productos en este momento.' });
    // }
}

exports.getProductsPage = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.render('admin', {products: products});
    } catch (error) {
        console.error('Error al obtener y renderizar productos:', error);
        res.status(500).render('error', { message: 'No se pudieron cargar los productos en este momento.' });
    }
}