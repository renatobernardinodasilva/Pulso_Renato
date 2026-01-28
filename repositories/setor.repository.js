const { Setor } = require('../models')

module.exports = {
  findAll() {
    return Setor.findAll()
  },

  findByInstituicao(instituicaoId) {
    return Setor.findAll({ where: { instituicao_id: instituicaoId } })
  },

  create(data) {
    return Setor.create(data)
  }
}
