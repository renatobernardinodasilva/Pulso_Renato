const router = require('express').Router()

router.use('/profissionais', require('./profissional.routes'))
router.use('/instituicoes', require('./instituicao.routes'))
router.use('/setores', require('./setor.routes'))
router.use('/escalas', require('./escala.routes'))
router.use('/plantoes', require('./plantao.routes'))

module.exports = router
