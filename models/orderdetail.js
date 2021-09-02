"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
      });
      this.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
      });
      this.belongsTo(models.Order);
    }
  }
  OrderDetail.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  );
  return OrderDetail;
};
