console.log('Mi Server');

// Importar Express
const express = require('express');

// Crear instancia de la aplicación Express
const app = express();

// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 3000

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Definir ruta para mostrar el mensaje
app.get('/holamundo', (req, res) => {
    res.send("Hola Mundo");
});

app.get('/hola', (req, res) => {
    res.render('hola', {mensaje: 'Hola'});
});

app.post('/hola', (req, res) => {
    const nombre = req.body.nombre;
    const mensaje = `Hola ${nombre}!`;
    res.render('hola', {mensaje: mensaje});
});

 // Escuchar peticiones en el puerto especificado
app.listen(PORT, () => {   console.log(`Servidor iniciado en puerto ${PORT}`); });