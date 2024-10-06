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

  getCityService(query) {
    try {
      let operationPromise;

      let cityRepository = new CityRepository();
      operationPromise = cityRepository.getCityRepository(query);
      return operationPromise
    } catch (error) {
      return { msg: error.message || error }
    }
  }

  async deleteCityService(id) {
    try {
      let cityRepository = new CityRepository();

      return await cityRepository.deleteCityRepository(id)
    } catch (error) {
      return { msg: error.message || error }
    }
  }

  async updateCityService(idCity) {
    try {
      let cityRepository = new CityRepository();

      return await cityRepository.updateCityRepository(idCity)
    } catch (error) {
      return { msg: error.message || error }
    }
  }
}

module.exports = CityService;