const productService = require('../services/productService');

exports.getLoginPage = (req, res) => {
    let sessionMessage = null;

    if (req.query.message) {
        sessionMessage = decodeURIComponent(req.query.message);
    }

    res.render('login', {
        sessionMessage: sessionMessage,
        loginSuccess: null,
        oldData: {}
    });
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

        res.render('dashboard', {
            username: req.user.username, 
            userId:req.user.id, 
            seccionActual: 'Dashboard', 
            products: products
        });

    } catch (error) {
        console.error('Error al obtener y renderizar productos:', error);
        res.status(500).render('error', { message: 'No se pudieron cargar los productos en este momento.' });
    }
}

// exports.putDashboard = async (req, res) => {
//     const info = req.body;

//     console.log(info);

//     res.status(200).render('dashboard');
// }   