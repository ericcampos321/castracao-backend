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

  async insertPermission(req, res) {
    try {
      const data = req.body;

      const permissionService = new PermissionService();

      const result = await permissionService.insertPermissionService(data);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

  async updatePermission(req, res) {
    try {  
      const { id } = req.params;
      const data = req.body;
    
      const permissionService = new PermissionService();

      const result = await permissionService.updatePermissionService(id, data);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

  async deletePermission(req, res){
    try {
      const { id } = req.params;

      const permissionService = new PermissionService();

      const result = await permissionService.deletePermissionService(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }
};

module.exports = new PermissionController();