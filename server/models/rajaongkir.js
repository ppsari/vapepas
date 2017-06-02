const ongkir = require('rajaongkir-node-js')

const getProvince = (req,res) => {

    console.log('get province @model')
  ongkir.getAllProvince()
  .then( (err,provinces) => {
     res.send(err? err : provinces.rajaongkir.results)
  })
}

const findProvince = (req,res) => {
  ongkir.getProvince(req.params.id)
  .then(prov=>{res.send(prov.rajaongkir.results)})
}

const getCities = (req,res) => {
  //province id
  ongkir.getCities(req.params.id)
  .then(cities => { res.send(cities.rajaongkir.results) })
}

const getSubdistricts = (req,res) => {
  ongkir.getSubdistricts(req.params.id)
  .then( subdistricts=> {
    console.log(subdistricts)
      res.send(subdistricts.rajaongkir.results)
  })
}
const getCost = (req,res)=>{
  let dataObj = {
    origin: req.body.origin, // tipe string id kota atau kecamatan
    destination: req.body.destination, // tipe string id kota atau kecamatan
    weight: req.body.weight // tipe string berat kiriman
    }
  ongkir.getCost(dataObj)
  .then( cost => {
      res.send(cost.rajaongkir)
  })
}

module.exports = {
  getProvince,
  findProvince,
  getCities,
  getSubdistricts,
  getCost
}