const router = require('express').Router();

const restaurantController = require('../controllers/restaurantController');

router.post('/restaurant/post', restaurantController.createRestaurant);
router.get('/products/:id', restaurantController.getRestaurant);

module.exports = router;