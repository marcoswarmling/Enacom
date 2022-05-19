const cartModels = require("../models/cartModels");

const insertInCart = async (req, res) => {
  await cartModels.insertInCartAProduct(req.body);
  res.status(200).json({ create: "sucessful" });
};

const removeProductInACart = async (req, res) => {
  console.log(req.params.cartId, req.params.productId);
  await cartModels.removeACartProduct(req.params.cartId, req.params.productId);
  res.status(200).json({ delete: "sucessful" });
};

const removeAllProductsInACart = async (req, res) => {
  await cartModels.removeAllCartProducts(req.params.cartId);
  res.status(200).json({ delete: "sucessful" });
};

module.exports = {
  insertInCart,
  removeProductInACart,
  removeAllProductsInACart,
};
