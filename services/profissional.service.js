const profissionalRepo = require('../repositories/profissional.repository')
const setorRepo = require('../repositories/setor.repository')

module.exports = {
  async create(data) {
    if (!data.instituicao_id) {
      throw new Error('Instituição é obrigatória')
    }

    const setores = await setorRepo.findByInstituicao(data.instituicao_id)
    const especialidadesSetores = setores.map(s => s.especialidade)

    const valido = data.especialidades.some(e =>
      especialidadesSetores.includes(e)
    )

    if (!valido) {
      throw new Error('Especialidades incompatíveis com a instituição')
    }

    return profissionalRepo.create(data)
  },

  list() {
    return profissionalRepo.findAll()
  }
}
