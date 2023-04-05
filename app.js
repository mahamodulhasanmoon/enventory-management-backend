const express = require("express");
const app = express();
const cors = require("cors");
const { Schema, model } = require("mongoose");

// middleware
app.use(express.json());
app.use(cors());

// schema design

const productSchema = Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this product."],
    trim: true,
    unique: [true, "Name must be unique"],
    minLength: [3, "Name must be at least 3 characters."],
    maxLenght: [100, "Name is too large"],
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    rquired: true,
    min: [0, "Price can't be negative"],
  },
  unit: {
    type: String,
    required: true,
    enum: {
      values: ["kg", "litre", "pcs"],
      message: "unit value can't be {VALUE}, must be kg/litre/pcs"
    }
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "quantity cant be negative"],
    validate: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if (isInteger) {
          return true
        } else {
          return false
        }
      }
    },
    message: "Qunatity must be an integer"
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["in-stock", "out-of-stock", "discontinued"],
      message: "status can't be {VALUE}"
    }
  },
}, {
  timestamps: true,
})

// make schema model 

const Product = model('Product', productSchema)

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.post('/api/v1/product', async (req, res, next)=>{

  try {
    // const result = await Product.create(req.body) 

        const product = new Product(req.body)

    // instance creation--> Do something --> save()

    if (product.quantity == 0) {
      product.status = 'out-of-stock'
    }

    const result = await product.save()

    res.status(200).json({
      status: 'success',
      messgae: 'Data inserted successfully!',
      data: result
    })

  }catch(err) {
    res.status(400).json({
      status: 'fail',
      message: ' Data is not inserted ',
      error: err.message
    })
  }

})


module.exports = app;
