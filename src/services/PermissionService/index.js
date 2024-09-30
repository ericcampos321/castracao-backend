const IPermission = require("../../models/interface/Permission");
const PermissionRepository = require("../../repository/PermissionRepository");

class PermissionService {

  async getPermissionListService(query) {
    try {

      const operationPromise = await PermissionRepository.getPermissionListRepository(query);
      if(!operationPromise) return { msg: 'Erro ao buscar permissoes', status: 0 };
      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro ao buscar permissoes', status: 0 };
    }
  }
};

module.exports = PermissionService;