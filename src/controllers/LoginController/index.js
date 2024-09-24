const LoginService = require('../../services/LoginService');

class LoginController {

  async login(req, res) {
    try {
      const data = req.body;
      const loginService = new LoginService();

      const result = await loginService.loginService(data);

      return res.status(result.status === 1 ? 200 : 400).json(result);
    } catch (error) {
      return res.status(400).json({ msg: error.message || error });
    }
  }
}

module.exports = new LoginController();