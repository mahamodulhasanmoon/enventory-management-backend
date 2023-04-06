const { json } = require("express")
const Product = require("../Models/Products")
const { getProductService, createProductService, updatedProductService, bulkUpdateProductService, deleteProductService, bulkDeleteProductService } = require("../services/product.services")

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
      let filters = {...req.query}

      // for status

      const excludeFields = ['page', 'limit', 'sort']
      excludeFields.forEach(field =>  delete filters[field] )

      // for sorting low to high
      let filterString = JSON.stringify(filters)
      filterString = filterString.replace(/\b(gt|gte|lt|lte)\b/g , match=> `$${match}`)
filters = JSON.parse(filterString)




// sorting

const queries = {};

if (req.query.sort) {
  const sortBy = req.query.sort.split(',').join(' ')
 queries.sortBy = sortBy

  
}

if (req.query.page) {
  const {page=1, limit=10} = req.query;  

      const skip = (page - 1)*parseInt(limit);
      queries.skip=skip;
      queries.limit=parseInt(limit);

  
}



      const products =await getProductService(filters,queries)
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
      if(!result.deletedCount) {
        return res.status(400).json({
          status: 'failed',
          message: `id doesn't matched`,
          
        })
    
      }
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

  exports.bulkDeleteProduct = async(req,res,next) => {
    try {

  const result = await bulkDeleteProductService(req.body)
  
  

  if(!result.deletedCount) {
    return res.status(400).json({
      status: 'failed',
      message: `id doesn't matched`,
      error: error.message
    })

  }

res.status(200).json({
  status: 'success',
  msg: 'Data deleted successfully!',
  data: result
})
      
    } catch (error) {
      res.status(400).json({
        status: 'failed',
        message: 'could not deleted product',
        error: error.message
      })
    }
  }