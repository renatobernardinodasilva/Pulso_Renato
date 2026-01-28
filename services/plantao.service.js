const plantaoRepo = require('../repositories/plantao.repository')
const profissionalRepo = require('../repositories/profissional.repository')

module.exports = {
  list() {
    return plantaoRepo.findAll()
  },

  create(data) {
    return plantaoRepo.create(data)
  },

  async pegarPlantao(plantaoId, profissionalId) {
    const plantao = await plantaoRepo.findById(plantaoId)
    const profissional = await profissionalRepo.findById(profissionalId)

    if (!plantao || !profissional) {
      throw new Error('Plantão ou profissional não encontrado')
    }

    const escala = plantao.Escala
    const setor = escala.Setor

    if (!escala.escala_publicada) {
      throw new Error('Escala não publicada')
    }

    if (!profissional.especialidades.includes(setor.especialidade)) {
      throw new Error('Especialidade incompatível')
    }

    if (profissional.instituicao_id !== setor.instituicao_id) {
      throw new Error('Instituição incompatível')
    }

    if (plantao.Profissionals.length >= plantao.quantidade_profissionais) {
      throw new Error('Limite de profissionais atingido')
    }

    await plantao.addProfissional(profissional)
    return plantao
  }
}
