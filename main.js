const ejs = require('ejs');
const path = require('path');

const express = require('express') 
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/Estatico", express.static(__dirname + "/Estatico"))

const port=3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
