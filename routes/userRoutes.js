// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/api/users', userController.findAll);

router.post('/newUser', userController.controllerCreate);

module.exports = router;