const bcrypt = require('bcrypt');
const UserSchema = require('../../models/User');

class UserRepository {

  // Private method to hash the password
  _hashPassword(password) {
    if (!password) {
      throw new Error("Password is required for hashing");
    }
    const saltRounds = 7;
    return bcrypt.hashSync(password, saltRounds);
  }

  // Method to insert a user into the database
  async insertUserRepository(user) {
    try {
      if (!user || !user.password || !user.confirmpassword) {
        return { msg: "Parâmetros de usuário ou senha estão indefinidos ou nulos", status: 0 };
      }

      if (user.password !== user.confirmpassword) {
        return { msg: "Senha e confirma o senha não coincidem", status: 0 };
      }

      let operationPromise;

      // Check if there is already a user with the same email
      operationPromise = await UserSchema.find({ email: user.email });
      if (operationPromise.length >= 1) {
        return { msg: "Já existe um usuário com esse email", status: 0 };
      }

      // Hash the password before saving the user
      user.password = this._hashPassword(user.password);
      user.confirmpassword = this._hashPassword(user.confirmpassword);

      // Create the new user
      operationPromise = await UserSchema.create(user);
      if (!operationPromise) {
        return { msg: "Erro ao criar usuário", status: 0 };
      }

      return {
        msg: "Usuário criado com sucesso",
        status: 1,
        data: operationPromise,
      };
    } catch (err) {
      return { msg: err.message || err };
    }
  }
}

// Delete the user



module.exports = new UserRepository();
