const IRoles = require('../../models/interface/Roles');
const Roles = require('../../models/interface/Roles');

class RolesRepository {

  async getRolesRepository(query) {
    try {
      let operationPromise;

      operationPromise = await Roles.find(query);
      if(!operationPromise) return { msg: 'Não existe roles cadastradas', status: 0 };
      
      return { msg: 'Roles listadas com sucesso', status: 1, data: operationPromise };
    } catch (error) {
      return { msg: error.message || error };
    }
  }
};

module.exports = new RolesRepository();