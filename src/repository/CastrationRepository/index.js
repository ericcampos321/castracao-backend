const mongoose = require('mongoose');
const ICastration = require("../../models/interface/Castration");
const Castration = require("../../schemas/CastrationSchema");
const City = require("../../schemas/CitySchema");
const moment = require('moment');
class RegisterCastrationRepository {
  async insertCadsRepository(ICastration) {
    try {
      if (!ICastration) return { msg: "Castracao undefined or null", status: 0 }

      let operationPromise;
      let result;

      const existCastration = await Castration.findOne({ 
        chiop: ICastration.chip 
      })

      if(existCastration) return { msg: "Castração ja existente", status: 0 }

      if (ICastration.animal.length >= 1) {
        for (const animals of ICastration.animal) {
          operationPromise = await Castration.create({
            animal: animals,
            name_tutor: ICastration.name_tutor,
            cpf: ICastration.cpf,
            phone: ICastration.phone,
            city: ICastration.city,
            address: ICastration.address,
            district: ICastration.district,
            cep: ICastration.cep,
            number_residence: ICastration.number_residence,
            bloco: ICastration.bloco,
            apto: ICastration.apto,
            createdAt: moment().format(),
            updatedAt: moment().format()
          })

          if (!operationPromise) return { msg: "Erro ao criar castracao", status: 0 }
          result = operationPromise
        }

        operationPromise = await City.findOne({ name: ICastration.city.name })
        if (!operationPromise) {
          operationPromise = await City.create({
            name: ICastration.city.name,
            code: ICastration.city.code,
          })
          if (!operationPromise) return { msg: "Erro ao criar castracao", status: 0 }
        }

        return {
          msg: "Castracao criada com sucesso",
          status: 1,
          data: result
        }
      }
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }
  async deleteCasdsRepository(id) {

    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return { msg: "ID do castracao undefined or null", status: 0 }

      let operationPromise;

      operationPromise = await Castration.deleteOne({ _id: id })
      if (!operationPromise) return { msg: "Erro ao deletar castracao", status: 0 }

      return {
        msg: "Castracao deletada com sucesso",
        status: 1,
        data: operationPromise,
      }
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }

  async updateCadsRepository(id, ICastration) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return { msg: "ID da castração inválido ou nulo", status: 0 }

      let operationPromise;

      // Busca uma castração existente no banco de dados usando o ID
      operationPromise = await Castration.findOne({ _id: id });

      // Se não encontrar ou o resultado for vazio, retorna uma mensagem de erro
      if (!operationPromise || operationPromise.length <= 0) return { msg: "Castração inexistente", status: 0 }

      // Define a variável 'result' com o valor encontrado ou null
      const result = operationPromise ?? null;

      // Se a castração foi encontrada (result não é null), prossegue com a atualização
      if (result) {
        // Atualiza os dados da castração com os valores fornecidos no objeto 'ICastration'
        operationPromise = await Castration.findOneAndUpdate(
          { _id: id },
          {
            animal: {
              species: ICastration.animal[0].species ? ICastration.animal[0].species : "", 
              sexy: ICastration.animal[0].sexy ? ICastration.animal[0].sexy : "",         
              name: ICastration.animal[0].name ? ICastration.animal[0].name : "",
              color: ICastration.animal[0].color ? ICastration.animal[0].color : "",
              size: ICastration.animal[0].size ? ICastration.animal[0].size : "",
              year: ICastration.animal[0].year ? ICastration.animal[0].year : "",
              chip: ICastration.animal[0].chip ? ICastration.animal[0].chip : "",
              intercorrencia: ICastration.animal[0].intercorrencia ? ICastration.animal[0].intercorrencia : "",
              nis: ICastration.animal[0].nis ? ICastration.animal[0].nis : "",
              image: ICastration.animal[0].image ? ICastration.animal[0].image : "",
            },
            name_tutor: ICastration.name_tutor ? ICastration.name_tutor : "",
            cpf: ICastration.cpf ? ICastration.cpf : "",
            phone: ICastration.phone ? ICastration.phone : "",
            city: ICastration.city ? ICastration.city : "",
            address: ICastration.address ? ICastration.address : "",
            district: ICastration.district ? ICastration.district : "",
            cep: ICastration.cep ? ICastration.cep : "",
            number_residence: ICastration.number_residence ? ICastration.number_residence : "",
            bloco: ICastration.bloco ? ICastration.bloco : "",
            apto: ICastration.apto ? ICastration.apto : "",
          }
        );

        // Se a operação de atualização falhar, retorna uma mensagem de erro
        if (!operationPromise) return { msg: "Erro ao atualizar castração", status: 0 }

        // Busca na coleção 'City' uma cidade com o nome fornecido
        operationPromise = await City.find({ name: ICastration.city.name });

        // Se a cidade não existir, cria uma nova entrada na coleção 'City'
        if (operationPromise.length <= 0) {
          operationPromise = await City.create({
            name: ICastration.city.name,
            code: ICastration.city.code,
          });

          // Se falhar ao criar a cidade, retorna uma mensagem de erro
          if (!operationPromise) return { msg: "Erro ao criar cidade durante atualização da castração", status: 0 }
        }

        // Busca a castração atualizada para retornar ao cliente
        operationPromise = await Castration.find({ _id: id });
        if (!operationPromise) return { msg: "Erro ao buscar castração atualizada", status: 0 }

        // Retorna sucesso, juntamente com os dados atualizados
        return {
          msg: "Castração atualizada com sucesso",
          status: 1,
          data: operationPromise,  // Dados da castração atualizada
        };
      }
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }

  async getCastrationRepository(idCastration) {
    try {
      if (!mongoose.Types.ObjectId.isValid(idCastration)) return { msg: "ID da castração inválido ou nulo", status: 0 }

      let operationPromise;

      operationPromise = await Castration.find({ _id: idCastration }).populate("city")
      if (!operationPromise) return { msg: "Castração inexistente", status: 0 }

      return {
        msg: "Registro encontrado com sucesso",
        status: 1,
        data: operationPromise
      }
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 } 
    }
  }

  async getInfoCastrationRepository(id, ICastration) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return { msg: "ID da castração inválido ou nulo", status: 0 }

      let operationPromise;

      operationPromise = await Castration.find({}).populate("city")
      if (!operationPromise) return { msg: "Castração inexistente", status: 0 }

      const castr = operationPromise ?? null;

      let totalRegister = castr.length
      let registerPortSmaill = []
      let registerPortMedium = []
      let registerPortLarge = []

      if (castr.length) {
        castr.forEach((castr) => {
          if (
            parseInt(castr.animal.size) >= 1 &&
            parseInt(castr.animal.size) <= 5
          )
            registerPortSmaill.push(castr)
          else if (
            parseInt(castr.animal.size) >= 6 &&
            parseInt(castr.animal.size) <= 15
          )
            registerPortMedium.push(castr)
          else
            registerPortLarge.push(castr)
        })
      }

      return {
        msg: "Castração encontrada",
        status: 1,
        totalRegister: totalRegister,
        registerPortSmaill: registerPortSmaill.length,
        registerPortMedium: registerPortMedium.length,
        registerPortLarge: registerPortLarge.length,
      }
    } catch (error) {
      return { msg: error.message || 'Erro interno do servidor', status: 0 }
    }
  }
}

module.exports = RegisterCastrationRepository;