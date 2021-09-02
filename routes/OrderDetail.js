module.exports = (app) => {
  var OrderDetail = require("../controller/OrderDetail");
  var router = require("express").Router();

  router.post("/", OrderDetail.create);
  router.get("/", OrderDetail.findall);
  router.get("/:id", OrderDetail.findone);
  router.delete("/:id", OrderDetail.delete);
  router.patch("/:id", OrderDetail.update);

  app.use("/orderDetails", router);
};
