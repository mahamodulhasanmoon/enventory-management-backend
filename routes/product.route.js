const express = require('express');
const { getProducts, createProduct, updateProduct, bulkUpdateProduct, deleteProduct } = require('../controllers/product.Controler');

const router = express.Router();

router.route('/products')
.get(getProducts)
.post(createProduct)

router.route('/products/bulk-update')
.patch(bulkUpdateProduct)

router.route('/products/:id')
.patch(updateProduct)
.delete(deleteProduct)



module.exports = router