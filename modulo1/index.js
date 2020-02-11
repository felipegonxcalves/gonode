const express = require('express');
const nunjucks = require('nunjucks'); 
// Nunjucks é uma templating engine, uma forma de nós renderizarmos e manipularmos HTML
// com conteúdo Javascript facilmente;

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app, // Aqui fica a variável que está no servidor Express,
    watch: true,
});

app.set("view engine", "njk");

const users = ['Felipe Gonçalves', 'Paulo Roberto', 'Andre Walace'];

app.get('/', (req, res) => {
    return res.render('list', {users});
});

app.get('/new', (req, res) => {
    return res.render("new");
});

app.listen(3000);