const express = require("express");
const app = express();

// Dizendo para o express usar o EJS como View engine
app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    let empresa = "Javascript";
    let exibirMsg = false;
    //res.send("Bem vindo ao meu site!");
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: empresa,
        inscritos: 1,
        msg: exibirMsg
    });
});

app.listen(8080, () => {
    console.log("App rodando!");
})