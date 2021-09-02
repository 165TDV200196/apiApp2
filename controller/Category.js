var Category = require("../models").Category;
var Product = require("../models").Product;
exports.create = (req, res) => {
  Category.create(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.getall = (req, res) => {
  Category.findAll(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.getType = (req, res) => {
  var page = req.query.page;
  var id = req.query.id;
  var offsetSize = req.query.offsetSize;
  offsetSize = parseInt(offsetSize);
  id = parseInt(id);
  page = parseInt(page);
  let soLuongBoQua = (page - 1) * offsetSize;
  if ((page, offsetSize)) {
    Product.findAll({
      offset: soLuongBoQua,
      limit: offsetSize,
      where: { CategoryId: id },
    })
      .then((data) => {
        res.json({ data: data });
      })
      .catch((er) => {
        throw er;
      });
  } else {
    Product.findAll({ where: { CategoryId: id } })
      .then((data) => {
        res.json({ data: data });
      })
      .catch((er) => {
        throw er;
      });
  }
};
exports.findone = (req, res) => {
  Category.findOne({ where: { id: req.params.id }, include: [Product] })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.delete = (req, res) => {
  Category.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.update = (req, res) => {
  Category.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
