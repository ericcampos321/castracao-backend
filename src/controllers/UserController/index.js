const IUser = require('../../schemas/UserSchema.js');
const UserService = require('../../services/UserService');

class UserController {
  async createUser(req, res) {
    try {
      const userData = req.body;

      const userService = new UserService();

      const result = await userService.createUser(userData);
      res.status(result.status === 1 ? 201 : 400).json(result);
    } catch (ex) {
      res.status(500).json({ Error: ex.message || 'Erro interno do servidor' });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const userService = new UserService();

      const result = await userService.updateUserService(id, data);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      const userService = new UserService();

      const result = await userService.deleteUserService(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

  async getUser(req, res) {
    try {
      const { idUser } = req.params;

      const userService = new UserService();

      const result = await userService.getUserService(idUser);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ Error: error.message || 'Erro interno do servidor' });
    }
  }

};

module.exports = new UserController();
