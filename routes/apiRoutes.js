const express = require('express');
const router = express.Router(); // Instancia de Router
const appApi = require('../app/app');

router.get('/api/productos', appApi.getProducts);

module.exports = router;