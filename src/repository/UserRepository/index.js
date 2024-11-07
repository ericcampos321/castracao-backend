const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const UserSchema = require('../../schemas/UserSchema');
const IUser = require('../../models/interface/User');
const IUserFilter = require('../../models/interface/User');

class UserRepository {
  // Método privado para hash da senha
  _hashPassword(password) {
    if (!password) {
      throw new Error("Senha é necessária para realizar o hash");
    }
    const saltRounds = 7;
    return bcrypt.hashSync(password, saltRounds);
  }

  // Metodo para buscar um usuário no banco de dados lista
  async getUserListRepository(query, limit, skip) {
 
    try {
      let operationPromise;

      const filter = this.filterFormat(query);
      let users;
      let totalFilterResult = 0;


      if (filter) {
        operationPromise = await UserSchema.find(filter)
          .limit(limit)
          .skip(0)
          .populate('permissions', 'name_permission');


        if (!operationPromise || operationPromise.length <= 0) {
          return { msg: "Nenhum usuário encontrado", status: 0 };
        }
        users = operationPromise ? operationPromise : null;
        totalFilterResult = operationPromise.length;
      } else {
        operationPromise = await UserSchema.find({})
        .populate("permissions", "name_permission")
        .skip(skip)
        .limit(limit)
        if (!operationPromise || operationPromise.length <= 0) {
          return { msg: "Nenhum usuário encontrado", status: 0 };
        }
        users = operationPromise ? operationPromise : null;
      }

      const totalUsers = operationPromise.length;

        const columns = ["Ações", "Número", "Nome", "Email", "Tipo de Usúario"];

        return {
          msg: "Usúarios cadastrados",
          status: 1,
          data: users,
          columns: columns,
          total: totalUsers,
          totalFilter: totalUsers,
        };
    } catch (error) {
      return { msg: error.message || error };
    }
  }

  // Método para inserir um usuário no banco de dados
  async insertUserRepository(user) {
    try {
      if (!user || !user.password) {
        return { msg: "Parâmetros de usuário ou senha estão indefinidos ou nulos", status: 0 };
      }

      let operationPromise;

      // Verifica se já existe um usuário com o mesmo email
      operationPromise = await UserSchema.find({ email: user.email });
      if (operationPromise.length >= 1) {
        return { msg: "Já existe um usuário com esse email", status: 0 };
      }

      // Faz o hash da senha antes de salvar o usuário
      user.password = this._hashPassword(user.password);

      // Cria o novo usuário
      operationPromise = await UserSchema.create(user);
      if (!operationPromise) {
        return { msg: "Erro ao criar usuário", status: 0 };
      }

      return {
        msg: "Usuário criado com sucesso",
        status: 1,
        data: operationPromise,
      };
    } catch (err) {
      return { msg: err.message || err };
    }
  }

  // Metodo para buscar um usuário no banco de dados
  async updateUserRepository(id, user) {
    try {
      if (!id) return { msg: "ID do usuário nulo ou indefinido", status: 0 }

      let operationPromise;
      operationPromise = await UserSchema.findOne({ _id: id })

      if (!operationPromise || operationPromise.length <= 0)
        return { msg: "Usuário não encontrado", status: 0 }

      const result = operationPromise ? operationPromise : null;

      if (result) {
        let changePassword = false;

        if (user) {
          if (user.password) changePassword = true;

          if (changePassword) {
            // Se for necessário trocar a senha, gera um hash criptografado da nova senha
            const salt = 7;
            const password = bcrypt.hashSync(user.password, salt);
            user.password = password;
          }

          operationPromise = await UserSchema.findOneAndUpdate({ _id: id },
            {
              $set: {
                email: user.email ? user.email : result.email,
                name: user.name ? user.name : result.name,
                password: user.password ? user.password : result.password,
                image: user.image ? user.image : result.image,
                permissions: user.permissions ? user.permissions : result.permissions,
              }
            },
          );

          if (!operationPromise)
            return { msg: "Erro ao atualizar usuário", status: 0 }

          operationPromise = await UserSchema.findOne({ _id: id });
          if (!operationPromise)
            return { msg: "Erro ao atualizar usuário", status: 0 }
        }
      }
      return {
        msg: "Usuário atualizado com sucesso",
        status: 1,
        data: operationPromise
      }

    } catch (error) {
      return { msg: error.message || error }
    }
  }

  // Metodo para deletar um usuário no banco de dados
  async deleteUserRepository(id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return { msg: "ID do usuário inválido", status: 0 };

      let operationPromise;

      operationPromise = await UserSchema.find({ _id: id })
      if (!operationPromise)
        return { msg: "Usuário não encontrado", status: 0 }

      operationPromise = await UserSchema.deleteOne({ _id: id })
      if (!operationPromise)
        return { msg: "Erro ao deletar usuário", status: 0 }

      return {
        msg: "Usuário deletado com sucesso",
        status: 1,
        data: operationPromise,
      }
    } catch (error) {
      return { msg: error.message || error }
    }
  }

  // Metodo para buscar um usuário no banco de dados
  async getUserRepository(idUser) {
    try {

      if (!idUser) return { msg: "ID do usuário nulo ou indefinido", status: 0 };

      const operationPromise = await UserSchema.findOne({ _id: idUser }).populate(
        'permissions'
      )
      if (!operationPromise)
        return { msg: "Usuário não encontrado", status: 0 };

      return {
        msg: "Usuário encontrado com sucesso",
        status: 1,
        data: operationPromise,
      };
    } catch (error) {
      return { msg: error.message || error };
    }
  }

  filterFormat(query) {
    let filter = {};
    if (query.filter.name || query.filter.email) {
      filter = {
        $and: [
          query.filter.name ? { name: query.filter.name } : {}, 
          query.filter.email ? { email: query.filter.email } : {}
        ],
      };
    }
    return filter;
  }

};



module.exports = new UserRepository();