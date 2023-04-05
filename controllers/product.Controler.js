const Product = require("../Models/Products")
const { getProductService, createProductService } = require("../services/product.services")

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