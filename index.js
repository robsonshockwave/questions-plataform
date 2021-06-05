const express = require("express");
const app = express();

// Dizendo para o express usar o EJS como View engine
app.set('view engine', 'ejs');
// Dizendo que quer utilizar um arquivbo estático
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    let empresa = "Javascript";
    let exibirMsg = false;

    let produtos = [
        { nome: "Doritos", preco: 3.14 },
        { nome: "Fandangos", preco: 1.99},
        { nome: "Abacaxi", preco: 5.04 },
        { nome: "RedBull", preco: 6.05}
    ];

    //res.send("Bem vindo ao meu site!");
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: empresa,
        inscritos: 1,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080, () => {
    console.log("App rodando!");
})