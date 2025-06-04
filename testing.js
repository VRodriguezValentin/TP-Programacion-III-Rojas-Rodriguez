const express = require('express') 
const path = require('path');

const app = express();
const port = 3000;

const adminController = require('./controller/adminController');

const datos = adminController.createUser();

console.log(datos)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});