const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, max: 100 },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    quantity: { type: Number, required: true },
  });


// Export the model
module.exports = mongoose.model('Item', ItemSchema);