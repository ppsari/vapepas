const mongoose = require('mongoose');
mongoose.connect('monggodb://localhost/vapepas');
const Schema = mongoose.Schema;
let itemSchema = new Schema({
  name: String,
  stock: String,
  price: Number,
  category: String,
  descr : String,
  img: String
});

let Item = mongoose.model('Item',itemSchema);

module.exports = Item
