const IRoles = require('../../models/interface/Roles');
const RolesRepository = require('../../repository/RolesRepository');

class RolesService {

  async getRolesService(query) {

    try {
      const operationPromise = await RolesRepository.getRolesRepository(query);
      if (!operationPromise) return { msg: 'Erro ao buscar roles', status: 0 };
      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro ao buscar roles', status: 0 };
    }
  }
};

module.exports = RolesService;
