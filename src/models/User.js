const mongoose = require('../db/connect.js');
const { Schema } = mongoose;

const IUser = mongoose.model(
  'IUser',
  new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    permissions: { type: String },
  },
    { timestamps: true }
  )
);

module.exports = IUser;

