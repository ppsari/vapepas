const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vapepas');
let Transaction = require('../models/transaction');

const listTransaction = (req,res) => {
  console.log('tes')
  Transaction.find().populate('itemList.item')
  .exec((err,transaction)=> {res.send(err? err : transaction);})
}

const findOneTransaction = (req,res) => {
  Transaction.findOne(
    {_id: (req.params.id)}
  ).populate('itemList.item')
  .exec((err,transaction)=> {res.send(err? err : transaction);})
}


const destroyTransaction = (req,res) => {
  Transaction.remove({_id:(req.params.id)}, (err,result) => {
    res.send(err? err : `Transaction sudah dihapus` );
  })
}

const insertTransaction = (req,res) => {
  let transaction = {}
  if (typeof req.body.email !== 'undefined' && req.body.email !=='') transaction.email = req.body.email;
  if (typeof req.body.total !== 'undefined' && req.body.total !=='') transaction.total = req.body.total;

  if (typeof req.body.itemList !== 'undefined') {
    transaction.itemList = JSON.parse(req.body.itemList);
  }


  // res.send(transaction)
  let newTransaction = new Transaction(transaction);

  newTransaction.save((err,newtransaction)=>{
    console.log(err)
    res.send(err? err : `${newtransaction._id} sudah dimasukan` );
  });

}

module.exports = {
  listTransaction,
  findOneTransaction,
  destroyTransaction,
  insertTransaction
}