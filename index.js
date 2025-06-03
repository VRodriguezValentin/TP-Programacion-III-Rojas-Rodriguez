const express = require('express') 
const path = require('path');

const app = express();
const port = 3000;

const renderRoutes = require('./routes/renderRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', renderRoutes);
app.use('/', apiRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});