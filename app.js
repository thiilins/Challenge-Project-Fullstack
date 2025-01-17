/**
 *
 * Importando e inicializando o módulo 'express'
 * e definindo as variáveis necessárias
 *
 */
const express = require("express");
const app = express();
const port = 3000;
const maintenance = false;
/**
 *
 * Importando os módulos
 *
 */
const methodOverride = require("method-override");
const indexRoutes = require("./src/routes");
const path = require("path");
const logger = require("morgan");
/**
 *
 * Definindo a view engine e configurando
 * a pasta views
 *
 */
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
/**
 *
 * Habilitando e Adicionando Middlewares
 *
 */
// Habilitando o Log via console
app.use(logger("dev"));

// Definindo a Pasta Public
app.use(express.static(path.resolve("src", "public")));
// Habilitando JSON  e configurando recebimento de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Configurando o methodOverride (para trabalhar com metodos HTTP via forms)
app.use(methodOverride("_method")); //*?_method=PUT
/**
 *
 *Instanciando Rotas
 *
 */
app.use(indexRoutes);
// Manutenção
app.use((req, res, next) => {
  !maintenance ? next() : res.status(503).render("pages/maintenance");
});
// erro 404
app.use((req, res, next) => {
  res.status(404).send("404 - Page not Found!");
  next();
});
//Definindo escuta de porta para iniciar o servidor
app.listen(port, () => {
  console.log(`O Servidor está rodando em http://localhost:${port}`);
});
