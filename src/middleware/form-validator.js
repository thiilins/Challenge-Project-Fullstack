const { check, validationResult, body } = require("express-validator");
const validateContactForm = [
  check("email").isEmail().withMessage("Enter a valid email!"),
  check("name").isLength({ min: 3 }).withMessage("Name cannot be empty"),
  check("message").notEmpty().withMessage("Message cannot be empty"),
];

/*
check("nome-do-campo").
.notEmpty() => Verifica se não esta vazio
.isEmail() => Verifica se é um um e-mail
.isInt() => Verifica se é um número inteiro
.isLength({min:5, max:10}) => Verifica o tamanho dos dados
.withMessage('Mensagem a ser exibida para o usuário')
.bail() => Caso falhe interrompe a validação do campo


#### INSERIR NA ROTA
validateContact
 */

module.exports = validateContactForm;
