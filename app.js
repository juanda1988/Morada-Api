const express = require('express');
const app = express();
app.use(express.json());
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hola API GET');
});

app.post('/', (req, res) => {
    res.send('Hola API POST');
});

//http://localhost:3301?nombre=juan
app.get('/saludar', (req, res) => {
    res.send(`Hola ${req.query.nombre}`);
});

//body (data)
app.post('/sumar', (req, res) => {
    console.log('req', req);
    const suma = req.body.numero1 + req.body.numero2;
    res.send(`la suma es ${suma}`);
});

//url
app.post('/info/:idUser/:idAccount', (req, res) => {
    console.log('req', req);
    res.send(`ID ${req.params.idUser}, cuenta ${req.params.idAccount}`)
});

app.listen(port, () => {
    console.log('server running');
});