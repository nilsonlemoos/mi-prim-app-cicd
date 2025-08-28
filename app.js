const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola! Mi primera app con CI/CD funciona XD');
});

//app.listen(PORT, () => {
//    console.log(`Servidor funcionando en http://localhost:${PORT}`);
//});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor funcionando en http://localhost:${PORT}`);
    });
}

module.exports = app;


