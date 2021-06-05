const express = require("express");
const app = express();

// Dizendo para o express usar o EJS como View engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    //res.send("Bem vindo ao meu site!");
    res.render("principal/perfil");
});

app.listen(8080, () => {
    console.log("App rodando!");
})