var Product = require("../models").Product;
var OrderDetail = require("../models").OrderDetail;
var User = require("../models").User;
exports.create = (req, res) => {
  Product.create(req.body, { include: ["cart"] })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.findall = (req, res) => {
  Product.findAll()
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.getProductUser = (req, res) => {
  Product.findAll({
    include: [
      { model: OrderDetail, attributes: ["id"], include: [{ model: User }] },
    ],
  })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.getSale = (req, res) => {
  Product.findAll({ order: [["price", "ASC"]], limit: 6 })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.getPopular = (req, res) => {
  Product.findAll({ order: [["price", "DESC"]], limit: 6 })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.findone = (req, res) => {
  Product.findOne({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.delete = (req, res) => {
  Product.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.update = (req, res) => {
  Product.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
