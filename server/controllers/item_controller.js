const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vapepas');
const Item = require('../models/item.js');


const getAllItem = (req,res) => {
  Item.find((err,items)=>{
    res.send(err? err : items);
  })
}

const findByCategory = (req,res) => {
  console.log('called '+req.params.cat)

  Item.find({category: (req.params.cat) }, (err,items) => {
    res.send(err? err : items);
  })
}

const findOneItem = (req,res) => {
  Item.findOne(
    {_id: (req.params.id)},
    (err,item)=>{
      res.send(err? err : item);
    }
  )
}

const updateItem = (req,res) => {
  Item.findOne(
    {_id: (req.params.id)},
    (err,item)=>{
      if (!err) {
        item = {
          name: req.body.name,
          price:req.body.price,
          stock:req.body.stock,
          category: req.body.category,
          descr: req.body.descr,
          img: req.body.img
        }
        item.save();
      }
    }
  )
}

const destroyItem = (req,res) => {
  Item.remove({_id: (req.params.id)}, (err,result) => {
    res.send(err? err : `Item sudah dihapus` );
  })
}

const insertItem = (req,res) => {
  let newItem = new Item(req.body);
  newItem.save((err,item)=>{
    res.send(err? err : `${item.name} sudah dimasukan` );
  });
}

module.exports = {
  getAllItem,
  findOneItem,
  updateItem,
  destroyItem,
  insertItem,
  findByCategory
}