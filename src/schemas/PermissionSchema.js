const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');
const mongooseSequence = require('mongoose-sequence')(mongoose);
const IPermission = require('../models/interface/Permission');

const Permission = new Schema(
  {
    name_permission: {
      type: String,
    },
    permission: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'IRoles',
      },
    ],
  },
  {
    timestamps: true,
  },
);

Permission.plugin(mongooseSequence, { inc_field: 'idPermission' });
module.exports = model('Permission', Permission);


