const express = require("express");
const app = express();
const cors = require("cors");
const { Schema } = require("mongoose");

// middleware
app.use(express.json());
app.use(cors());

// schema design

const productsSchema = Schema({
  name:{
    type: String,
    required: [true,"please select a product name"],
    trim:true, //remove specing
    unique: true,
    minLength:[4, "name must be minimum 4 characters"],
    maxLength:[30, "name must be maximum 30 characters"],
  },
  description:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
    min:[0 , "price must be at least 0"],
  },
  unit:{
    type:String,
    required:true,
    enum:["KG", "Ltr", "Pcs"]

  },
})

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;
