const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path"); // Adicione esta linha para importar o módulo path
const app = express();
const rota_turma = require("./routes/rota_turma");
const rota_aluno = require("./routes/rota_aluno");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração da pasta para arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Configuração do Handlebars
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Rota principal
app.get('/', (req, res) => {
  res.render('home');
});

// Rotas
app.use("/rota_turma", rota_turma);
app.use("/rota_aluno", rota_aluno);

// Início do servidor
const PORT = 8081;
app.listen(PORT, () => {
  console.log("Servidor Rodando");
});
