const { check, validationResult, body } = require("express-validator");
const { Contact } = require("../models");
const IndexController = {
  index(req, res) {
    res.render("home");
  },
  async contact(req, res) {
    try {
      const { name, email, message } = req.body;
      const errorsList = validationResult(req);
      if (errorsList.isEmpty()) {
        const newContact = await Contact.create({
          name,
          email,
          message,
        });
        return res.redirect("/");
      }
      console.log(errorsList);
      return res.render("home", { errors: errorsList.errors });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = IndexController;
