const cartModels = require("../models/cartModels");

const insertInCart = async (req, res) => {
  await cartModels.insertInCartAProduct(req.body);
  res.status(200).json({ create: "sucessful" });
};

const removeProductInACart = async (req, res) => {
  await cartModels.removeACartProduct(req.params.cartId, req.params.productId);
  res.status(200).json({ delete: "sucessful" });
};

const removeAllProductsInACart = async (req, res) => {
  await cartModels.removeAllCartProducts(req.params.cartId);
  res.status(200).json({ delete: "sucessful" });
};

const getCart = async (req, res) => {
  const cart = await cartModels.getCart(req.params.cartId);
  res.status(200).json(cart);
};

const modifyACartProduct = async (req, res) => {
  await cartModels.modifyACartProduct(
    req.params.cartId,
    req.params.productId,
    req.body.quantity
  );
  res.status(200).json({ update: "sucessful" });
};

module.exports = {
  insertInCart,
  removeProductInACart,
  removeAllProductsInACart,
  getCart,
  modifyACartProduct,
};
