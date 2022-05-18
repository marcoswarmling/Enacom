const router = require('express').Router();

const restaurantController = require('../controllers/restaurantController');
const cartController = require('../controllers/cartController');

router.post('/restaurant/post', restaurantController.createRestaurant);
router.get('/products/:id', restaurantController.getRestaurant);
router.post('/cart', cartController.insertInCart);
module.exports = router;