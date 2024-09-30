const PermissionService = require('../../services/PermissionService');

class PermissionController {

  async getPermissionList(req, res) {
    try {
      const query = req.query;

      const permissionService = new PermissionService();

      const result = await permissionService.getPermissionListService(query);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }
};

module.exports = new PermissionController();