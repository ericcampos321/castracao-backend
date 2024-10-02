const { default: mongoose } = require('mongoose');
const IRoles = require('../../models/interface/Roles');
const Roles = require('../../schemas/RolesSchema');
class RolesRepository {

  async getRolesRepository(query) {
    try {
      let operationPromise;

      operationPromise = await Roles.find(query);
      if (!operationPromise) return { msg: 'Não existe roles cadastradas', status: 0 };

      return { msg: 'Roles listadas com sucesso', status: 1, data: operationPromise };
    } catch (error) {
      return { msg: error.message || error };
    }
  }

  async insertRoleRepository(IRoles) {
    try {
      let operationPromise;

      operationPromise = await Roles.findOne({
        $and: [{ name_role: Roles.name_role }, { code_role: Roles.code_role }],
      });
      if (!operationPromise || operationPromise.length >= 1) return { msg: 'Role ja existe', status: 0 };

      operationPromise = await Roles.create(IRoles);
      if (!operationPromise) return { msg: 'Erro ao criar role', status: 0 };

      return {
        msg: 'Role criada com sucesso',
        status: 1,
        data: operationPromise
      }
    } catch (error) {
      return { msg: error.message || error };
    }
  }

  async updateRoleRepository(id, IRoles) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return { msg: 'ID undefined or null', status: 0 };

      let operationPromise;
      operationPromise = await Roles.findOne({ _id: id });
      if (!operationPromise || operationPromise.length <= 0) return { msg: 'Role inexistente', status: 0 };

      operationPromise = await Roles.findOneAndUpdate({ _id: id }, {
        name_role: IRoles.name_role,
        code_role: IRoles.code_role,
      },
        { new: true }
      );

      if (!operationPromise) return { msg: 'Erro ao atualizar role', status: 0 };

      return {
        msg: 'Role atualizada com sucesso',
        status: 1,
        data: operationPromise,
      }
    } catch (error) {
      return { msg: error.message || error };
    }
  }

  async deleteRoleRepository(id) {
    try {
      if (!id) return { msg: 'ID undefined or null', status: 0 };

      let operationPromise;

      operationPromise = await Roles.findOne({ _id: id });
      if (!operationPromise || operationPromise.length >= 1) return { msg: 'Role inexistente', status: 0 };

      operationPromise - await Roles.deleteOne({ _id: id });
      if (!operationPromise) return { msg: 'Erro ao deletar role', status: 0 };

      return {
        msg: 'Role deletada com sucesso',
        status: 1,
        data: operationPromise,
      }

    } catch (error) {
      return { msg: error.message || error };
    }
  }
};

module.exports = new RolesRepository();