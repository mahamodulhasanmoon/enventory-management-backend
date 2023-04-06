const Product = require("../Models/Products")

exports.getProductService = async()=>{
    const products = await Product.find({})
    return products

}

exports.createProductService = async(data)=>{
    const product = await Product.create(data) 
    return product
}


exports.updatedProductService = async(id,data)=>{
    // const result = await Product.updateOne({_id: id}, {$set: data},{runValidators: true})
    const product = await Product.findById(id)
    const result = await product.set(data).save()
    return result
}