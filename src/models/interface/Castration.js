const ICastration = {
  _id: String,
  idCastration: Number,
  animal: [
    {
      species: String,
      sexy: String,
      name: String,
      color: String,
      size: Number,
      year: String,
      chip: String,
      intercorrencia: String,
      nis: String,
      image: Array
    },
  ],
  name_tutor: String,
  cpf: String,
  phone: String,
  cep: String,
  city: {
    name: String,
    code: String,
  },
  address: String,
  date: String,
  hour: String,
  description: String,
  createdAt: String,
  updatedAt: String,
  bloco: String,
  apto: String,
};

const ICastrationFilter = {
  filter: {
    name_tutor: String,
    cpf: String,
    city: String,
    tutor: String,
  }
};

module.exports = { ICastration, ICastrationFilter }