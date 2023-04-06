const express = require('express');
const { getProducts, createProduct, updateProduct, bulkUpdateProduct, deleteProduct, bulkDeleteProduct } = require('../controllers/product.Controler');

const router = express.Router();

router.route('/products')
.get(getProducts)
.post(createProduct)

router.route('/products/bulk-update')
.patch(bulkUpdateProduct)
router.route('/products/bulk-delete')
.delete(bulkDeleteProduct)

router.route('/products/:id')
.patch(updateProduct)
.delete(deleteProduct)



module.exports = router