const mongoose = require('mongoose'); 
const { model, Schema } = mongoose;   
const ICity = require('../models/interface/City');
const mongooseSequence = require('mongoose-sequence')(mongoose);  


const City = new Schema(
  {
    name: {
      type: String,
    },
    code: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)


City.plugin(mongooseSequence, { inc_field: 'idCity' });
module.exports = model('City', City)