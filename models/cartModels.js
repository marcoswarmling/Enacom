const { connection } = require('./connection');

const insertInCartAProduct = async (object) => {
    const cartId = object.cartId
    const restaurantId = object.restaurantId
    const productId = object.products.productId
    const quantity = object.products.quantity
return connection()
        .then(db => {
            const collection = db.collection('cart');
            return collection.insertOne({
                _id:cartId,
                restaurantId,
                product: {
                    productId,
                    quantity,
                },
            });
        });
}

module.exports = {
    insertInCartAProduct
}