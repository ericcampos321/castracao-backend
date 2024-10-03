const { model, Schema } = require('mongoose');
const City = require('../models/interface/City');
const mongoose = require('mongoose');
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