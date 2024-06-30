const mongoose = require("mongoose")

const itemSchema = mongoose.Schema({
  name: { type: String, require: true },
  amount: { type: Number, require: true },
  price: { type: Number, require: true },
  category: { type: String, require: true },
  description: { type: String, require: true },
  createdAt: { type: Date },
  updatedAt: { type: Date }
})

module.exports = mongoose.model("Item", itemSchema)