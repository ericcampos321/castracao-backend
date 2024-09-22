const mongoose = require('../db/connect.js');
const { Schema } = mongoose;

const ICastration = mongoose.model(
  'ICastration',
  new Schema({
    idC: {
      type: Number,
    },
    animal: [
      {
        species: { type: String, required: true },
        sexy: { type: String, required: true },
        name: { type: String, required: true },
        color: { type: String, required: true },
        size: { type: String, required: true },
        year: { type: String, required: true },
        chip: { type: String, required: true },
        intercorrencia: { type: String, },
        nis: { type: String, required: true },
        image: { type: Array, required: true },
      },
    ],
    name_tutor: { type: String, required: true },
    cpf: { type: String, required: true },
    phone: { type: String, required: true },
    cep: { type: String, required: true },
    city: {
      name: { type: String, required: true },
      code: { type: String, required: true },
    },
    address: { type: String, required: true },
    district: { type: String, required: true },
    number_residence: { type: Number, required: true },
    bloco: { type: String },
    apto: { type: String },
  },
    { timestamps: true }
  )
);

const ICastrationFilter = mongoose.model(
  'ICastrationFilter',
  new Schema({
    filter:{
      name_tutor: { type: String },
      city: { type: String },
      cpf: { type: String },
      tutor: { type: String }
    }
  })
);

