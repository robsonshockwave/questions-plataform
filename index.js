const express = require("express");
const app = express();

// Dizendo para o express usar o EJS como View engine
app.set('view engine', 'ejs');
// Dizendo que quer utilizar um arquivbo estático
app.use(express.static('public'));

app.get("/", (req, res) => {
    //res.send("Bem vindo ao meu site!");
    res.render("index");
});

app.listen(8080, () => {
    console.log("App rodando!");
})