module.exports = (app) => {
  var User = require("../controller/User");
  var router = require("express").Router();

  router.get("/", User.login);

  app.use("/login", router);
};
