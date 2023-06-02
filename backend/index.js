const express = require('express');

const PORT = 3001;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

console.log('You can now view backend in the browser.');
console.log('');
console.log('\x1b[32m%s\x1b[0m','   Local:            http://localhost:3001');
console.log('\x1b[33m%s\x1b[0m','   On Your Network:  http://172.18.0.2:3001');
console.log('');
console.log('...');

app.listen(PORT, HOST);