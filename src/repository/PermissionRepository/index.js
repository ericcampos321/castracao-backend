const Permission = require('../../schemas/PermissionSchema');
const IPermission = require('../../models/interface/Permission');

class PermissionRepository {

  async getPermissionListRepository(query) {

    try {
      let operationPromise;
      operationPromise = await Permission.find(query).populate('permission');

      if (!operationPromise || operationPromise <= 0)
        return { msg: 'Nenhum permissions cadastrada', status: 0 }

      return {
        msg: "permissions cadastrada com sucesso ",
        status:1,
        data: operationPromise,
      }
    } catch (error) {
      return { msg: error.message || error }
    }
  }
};

module.exports = new PermissionRepository();