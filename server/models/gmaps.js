require('dotenv').config();
const direction = require('google-maps-direction');
// const weather = require('openweather-apis');

const getDirection = (req,res) => {
  // let origin =
  let destination = req.query.destination.split(',');
  let search = {}
  for(let key in req.query ) search[key] = req.query[key];
  console.log(search);
  direction(search)
  .then((result)=>{

    res.send(result);
  });

}

module.exports = {getDirection}

// http://maps.googleapis.com/maps/api/directions/json?origin=-6.2187662,106.7519429&destination=-6.2243333333,106.8425000000&mode=driving&avoid=tolls&units=metrtics
