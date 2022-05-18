const foodModels = require("../models/foodModels");

const createRestaurant = async (req, res) => {

  const restaurant = {
    id: 1,
    name: "EnaFood",
    products: [
      {
        id: 1,
        productName: "Coxinha",
        price: 10,
        quantity: 10,
      },
      {
        id: 2,
        productName: "Pizza",
        price: 20,
        quantity: 10,
      },
      {
        id: 3,
        productName: "Refrigerante",
        price: 5,
        quantity: 10,
      },
    ],
  };

  await foodModels.insertRestaurant(restaurant);

  res.status(200).json({"enviado": "ok"});
};

module.exports = { createRestaurant };
