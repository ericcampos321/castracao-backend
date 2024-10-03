const CastrationService = require('../../services/CastrationService');

class CastrationController {
  async insertCads(req, res) {
    try {
      const data = req.body;
     
      const cadsService = new CastrationService();

      const result = await cadsService.insertCadsService(data);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }
}

module.exports = new CastrationController();