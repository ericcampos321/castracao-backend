const UserRepository = require('../../repository/UserRepository/index');

class UserService {
  async createUser(userData) {
    try {
      // Chama o repositório para inserir o usuário
      const result = await UserRepository.insertUserRepository(userData);
      return result;
    } catch (error) {
      return { msg: error.message || 'Erro ao criar usuário', status: 0 };
    }
  }

  async updateUserService(id, user) {
    try {
      // Chama o repositório para atualizar o usuário
      const operationPromise = await UserRepository.updateUserRepository(id, user);
      if (!operationPromise) return { msg: 'Erro ao atualizar usuário', status: 0 };
      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro ao atualizar usuário', status: 0 };
    }
  }
}

module.exports = UserService;