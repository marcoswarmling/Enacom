const { getAProductName } = require("../models/restaurantModels");
const { getACartProduct, getCart } = require("../models/cartModels");

const productNotExists = async (req, res, next) => {
  const { restaurantId, productId } = req.body;
  getAProductName(restaurantId, productId)
    .then((product) => {
      if (!product) {
        res.status(404).json({ error: "not found" });
      } else {
        next();
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const productAlreadyExists = async (req, res, next) => {
  const { cartId, productId } = req.body;
  getACartProduct(cartId, productId)
    .then((product) => {
      if (product) {
        res.status(409).json({ error: "already exists" });
      } else {
        next();
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const productToUpdateOrRemoveNotExists = async (req, res, next) => {
  const { cartId, productId } = req.params;
  getACartProduct(cartId, productId)
    .then((product) => {
      if (!product) {
        res.status(404).json({ error: "not found" });
      } else {
        next();
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  productNotExists,
  productAlreadyExists,
  productToUpdateOrRemoveNotExists,
};
