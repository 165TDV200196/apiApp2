module.exports = (app) => {
  var Cart = require("../controller/Cart");
  var router = require("express").Router();

  router.post("/", Cart.create);
  router.get("/", Cart.findall);
  router.get("/:id", Cart.findone);
  router.delete("/:id", Cart.delete);
  router.patch("/:id", Cart.update);

  app.use("/carts", router);
};
