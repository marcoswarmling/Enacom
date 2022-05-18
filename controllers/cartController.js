const cartModels = require("../models/cartModels");

const insertInCart = async (req, res) => {
    await cartModels.insertInCartAProduct(req.body);
    res.status(200).json({create: "sucessful"});
}

module.exports = {
    insertInCart
}