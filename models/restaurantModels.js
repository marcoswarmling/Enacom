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

const getRestaurant = (id) => {
   const idInt = parseInt(id);
    return connection()
        .then(db => {
            const collection = db.collection('restaurants');
            return collection.findOne({
                _id:idInt,
            });
        });
}

module.exports = { insertRestaurant, getRestaurant };

