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
  }};

module.exports = new RolesRepository();