const Admin = require('../model/Admin');

exports.createUser = async (req, res) => {
    //express.urlencoded(), los datos estarán en req.body
    const { username, email, password, password2 } = req.body;

    console.log('Datos recibidos del formulario:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Password2:', password2);

    if (!username || !email || !!password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    try {
        if(password === password2) {
            const newUser = new Admin({
                username,
                email,
                password
            });
        }
    } catch (error) {
        console.error(error);
    }
}