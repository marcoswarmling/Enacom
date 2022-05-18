const foodModels = require("../models/restaurantModels");

const createRestaurant = async (req, res) => {

  const restaurant = {
    id: 1,
    name: "EnaFood",
    products: [
      {
        id: 1,
        productName: "Coxinha",
      },
      {
        id: 2,
        productName: "Pizza",
      },
      {
        id: 3,
        productName: "Refrigerante",
      },
    ],
  };

  await foodModels.insertRestaurant(restaurant);

  res.status(200).json({"enviado": "ok"});
};

const getRestaurant = async (req, res) => {
    const restaurant = await foodModels.getRestaurant(req.params.id);
    res.status(200).json(restaurant.products);
};



module.exports = { createRestaurant, getRestaurant };
