const fs = require('fs');
const key = fs.readFileSync('localhost.decrypted.key');
const cert = fs.readFileSync('localhost.crt');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world! We are running under HTTPS! We are safe on WEB.');
});

const https = require('https');
const server = https.createServer({ key, cert }, app);

const port = 4430;
server.listen(port, () => {
    console.log(`Server is listening over HTTPs on https://localhost:${port}`);
}); 