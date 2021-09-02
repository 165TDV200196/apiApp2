module.exports = (app) => {
  var Category = require("../controller/Category");
  var router = require("express").Router();

  router.get("/", Category.getType);

  app.use("/getType", router);
};
