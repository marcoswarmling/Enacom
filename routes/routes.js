const router = require('express').Router();

const restaurantController = require('../controllers/restaurantController');

router.post('/restaurant/post', restaurantController.createRestaurant);

module.exports = router;