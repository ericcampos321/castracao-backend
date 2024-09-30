const IUser = require('../../models/interface/User');
const UserSchema = require('../../schemas/UserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class LoginRepository {
  async login(user) {
    try {
      if (!user) return { msg: 'User undefined or null', status: 0 };

      // Busca o usuário no banco de dados baseado no email
      const operationPromise = await UserSchema.findOne({
        email: user.email,
      }).populate('permissions');

      if (!operationPromise || operationPromise.length <= 0)
        return { msg: 'Usuario não encontrado com esse email', status: 0 };

      const result = operationPromise ? operationPromise : null;

      // Verificação da senha usando bcrypt
      const isValidPassword = bcrypt.compareSync(user.password, result.password);
      if (!isValidPassword)
        return { msg: 'Password não confere com email de usuario', status: 0 };

      // Caso a senha esteja correta
      else if (isValidPassword) {
        const mySecret = process.env.JWT_SECRET;
        const token = jwt.sign({ email: result.email }, mySecret, { expiresIn: '24h' });

        return {
          msg: 'Usuario logado com sucesso',
          status: 1,
          idUser: result._id,
          token,
          auth: true,
          permission: result.permissions.name_permission,
        };
      }
    } catch (err) {
      return { msg: err.message || err };
    }
  }
}

module.exports = LoginRepository;

