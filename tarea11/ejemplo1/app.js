const http = require('http');

const servidor = http.createServer((req, resp)=>{
    resp.end('Hola mundo')
});

servidor.listen(3000, ()=>{
    console.log('El servidor esta escuchando')
});