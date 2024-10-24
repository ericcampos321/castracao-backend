const IUser = {
  id_: String,
  idUser: Number,
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
  image: String,
  permissions: String,
};

const IUserFilter = {
  filter: {
    name: String,
    email: String,
  }
};

module.exports = { IUser, IUserFilter };

