const http = require('http');

const servidor = http.createServer((req, resp) =>{
    console.log('El cliente realizo una peticion');
    resp.end('<h1>Hola mundo</h1>')
});


servidor.listen(3000, ()=>{
    console.log('El servidor esta escuchando');
});

