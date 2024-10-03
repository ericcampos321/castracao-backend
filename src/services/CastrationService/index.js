const RegisterCastrationRepository = require('../../repository/CastrationRepository');
const ICastration = require('../../models/interface/Castration');


class CastrationService {
  async insertCadsService(ICastration) {
    try {

      let operationPromise;

      const cadsRepository = new RegisterCastrationRepository();

      operationPromise = await cadsRepository.insertCadsRepository(ICastration);
      if(!operationPromise) return { msg: "Erro ao criar castracao", status: 0 }

      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }
}

module.exports = CastrationService;