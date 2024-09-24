const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const mongooseSequence = require('mongoose-sequence')(mongoose);

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
    image: { type: String },
    permissions: {
      type: mongoose.Types.ObjectId,
      ref: 'Permissions'
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(mongooseSequence, { inc_field: 'id' });
module.exports = model('User', userSchema)