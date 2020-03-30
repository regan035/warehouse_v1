const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  itemName: {
    type: String,
    required: true
  },
  modelNumber: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantiy: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Inventory',InventorySchema);