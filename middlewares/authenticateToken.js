require('dotenv').config();

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        console.log('No hay token en las cookies...');
        return res.redirect('/login?message=Su%20sesi%C3%B3n%20ha%20expirado');
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_PASS);
        req.user = decoded;
        console.log('Token verificado exitosamente para usuario:', req.user.username);
        next();
    } catch (err) {
        console.error('Error al verificar token:', err.message);
        res.clearCookie('access_token');
        return res.redirect('/login?message=Su%20sesi%C3%B3n%20ha%20expirado');
    }
}

module.exports = authenticateToken;