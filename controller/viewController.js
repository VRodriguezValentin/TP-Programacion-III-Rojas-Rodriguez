const productService = require('../services/productService');

exports.getLoginPage = (req, res) => {
    res.render('login', {sessionMessage:null, loginSuccess:null, oldData:{}});
}

exports.getCreatePage = (req, res) => {
    res.render('createAccount', {errorMessage:null, oldData:{}});
}

exports.getGestionPage = (req, res) => {
    res.render('gestion', {seccionActual: 'Gestion'});
}

exports.getProductsPage = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.render('dashboard', {seccionActual: 'Dashboard', products: products});
    } catch (error) {
        console.error('Error al obtener y renderizar productos:', error);
        res.status(500).render('error', { message: 'No se pudieron cargar los productos en este momento.' });
    }
}