const CityRepository = require("../../repository/CityRepository");
const ICity = require("../../models/interface/City");


class CityService {
  async insertCityService(ICity) {

    try {
      let operationPromise;

      let cityRepository = new CityRepository();
      operationPromise = await cityRepository.insertCityRepository(ICity)
    } catch (error) {
      return { msg: error.message || error }
    }
  }
}

module.exports = CityService;