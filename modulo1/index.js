const express = require('express');

const app = express();

const logMiddleware = (req, res, next) => {
    console.log(
        `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method} `
    );

    // CASO QUEIRA ADICIONAR UM VALOR DENTRO DO REP PRA SER CHAMADO EM ALGUMA ROTA
    req.appName = 'GoNode';

    return next(); // Colocando esse next a gente está falando ao Middleware que a gente não deve interceptar o fluxo da requisição
};

// POSSO FAZER TODAS AS ROTAS DA APLICAÇÃO USAREM UM DETERMINADO MIDDLEWARE
// app.use(logMiddleware);

app.get('/', logMiddleware, (req, res) => {
    // veja que pego o valor appName passado na Middleware
    return res.send(`Bem-vindo ao ${req.appName}, ${req.query.name}`);
});

app.get("/nome/:name", (req, res) => {
    // return res.send(`Bem-vindo, ${req.params.name}`);
    return res.json({
        message: `Bem-vindo, ${req.params.name}`
    });
});

app.listen(3000);