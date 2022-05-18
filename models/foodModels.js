const { connection } = require('./connection');

const insertRestaurant = ({id, name, products}) => {
    return connection()
        .then(db => {
            const collection = db.collection('restaurants');
            return collection.insertOne({
                _id:id,
                name,
                products,
            });
        });
}

module.exports = { insertRestaurant };

