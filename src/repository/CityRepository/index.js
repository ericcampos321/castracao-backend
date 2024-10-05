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

      if (!operationPromise) return { msg: "Erro ao criar city", status: 0 }

      return {
        msg: "City criada com sucesso",
        status: 1,
        data: operationPromise,
      }
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }
}

module.exports = new CityRepository()