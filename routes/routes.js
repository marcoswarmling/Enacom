const router = require("express").Router();

const restaurantController = require("../controllers/restaurantController");
const cartController = require("../controllers/cartController");
const cartMiddleware = require("../middleware/cartMiddleware");

router.get("/products/:id", restaurantController.getRestaurant);
router.get("/cart/:cartId", cartController.getCart);

router.post("/restaurant/post", restaurantController.createRestaurant);
router.post(
  "/cart",
  cartMiddleware.productNotExists,
  cartMiddleware.productAlreadyExists,
  cartController.insertInCart
);

router.delete(
  "/cart/:cartId/:productId",
  cartMiddleware.productToUpdateOrRemoveNotExists,
  cartController.removeProductInACart
);
router.delete("/cart/:cartId", cartController.removeAllProductsInACart);

router.put(
  "/cart/:cartId/:productId",
  cartMiddleware.productToUpdateOrRemoveNotExists,
  cartController.modifyACartProduct
);

module.exports = router;
