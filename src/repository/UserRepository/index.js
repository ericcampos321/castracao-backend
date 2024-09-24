const bcrypt = require('bcrypt');
const UserSchema = require('../../schemas/UserSchema');

class UserRepository {
  // Método privado para hash da senha
  _hashPassword(password) {
    if (!password) {
      throw new Error("Senha é necessária para realizar o hash");
    }
    const saltRounds = 7;
    return bcrypt.hashSync(password, saltRounds);
  }

  // Método para inserir um usuário no banco de dados
  async insertUserRepository(user) {
    try {
      if (!user || !user.password || !user.confirmpassword) {
        return { msg: "Parâmetros de usuário ou senha estão indefinidos ou nulos", status: 0 };
      }

      if (user.password !== user.confirmpassword) {
        return { msg: "As senhas informadas não coincidem", status: 0 };
      }

      let operationPromise;

      // Verifica se já existe um usuário com o mesmo email
      operationPromise = await UserSchema.find({ email: user.email });
      if (operationPromise.length >= 1) {
        return { msg: "Já existe um usuário com esse email", status: 0 };
      }

      // Faz o hash da senha antes de salvar o usuário
      user.password = this._hashPassword(user.password);
      user.confirmpassword = this._hashPassword(user.confirmpassword);

      // Cria o novo usuário
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

  // Exclui o usuário

  


module.exports = new UserRepository();