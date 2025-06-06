const userService = require('../services/userService');

exports.createUser = async (req, res) => {
    //express.urlencoded(), los datos estarán en req.body
    const userData = req.body;

    if (!username || !email || !!password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    try {
        if(password === password2) {
            const newUser = await userService.createUser(userData); 
            res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
