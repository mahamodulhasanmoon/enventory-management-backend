const Product = require("../Models/Products")

exports.getProductService = async()=>{
    const products = await Product.find({})
    return products

}