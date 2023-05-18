const http = require('http');

const servidor = http.createServer((req,res)=>{
    res.end('Hola mundo');
});

const PUERTO = 3000;

servidor.listen(PUERTO, ()=>{
    console.log(`el servidor esta escuchando ${PUERTO}`);
});