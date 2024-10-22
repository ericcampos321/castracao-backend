const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const mongooseSequence = require('mongoose-sequence')(mongoose);

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    permissions: {
      type: mongoose.Types.ObjectId,
      ref: 'Permissions'
    },
  },
  {
    timestamps: true,
  },
);

userSchema.plugin(mongooseSequence, { inc_field: 'idUser' });
module.exports = model('User', userSchema)