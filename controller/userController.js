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
        res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    try {
        if(userData.password === userData.password2) {
            const newUser = await userService.createUser(userData);
            res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}