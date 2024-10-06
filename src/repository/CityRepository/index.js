const ICity = require("../../models/interface/City");
const City = require("../../schemas/CitySchema");
const mongoose = require("mongoose");

class CityRepository {
  async insertCityRepository(ICity) {
    try {
      if (!ICity) return { msg: "City undefined or null", status: 0 }

      let operationPromise;
      let filter = {
        $and: [{ name: ICity.name }, { code: ICity.code }],
      }

      operationPromise = await City.findOne({ filter })

      if (!operationPromise || operationPromise.length <= 0) {
        operationPromise = await City.create({
          name: ICity.name,
          code: ICity.code
        })
      }

      if (!operationPromise) return { msg: "Erro ao criar a cidade", status: 0 }

      return {
        msg: "Cidade criada com sucesso",
        status: 1,
        data: operationPromise,
      }
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }

  async getCityRepository(idCity) {
    try {
      if (!mongoose.Types.ObjectId.isValid(idCity)) return { msg: "ID da city undefined or null", status: 0 }

      let operationPromise;

      operationPromise = await City.findOne({ _id: idCity })
      if (!operationPromise) return { msg: "Cidade inexistente", status: 0 }

      return {
        msg: "Cidade encontrada com sucesso",
        status: 1,
        data: operationPromise
      }
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }

  async deleteCityRepository(id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return { msg: "ID da city undefined or null", status: 0 }

      let operationPromise;

      operationPromise = await City.findOne({ _id: id })
      if (!operationPromise || operationPrimise.length <= 0) return { msg: "Cidade inexistente", status: 0 }

      operationPromise = await City.deleteOne({ _id: id })
      if (!operationPromise) return { msg: "Erro ao deletar Cidade", status: 0 }

      return {
        msg: "Cidade deletada com sucesso",
        status: 1,
        data: operationPromise
      }
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }

  async updateCityRepository(idCity) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return { msg: "ID da city inválido ou nulo", status: 0 }

      let operationPromise;

      operationPromise = await City.findOne({ _id: id })
      if (!operationPromise || operationPrimise.length <= 0) return { msg: "Cidade inexistente", status: 0 }

      const result = operationPromise ? operationPromise : null

      if (result) {
        operationPromise = await City.findOneAndUpdate({ _id: id }, {
          name: ICity.name ? ICity.name : "",
          code: ICity.code ? ICity.code : "",
        },
        )
      }

      if (!operationPromise) return { msg: "Erro ao atualizar Cidade", status: 0 }

      return {
        msg: "Cidade atualizada com sucesso",
        status: 1,
        data: operationPromise
      }
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }
}

module.exports = CityRepository;