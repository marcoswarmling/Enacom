const { connection } = require('./connection');

const insertInCardAProduct = function(productId, quantity) {
    return connection()
        .then(db => {
            const collection = db.collection('cart');
            return collection.insertOne({
                id:productId,
                quantity,
            });
        });
}