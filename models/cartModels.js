const { connection } = require("./connection");
const { ObjectId } = require("mongodb");

const insertInCartAProduct = async (object) => {
  const cartId = object.cartId;
  const restaurantId = object.restaurantId;
  const productId = object.productId;
  const quantity = object.quantity;
  return connection().then((db) => {
    const collection = db.collection("cart");
    return collection.insertOne({
      _id: ObjectId(),
      cartId,
      restaurantId,
      productId,
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



module.exports = {
  removeACartProduct,
  insertInCartAProduct,
  removeAllCartProducts,
};
