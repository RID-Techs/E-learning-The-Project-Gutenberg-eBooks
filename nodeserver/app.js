// Simple serveur nodejs
/* const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
    console.log('Le serveur tourne sur http://' + hostname + ':' + port);
}); */

// Serveur nodejs avec express
const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


const port = 3000;
const hostname = '127.0.0.1';

app.get('/test-server', (req, res) => {
    res.json('Le serveur tourne');
});

app.post('/testpost', (req, res) => {
    const postData = req.body;
    console.log(req.body.param);
    res.json('Données reçues: ' + JSON.stringify(req.body.param));
});





app.listen(port, hostname, () => {
    console.log('Le serveur tourne sur http://' + hostname + ':' + port);
});

