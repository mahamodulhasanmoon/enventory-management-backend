const express = require('express');
const { getProducts, createProduct } = require('../controllers/product.Controler');

const router = express.Router();

router.route('/products')
.get(getProducts)
.post(createProduct)


module.exports = router