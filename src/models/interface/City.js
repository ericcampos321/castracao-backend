const ICity = {
  _id: String,
  idCity: Number,
  name: String,
  code: String,
};

const ICityFilter = {
  filter: {
    name: String,
    code: String,
  }
};

module.exports = { ICity, ICityFilter }