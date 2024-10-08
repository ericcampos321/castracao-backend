const RoleService = require('../../services/RoleService');

class RolesController {
  async getRolesList(req, res) {
    try {
      const query = req.query;

      const roleService = new RoleService();

      const result = await roleService.getRolesService(query);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

  async insertRoles(req, res) {
    try {
      const data = req.body

      const roleService = new RoleService();

      const result = await roleService.insertRolesService(data);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

  async updateRoles(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      
      const roleService = new RoleService();

      const result = await roleService.updateRolesService(id, data);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

  async deleteRoles(req, res) {
    try {
      const { id } = req.params;

      const roleService = new RoleService();

      const result =  await roleService.deleteRolesService(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }
};

module.exports = new RolesController();