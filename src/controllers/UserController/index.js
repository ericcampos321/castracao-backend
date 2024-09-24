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
}

module.exports = new UserController();
