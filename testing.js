const jwt = require('jsonwebtoken');
require('dotenv').config();

const payload = {user:newAdmin.username, email:newAdmin.email}

this.generateJWT(payload);

async function generateJWT(payload) {
    const token = jwt.sign(payload, process.env.TOKEN_PASS, { expiresIn: '300s', algorithm: 'HS256' });
    return token;
}