// Importar Express
const express = require('express');

// Crear instancia de la aplicación Express
const app = express();

// Definir ruta para mostrar el mensaje
app.get('/hola-mundo', (req, res) => {
    res.send("Hola Mundo");
});

app.listen(3000, () => {   console.log('Servidor iniciado en puerto 3000'); });