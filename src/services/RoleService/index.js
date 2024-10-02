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

  async insertRolesService(IRoles) {

    try {
      const operationPromise = await RolesRepository.insertRoleRepository(IRoles);
      if (!operationPromise) return { msg: 'Erro ao criar roles', status: 0 };
      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro ao criar roles', status: 0 };
    }
  }

  async updateRolesService(id, IRoles) {

    try {
      const operationPromise = await RolesRepository.updateRoleRepository(id, IRoles);
      if (!operationPromise) return { msg: "Erro ao atualizar roles", status: 0 };
      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro ao atualizar roles', status: 0 };
    }
  }

  async deleteRolesService(id) {
    
    try {
      const operationPromise = await RolesRepository.deleteRoleRepository(id);
      if (!operationPromise) return { msg: "Erro ao deletar roles", status: 0 };
      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro ao deletar roles', status: 0 };
    }
  }
};

module.exports = RolesService;
