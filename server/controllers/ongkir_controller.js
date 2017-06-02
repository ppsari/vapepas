const rajaongkir = require('../models/rajaongkir')

const getProvince = (req,res) => { rajaongkir.getProvince(req,res) }
const findProvince = (req,res) => { rajaongkir.findProvince(req,res) }
const getCities = (req,res) => { rajaongkir.getCities(req,res) }
const getSubdistricts = (req,res) => { rajaongkir.getSubdistricts(req,res) }
const getCost = (req,res) => { rajaongkir.getCost(req,res) }

module.exports = {
  getProvince,
  findProvince,
  getCities,
  getSubdistricts,
  getCost
}