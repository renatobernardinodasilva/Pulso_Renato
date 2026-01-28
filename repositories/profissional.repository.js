const { Profissional } = require('../models')

module.exports = {
  findAll() {
    return Profissional.findAll()
  },

  findById(id) {
    return Profissional.findByPk(id)
  },

  create(data) {
    return Profissional.create(data)
  }
}
