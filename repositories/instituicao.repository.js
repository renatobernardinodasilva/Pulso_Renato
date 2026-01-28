const { Instituicao, Setor } = require('../models')

module.exports = {
  findAll() {
    return Instituicao.findAll()
  },

  findById(id) {
    return Instituicao.findByPk(id, { include: [Setor] })
  },

  create(data) {
    return Instituicao.create(data)
  }
}
