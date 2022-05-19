const router = require("express").Router();

const restaurantController = require("../controllers/restaurantController");
const cartController = require("../controllers/cartController");
const cartMiddleware = require("../middleware/cartMiddleware");

router.post("/restaurant/post", restaurantController.createRestaurant);
router.get("/products/:id", restaurantController.getRestaurant);
router.post(
  "/cart",
  cartMiddleware.productNotExists,
    cartMiddleware.productAlreadyExists,
  cartController.insertInCart
);
router.delete("/cart/:cartId/:productId", cartController.removeProductInACart);
router.delete("/cart/:cartId", cartController.removeAllProductsInACart);
router.get("/cart/:cartId", cartController.getCart);
module.exports = router;
