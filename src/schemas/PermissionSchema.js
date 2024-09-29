const mongooseSequence = require('mongoose-sequence')(mongoose);
const IPermission = require('../../models/interface/Permission');
import mongoose, { model, Schema } from 'mongoose';

const permissionSchema = new Schema(
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

permissionSchema.plugin(mongooseSequence(mongoose), { inc_field: 'idPermission' });
module.exports = model('Permission', permissionSchema);
