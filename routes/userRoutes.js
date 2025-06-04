// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const conectDbProductos = require('../config/db');
const adminController = require('../controller/adminController');

// router.post('/', async(req, res) => {
//     const db = await conectDbProductos();
//     const datos = adminController.createUser();
// });

module.exports = router;