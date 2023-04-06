const express = require('express');
const { getProducts, createProduct, updateProduct, bulkUpdateProduct } = require('../controllers/product.Controler');

const router = express.Router();

router.route('/products')
.get(getProducts)
.post(createProduct)

router.route('/products/bulk-update')
.patch(bulkUpdateProduct)

router.route('/products/:id')
.patch(updateProduct)



module.exports = router