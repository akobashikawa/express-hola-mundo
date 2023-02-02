// Importar Express
const express = require('express');

// Crear instancia de la aplicación Express
const app = express();

// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 8080

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// Definir ruta para mostrar el mensaje
app.get('/hola-mundo', (req, res) => {
    // res.send("Hola Mundo");
    // res.render('hola-mundo');
    res.json({
        mensaje: 'Hola Mundo'
    });
});

// Definir ruta para mostrar el mensaje
app.get('/hola-mundo', (req, res) => {
    // res.send("Hola Mundo");
    res.render('hola-mundo');
});

 // Escuchar peticiones en el puerto especificado
app.listen(3000, () => {   console.log(`Servidor iniciado en puerto ${PORT}`); });