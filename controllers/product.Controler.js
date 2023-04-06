const Product = require("../Models/Products")
const { getProductService, createProductService, updatedProductService, bulkUpdateProductService, deleteProductService } = require("../services/product.services")

exports.createProduct = async (req, res, next) => {

    try {
      // save or create
  
       const result =await createProductService(req.body)
  
       result.logger()
  
  
      res.status(200).json({
        status: 'success',
        msg: 'Data inserted successfully!',
        data: result
      })
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: ' Data is not inserted ',
        error: error.message
      })
    }
  
  
  
  }

  exports.getProducts = async(req,res,next) => {

    try {
      const products =await getProductService()
      res.status(200).json({
        status: 'success',
        data: products
      })
      
    } catch (error) {
      res.status(400).json({message: error.message});
    }

  }

  exports.updateProduct = async(req,res,next) => {
    try {
const {id } = req.params
  result = await updatedProductService(id, req.body)

res.status(200).json({
  status: 'success',
  msg: 'Data inserted successfully!',
  data: result
})
      
    } catch (error) {
      res.status(400).json({
        status: 'failed',
        message: 'could not update product',
        error: error.message
      })
    }
  }

  exports.bulkUpdateProduct = async(req,res,next) => {
    try {

  result = await bulkUpdateProductService(req.body)

res.status(200).json({
  status: 'success',
  msg: 'Data inserted successfully!',
  data: result
})
      
    } catch (error) {
      res.status(400).json({
        status: 'failed',
        message: 'could not update product',
        error: error.message
      })
    }
  }

  exports.deleteProduct = async(req,res,next) => {
    try {

      console.log(req.params)
      const result = await deleteProductService(req.params.id)
      res.status(200).json({
        status: 'success',
        msg: 'Data deleted successfully!',
        data: result
      })
      
    } catch (error) {
      res.status(400).json({
        status: 'failed',
        message: 'could not delete product',
        error: error.message
      })
    }
  }