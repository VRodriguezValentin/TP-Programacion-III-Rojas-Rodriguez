const homeController = {
    getLoginPage: (req, res) => {
        res.render('login');
    },
    getCreatePage: (req, res) => {
        res.render('createAccount');
    },
    getGestionPage: (req, res) => {
        res.render('gestion');
    },
    getAdminPage: (req, res) => {
        res.render('admin');
    }
};

module.exports = homeController;