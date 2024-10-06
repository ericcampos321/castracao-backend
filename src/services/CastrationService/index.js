const RegisterCastrationRepository = require('../../repository/CastrationRepository');
const ICastration = require('../../models/interface/Castration');


class CastrationService {
  async insertCadsService(ICastration) {
    try {
      let operationPromise;

      const cadsRepository = new RegisterCastrationRepository();

      operationPromise = await cadsRepository.insertCadsRepository(ICastration);
      if (!operationPromise) return { msg: "Erro ao criar castracao", status: 0 }
      return operationPromise;
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }

  async getCadsService(idCastration) {
    try {
      let operationPrimise;

      const cadsRepository = new RegisterCastrationRepository();

      operationPrimise = await cadsRepository.getCastrationRepository(idCastration);
      if (!operationPrimise) return { msg: "Castracao inexistente", status: 0 }
      return operationPrimise;
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }

  async deleteCadsService(id) {
    try {
      let operationPromise;

      const cadsRepository = new RegisterCastrationRepository();

      operationPromise = await cadsRepository.deleteCasdsRepository(id);
      if (!operationPromise) return { msg: "Erro ao deletar castracao", status: 0 }
      return operationPromise;
    } catch (error) { 
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }

  async updateCadsService(id, data) {
    try {
      let operationPrimise;

      const cadsRepository = new RegisterCastrationRepository();

      operationPrimise = await cadsRepository.updateCadsRepository(id, data);
      if (!operationPrimise) return { msg: "Erro ao atualizar castracao", status: 0 }
      return operationPrimise;
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }
}

module.exports = CastrationService;