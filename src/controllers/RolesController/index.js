const RolesService = require('../../services/RolesService');

class RolesController {
  async getRolesList(req, res) {
    try {
      const query = req.query;

      const RolesService = new RolesService();

      const result = await RolesService.getRolesListService(query);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }
};

module.exports = new RolesController();