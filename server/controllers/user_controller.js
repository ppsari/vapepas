const User = require('../models/user');
const createUser= (req,res) => {
  User.find({email:req.body.email,avatar:req.body.user_photos}, (err,users)=> {
    if (err) console.log('err');
//    console.log(users);
//    console.log(users.length)
    if (users.length === 0) {

      let newUser = new User(req.body);
      newUser.save((err,user)=>{
        res.send(err? err : `${user.email} sudah dimasukan` );
      });
    }
    else res.send('dah pernah daftar')


  })
}

const getUsers = (req,res) => {
  User.find((err,users)=>{
    res.send(err? err :users );
  })
}

module.exports = {
  createUser,
  getUsers
}