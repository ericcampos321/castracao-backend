const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');
const IRoles = require('../../models/interface/Roles');
const mongooseSequence = require('mongoose-sequence')(mongoose);

const Role = new Schema(
  {
    name_role: {
      type: String,
    },
    code_role: {
      type: Number,
    },
},
{
  timestamps: true,
},
);


Role.plugin(mongooseSequence, { inc_field: 'idRole' });
module.exports = model('Role', Role)