const http = require('http');

http.createServer((req, res) => {
    console.log(req); // req é usado para pegar as informações da requisição
    return res.end('Hello World'); // res é o objeto usado para devolver uma resposta ao cliente
}).listen(3000);