const Permission = require('../../schemas/PermissionSchema');
const IPermission = require('../../models/interface/Permission');
const { default: mongoose } = require('mongoose');

class PermissionRepository {

  async getPermissionListRepository(query) {

    try {
      let operationPromise;
      operationPromise = await Permission.find(query).populate('permissions')

      if (!operationPromise || operationPromise <= 0)
        return { msg: 'Nenhum permissions cadastrada', status: 0 }

      return {
        msg: "permissions cadastrada com sucesso ",
        status: 1,
        data: operationPromise,
      }
    } catch (error) {
      return { msg: error.message || error }
    }
  }

  async insertPermissionRepository(IPermission) {
    try {
      if (!IPermission) return { msg: "Permission undefined or null", status: 0 }

      let operationPromise;

      operationPromise = await Permission.find({
        name_permission: IPermission.name_permission,
      });
      if (!operationPromise || operationPromise.length >= 1)
        return { msg: "Permission ja existe", status: 0 }

      operationPromise = await Permission.create(IPermission)
      if (!operationPromise)
        return { msg: "Erro ao criar permission", status: 0 }

      return {
        msg: "Permission criada com sucesso",
        status: 1,
        data: operationPromise,
      }
    } catch (error) {
      return { msg: error.message || error }
    }
  }

  async updatePermissionRepository(id, IPermission) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return { msg: "ID do permission undefined or null", status: 0 }

      let operationPromise;
      operationPromise = await Permission.findOne({ _id: id });

      if (!operationPromise || operationPromise.length <= 0)
        return { msg: "Permission inexistente", status: 0 }

      operationPromise = await Permission.findOneAndUpdate({ _id: id }, {
        name_permission: IPermission.name_permission,
        permissions: IPermission.permissions,
      },
      )

      if (!operationPromise)
        return { msg: "Erro ao atualizar permission", status: 0 }

      operationPromise = await Permission.findOne({ _id: id });
      if (!operationPromise) return { msg: "Erro ao buscar permission atualizada", status: 0 }

      return {
        msg: "Permission atualizada com sucesso",
        status:1,
        data: operationPromise,
      }
    } catch (error) {
      return { msg: error.message || error }
    }
  }

  async deletePermissionRepository(id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return { msg: "ID do permission undefined or null", status: 0 }

      let operationPromise;

      operationPromise = await Permission.findOne({ _id: id });
      if (!operationPromise || operationPromise.length <= 0)
        return { msg: "Permission inexistente", status: 0 }

      operationPromise = await Permission.deleteOne({ _id: id });
      if (!operationPromise) return { msg: "Erro ao deletar permission", status: 0 }

      return {
        msg: "Permission deletada com sucesso",
        status: 1,
        data: operationPromise,
      }
    } catch (error) {
      return { msg: error.message || error }
    }
  }
};

module.exports = new PermissionRepository();