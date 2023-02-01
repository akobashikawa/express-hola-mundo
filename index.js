// Importar Express
const express = require('express');

// Crear instancia de la aplicación Express
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

// Definir ruta para mostrar el mensaje
app.get('/hola-mundo', (req, res) => {
    // res.send("Hola Mundo");
    res.render('hola-mundo');
});

 // Escuchar peticiones en el puerto especificado
app.listen(3000, () => {   console.log('Servidor iniciado en puerto 3000'); });