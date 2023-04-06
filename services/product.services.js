const Product = require("../Models/Products")

exports.getProductService = async(query)=>{
    const products = await Product.find(query)
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


exports.bulkUpdateProductService = async(data)=>{
    // const result = await Product.updateMany({_id: data.ids},data.data, {runValidators: true})
    // return result

    // bulk update separate product

    const products = [];
    data.ids.forEach(product => {
       products.push( Product.updateOne({_id: product.id},product.data))
       
    })
    const result = await Promise.all(products)
    return result
}

exports.deleteProductService = async(id)=>{

     const result = await Product.deleteOne({_id: id},)
    return result
}

exports.bulkDeleteProductService = async(data)=>{
    const result = await Product.deleteMany({_id: data.ids})
    return result


}