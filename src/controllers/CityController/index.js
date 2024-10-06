const CityService = require("../../services/CityService");

class CityController {
  async insertCity(req, res) {
    try {
      let { id } = req.params;

      const cityService = new CityService();

      const result = await cityService.insertCityService(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

  async getCity(req, res) {

    try {

      let { id } = req.params;
      const query = req.query;

      const cityService = new CityService();

      const result = await cityService.getCityService(id, query);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

  async deleteCity(req, res) {
    try {
      let { id } = req.params;

      const cityService = new CityService();
      const result = await cityService.deleteCityService(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

  async updateCity(req, res) {
    try {
      let { id } = req.params;
      const data = req.body;

      const cityService = new CityService();
      const result = await cityService.updateCityService(id, data);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

}

module.exports = new CityController()