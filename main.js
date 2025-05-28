const express = require('express') 
const path = require('path');

const app = express()
const port=3000

const routes = require('./Rutas/routes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/Vistas');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'Estatico')));

app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
