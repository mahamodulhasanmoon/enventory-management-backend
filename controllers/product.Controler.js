const Product = require("../Models/Products")

exports.createProduct = async (req, res, next) => {

    try {
      // save or create
  
       const result = await Product.create(req.body) 
  
       result.logger()
  
  
      // const product = new Product(req.body)
  
      // // instance creation--> Do something --> save()
  
      // if (product.quantity == 0) {
      //   product.status = 'out-of-stock'
      // }
  
      // const result = await product.save()
  
      res.status(200).json({
        status: 'success',
        messgae: 'Data inserted successfully!',
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
      const products = await Product.find({})
      res.status(200).json({
        status: 'success',
        data: products
      })
      
    } catch (error) {
      res.status(400).json({message: error.message});
    }

  }