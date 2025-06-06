// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const conectDbProductos = require('../config/db');
const userController = require('../controller/userController');

// router.post('/', async(req, res) => {
//     const db = await conectDbProductos();
//     const datos = userController.createUser();
// });

module.exports = router;