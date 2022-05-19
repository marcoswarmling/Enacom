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

const getAProductName = (RestaurantId, ProductId) => {
    const RestaurantIdInt = parseInt(RestaurantId);
    const ProductIdInt = parseInt(ProductId);
    return connection()
        .then(db => {
            const collection = db.collection('restaurants');
            return collection.findOne({
                _id:RestaurantIdInt,
                products: {
                    $elemMatch: {
                        id:ProductIdInt,
                    }
                }
            },{
                projection:{
                    _id:0,
                    products:{"productName.$":1},
                    
                }
            });
        });
}


module.exports = { insertRestaurant, getRestaurant, getAProductName};

