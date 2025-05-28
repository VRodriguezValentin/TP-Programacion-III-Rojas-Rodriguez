const homeController = {
    getLoginPage: (req, res) => {
        res.render('login');
    },
    getCreatePage: (req, res) => {
        res.render('createAccount');
    }
};

module.exports = homeController;