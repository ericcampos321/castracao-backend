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

  async getCads(req, res) {
    try {
      const { idCastration } = req.params;

      const cadsService = new CastrationService();
      const result = await cadsService.getCadsService(idCastration);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }
  
  async updateCads(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const cadsService = new CastrationService();
      const result = await cadsService.updateCadsService(id, data);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

  async deleteCads(req, res) {
    try {
      const { id } = req.params;

      const cadsService = new CastrationService();
      const result = await cadsService.deleteCadsService(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }
}

module.exports = new CastrationController();