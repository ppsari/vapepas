const mongoose = require('mongoose');
mongoose.connect('monggodb://localhost/vapepas');
const Schema = mongoose.Schema;
let userSchema = new Schema({
  email : String,
  avatar: String
});

let User = mongoose.model('User',userSchema);

module.exports = User