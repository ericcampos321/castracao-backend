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
}

module.exports = new CityController()