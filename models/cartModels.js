const { connection } = require("./connection");
const { ObjectId } = require("mongodb");
const { getAProductName } = require("./restaurantModels");

const insertInCartAProduct = async (object) => {
  const cartId = parseInt(object.cartId);
  const restaurantId = parseInt(object.restaurantId);
  const productId = parseInt(object.productId);
  const quantity = parseInt(object.quantity);
  const product = await getAProductName(restaurantId, productId);
  const productName = product.products[0].productName;
  return connection().then((db) => {
    const collection = db.collection("cart");
    return collection.insertOne({
      _id: ObjectId(),
      cartId,
      restaurantId,
      productId,
      productName,
      quantity,
    });
  });
};

const removeACartProduct = async (cartId, productId) => {
  const cartIdInt = parseInt(cartId);
  const productIdInt = parseInt(productId);
  return connection().then((db) => {
    const collection = db.collection("cart");
    return collection.deleteMany({
      cartId: cartIdInt,
      productId: productIdInt,
    });
  });
};

const removeAllCartProducts = async (cartId) => {
  const cartIdInt = parseInt(cartId);
  return connection().then((db) => {
    const collection = db.collection("cart");
    return collection.deleteMany({
      cartId: cartIdInt,
    });
  });
};

const getCart = async (cartId) => {
  const cartIdInt = parseInt(cartId);
  return connection().then((db) => {
    const collection = db.collection("cart");
    return collection
      .find({
        cartId: cartIdInt,
      })
      .toArray();
  });
};

const getACartProduct = async (cartId, productId) => {
  const cartIdInt = parseInt(cartId);
  const productIdInt = parseInt(productId);
  return connection().then((db) => {
    const collection = db.collection("cart");
    return collection.findOne({
      cartId: cartIdInt,
      productId: productIdInt,
    });
  });
};

const modifyACartProduct = async (cartId, productId, quantity) => {
  const cartIdInt = parseInt(cartId);
  const productIdInt = parseInt(productId);
  const quantityInt = parseInt(quantity);
  return connection().then((db) => {
    const collection = db.collection("cart");
    return collection.updateOne(
      {
        cartId: cartIdInt,
        productId: productIdInt,
      },
      {
        $set: {
          quantity: quantityInt,
        },
      }
    );
  });
};

module.exports = {
  removeACartProduct,
  insertInCartAProduct,
  removeAllCartProducts,
  getCart,
  getACartProduct,
  modifyACartProduct,
};
