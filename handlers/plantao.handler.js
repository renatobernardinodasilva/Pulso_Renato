const service = require('../services/plantao.service')

module.exports = {
  async list(req, res) {
    res.json(await service.list())
  },

  async create(req, res) {
    res.status(201).json(await service.create(req.body))
  },

  async pegar(req, res) {
    const { profissionalId } = req.body
    const plantao = await service.pegarPlantao(req.params.id, profissionalId)
    res.json(plantao)
  }
}
