const { Plantao, Profissional, Escala, Setor } = require('../models')

module.exports = {
  findAll() {
    return Plantao.findAll({
      include: [
        Profissional,
        { model: Escala, include: [Setor] }
      ]
    })
  },

  findById(id) {
    return Plantao.findByPk(id, {
      include: [
        Profissional,
        { model: Escala, include: [Setor] }
      ]
    })
  },

  create(data) {
    return Plantao.create(data)
  }
}
