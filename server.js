var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("<h1>Chào tất cả các bạn đến với api vinhtravel!</h1>");
});
require("./routes/User")(app);
require("./routes/Login")(app);
require("./routes/Cart")(app);
require("./routes/GetType")(app);
require("./routes/Category")(app);
require("./routes/Product")(app);
require("./routes/Order")(app);
require("./routes/OrderDetail")(app);
app.use(function (err, req, res, next) {
  res.status(500).send(err);
});
app.listen(process.env.PORT || 777, () => {
  console.log("Chào mừng bạn đến với Backend");
});
