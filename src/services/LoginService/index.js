const LoginRepository = require("../../repository/LoginRepository");
const IUser = require("../../models/interface/User");

class LoginService {
  async loginService(user) {
    try {
      if (!user) return { msg: "User undefined or null", status: 0 };

      let operationPromise;

      const loginRepository = new LoginRepository();

      operationPromise = await loginRepository.login(user);
      if (!operationPromise) return { msg: "Erro LoginService", status: 0 };

      return operationPromise;
    } catch (err) {
      return { msg: err.message || "Erro inesperado", status: 0 };
    }
  }
}

module.exports = LoginService;