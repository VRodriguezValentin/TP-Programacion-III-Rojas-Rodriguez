// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

router.post('/', adminController.createUser);

module.exports = router;