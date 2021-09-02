module.exports = (app) => {
  var Order = require("../controller/Order");
  var router = require("express").Router();

  router.post("/", Order.create);
  router.get("/", Order.findall);
  router.get("/:id", Order.findone);
  router.delete("/:id", Order.delete);
  router.patch("/:id", Order.update);

  app.use("/orders", router);
};
