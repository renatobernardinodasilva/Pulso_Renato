const { Escala, Plantao } = require('../models')

module.exports = {
  findAll() {
    return Escala.findAll({ include: [Plantao] })
  },

  findById(id) {
    return Escala.findByPk(id, { include: [Plantao] })
  },

  create(data) {
    return Escala.create(data)
  },

  publish(escala) {
    escala.escala_publicada = true
    return escala.save()
  }
}
