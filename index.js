const express = require('express') 
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

const renderRoutes = require('./routes/renderRoutes');
const userRoutes   = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const productRoutes = require('./routes/productRoutes');
const ventasRoutes = require('./routes/ventasRoutes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', renderRoutes);
app.use('/', userRoutes);
app.use('/', ticketRoutes);
app.use('/', productRoutes);
app.use('/', ventasRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});