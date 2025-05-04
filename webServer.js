const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'txt', 'season': 'spring' });

    res.end('This is your body');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log('Listening on port', PORT);
});