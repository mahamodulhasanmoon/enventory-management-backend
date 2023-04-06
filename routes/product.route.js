const express = require('express');
const { getProducts, createProduct, updateProduct } = require('../controllers/product.Controler');

const router = express.Router();

router.route('/products')
.get(getProducts)
.post(createProduct)

router.route('/products/:id')
.patch(updateProduct)

module.exports = router