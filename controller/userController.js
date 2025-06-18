const userService = require('../services/userService');

exports.findAll = async (req, res) => {
    try {
        const getUsers = await userService.getAllUsers();
        res.status(200).send(getUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.findById = async (req, res) => {
    try {
        const getUser = await userService.getUserByID(req.params.id);
        res.status(200).send(getUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.controllerCreate = async (req, res) => {
    const userData = req.body;

    if (!userData.username || !userData.email || !userData.password || !userData.password2) {
        return res.render('createAccount', {
            errorMessage: 'Todos los campos son obligatorios.',
            oldData: userData
        });
    }

    if (userData.password !== userData.password2) {
        return res.render('createAccount', {
            errorMessage: 'Las contraseñas no coinciden.',
            oldData: userData
        });
    }

    try {
        const newUser = await userService.createUser(userData);
        res.render('login', {sessionMessage: 'Usuario creado con exito!'});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.loginSuccess = async (req, res) => {
    const loginData = req.body;

    try {
        const valLogin = await userService.validateLogin(loginData);
        res.render('login', {sessionMessage:null, loginSuccess:true, oldData:{}});
    } catch (error) {
        res.render('login', {sessionMessage: error, loginSuccess:null, oldData: loginData});
    }

    //Agregar logica de token y cookies :D
}