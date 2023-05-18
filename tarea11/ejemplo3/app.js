const http = require('http');

const servidor = http.createServer((req,res)=>{
    console.log('El cliente realizo una peticion');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.end('Fin del llamado');
});

const PUERTO = 3000;
servidor.listen(PUERTO, ()=>{
    console.log(`el servidor esta escuchando ${PUERTO}`);
});