const mongoose = require('mongoose');
mongoose.connect('monggodb://localhost/vapepas');
const Schema = mongoose.Schema;
let transactionSchema = new Schema({
  email: String,
  total: Number,
  itemList: [
    {
      item: [{type:Schema.Types.ObjectId, ref:'Item'}],
      qty: Number,
      grandTotal: Number
    }],
});

let Transaction = mongoose.model('Transaction',transactionSchema);

module.exports = Transaction;