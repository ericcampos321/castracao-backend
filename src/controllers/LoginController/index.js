const { Request, Response } = require('express');
const LoginService = require('../../services/LoginService');

class LoginController {

  async login (req, res) {
    try {
      const data = req.body;
      const loginService = new LoginService();

      const result = await loginService.loginService(userData);

      res.status(result.status === 1 ? 200 : 400).json(result);
    } catch (error) {
      res.status(400).json({ msg: error.message || error });
    }
  }
}

module.exports = new LoginController();

