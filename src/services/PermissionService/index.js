const IPermission = require("../../models/interface/Permission");
const PermissionRepository = require("../../repository/PermissionRepository");

class PermissionService {

  async getPermissionListService(query) {
    try {

      const operationPromise = await PermissionRepository.getPermissionListRepository(query);
      if (!operationPromise) return { msg: 'Erro ao buscar permissoes', status: 0 };
      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro ao buscar permissoes', status: 0 };
    }
  }

  async insertPermissionService(IPermission) {
    try {

      const operationPromise = await PermissionRepository.insertPermissionRepository(IPermission);
      if (!operationPromise) return { msg: 'Erro ao criar permissoes', status: 0 };
      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro ao criar permissoes', status: 0 };
    }
  }

  async updatePermissionService(id, IPermission) {
    try {

      const operationPromise = await PermissionRepository.updatePermissionRepository(id, IPermission);
      if (!operationPromise) return { msg: 'Erro ao atualizar permissoes', status: 0 };
      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro ao atualizar permissoes', status: 0 };
    }
  }

  async deletePermissionService(id) {
    try {

      const operationPromise = await PermissionRepository.deletePermissionRepository(id);
      if (!operationPromise) return { msg: 'Erro ao deletar permissoes', status: 0 };
      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro ao deletar permissoes', status: 0 };
    }
  }
};

module.exports = PermissionService;